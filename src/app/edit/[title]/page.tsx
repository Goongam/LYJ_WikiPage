import EditArticle from "@/components/EditArticle";
import { Metadata } from "next";
interface Props {
  params: { title: string };
}

export async function generateMetadata({ params }: Props) {
  const { title: currentTitle } = params;

  const decodeTitle = decodeURIComponent(currentTitle);

  return {
    title: `${decodeTitle}-수정`,
  };
}

export default function NewArticlePage({ params }: Props) {
  const { title: currentTitle } = params;

  const decodeTitle = decodeURIComponent(currentTitle);

  return <EditArticle title={decodeTitle} />;
}
