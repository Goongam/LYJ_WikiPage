import { SimpleArticle } from "@/types/article";
import { useEffect, useState } from "react";

export function useArticle(title: string) {
  const [article, setArticle] = useState<SimpleArticle>();
  const [allTitles, setAllTitle] = useState<string[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(`/api/article/${title}`)
      .then((res) => {
        if (res.status === 200) return res.json();
        if (res.status === 404) throw new Error();
      })
      .then((data) => {
        setArticle(data.article);
        setAllTitle(data.allArticles);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [title]);

  return { article, allTitles, isLoading: loading, isError: error };
}
