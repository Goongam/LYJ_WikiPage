import AddArticle from "@/components/AddArticle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "추가",
  description: "새로운 글을 추가합니다",
};

export default function NewArticlePage() {
  return <AddArticle />;
}
