import EditArticle from "@/components/EditArticle";
interface Props {
  params: { title: string };
}
export default function NewArticlePage({ params }: Props) {
  const { title: currentTitle } = params;

  const decodeTitle = decodeURIComponent(currentTitle);

  return <EditArticle title={decodeTitle} />;
}
