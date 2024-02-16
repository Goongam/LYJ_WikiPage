import AddArticle from "@/components/AddArticle";
import { Article } from "@/service/article";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "추가",
  description: "새로운 글을 추가합니다",
};

interface Props {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function NewArticlePage({ searchParams }: Props) {
  const title = searchParams?.init as string;

  const initData = title
    ? {
        content: "",
        title,
      }
    : undefined;
  return <AddArticle initData={initData} />;
}
