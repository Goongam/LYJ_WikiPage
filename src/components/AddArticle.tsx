"use client";

import { Article } from "@/service/article";
import UpdateArticleForm from "./UpdateArticleForm";

interface Props {
  initData?: Omit<Article, "date">;
}

export default function AddArticle({ initData }: Props) {
  const newArticle = (title: string, content: string) =>
    fetch("/api/new", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
    });

  return (
    <UpdateArticleForm submit={newArticle} type="new" initData={initData} />
  );
}
