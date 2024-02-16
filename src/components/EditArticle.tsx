"use client";

import UpdateArticleForm from "./UpdateArticleForm";
import { useArticle } from "@/hooks/useArticle";
import SkeletonUpdatePage from "./ui/skeleton/SkeletonUpdatePage";

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

  if (isLoading || !article) return <SkeletonUpdatePage />;

  return (
    <UpdateArticleForm submit={editArticle} type="edit" initData={article} />
  );
}
