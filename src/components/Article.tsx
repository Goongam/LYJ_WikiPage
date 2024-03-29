"use client";

import Link from "next/link";

import ArticleContent from "./ArticleContent";
import { useArticle } from "@/hooks/useArticle";
import { notFound } from "next/navigation";
import ArticleLoading from "./ui/ArticleLoading";

interface Props {
  title: string;
}

export default function Article({ title }: Props) {
  const { allTitles, article, isError } = useArticle(title);

  if (isError) notFound();
  if (!article) return <ArticleLoading />;

  return (
    <section className="p-5 flex-1 min-h-screen">
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
