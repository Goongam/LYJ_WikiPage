"use client";

import UpdateArticleForm from "./UpdateArticleForm";

export default function AddArticle() {
  const newArticle = (title: string, content: string) =>
    fetch("/api/new", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
    });

  return <UpdateArticleForm submit={newArticle} type="new" />;
}
