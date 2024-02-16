"use client";

import { SimpleArticle } from "@/types/article";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import ArticleContent from "./ArticleContent";

interface Props {
  title: string;
}

export default function Article({ title }: Props) {
  const [article, setArticle] = useState<SimpleArticle>();
  const [allTitles, setAllTitle] = useState<string[]>([]);

  // TODO: 분리 및 로딩, 에러state추가
  useEffect(() => {
    fetch(`/api/article/${title}`)
      .then((res) => {
        if (res.status === 200) return res.json();
        if (res.status === 404) console.log("404");
      })
      .then((data) => {
        setArticle(data.article);
        setAllTitle(data.allArticles);
      });
  }, [title]);

  if (!article) return <>loading...</>;

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">{title}</h1>
        <Link href={`/edit/${title}`}>수정</Link>
      </div>
      <ArticleContent
        allTitles={allTitles}
        content={article.content}
        title={title}
      />
    </section>
  );
}
