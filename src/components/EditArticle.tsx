"use client";

import UpdateArticleForm from "./UpdateArticleForm";
import { useArticle } from "@/hooks/useArticle";

interface Props {
  title: string;
}
export default function EditArticle({ title }: Props) {
  const { article, isLoading } = useArticle(title);

  const editArticle = (title: string, content: string) =>
    fetch("/api/edit", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
    });

  const loading = isLoading || !article;

  return (
    <UpdateArticleForm
      submit={editArticle}
      type="edit"
      initData={article}
      initLoading={loading}
    />
  );
}
