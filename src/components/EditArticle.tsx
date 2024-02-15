"use client";

import { useEffect, useState } from "react";
import UpdateArticleForm from "./UpdateArticleForm";
import { Article } from "@/service/article";
import { SimpleArticle } from "@/types/article";

interface Props {
  title: string;
}
export default function EditArticle({ title }: Props) {
  const [article, setArticle] = useState<SimpleArticle>();
  const editArticle = (title: string, content: string) =>
    fetch("/api/edit", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
    });

  useEffect(() => {
    fetch(`/api/article/${title}`)
      .then((res) => res.json())
      .then((data) => setArticle(data.article));
  }, [title]);
  return (
    <UpdateArticleForm submit={editArticle} type="edit" initData={article} />
  );
}
