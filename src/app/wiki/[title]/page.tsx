import { getArticle } from "@/service/article";
import { notFound } from "next/navigation";

interface Props {
  params: { title: string };
}

export default async function WikiPage({ params }: Props) {
  const { title } = params;

  const decodeTitle = decodeURIComponent(title);

  const article = await getArticle(decodeTitle);

  if (!article) notFound();

  return <></>;
}
