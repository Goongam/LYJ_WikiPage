import Article from "@/components/Article";

interface Props {
  params: { title: string };
}
export async function generateMetadata({ params }: Props) {
  const { title } = params;
  return {
    title: `${decodeURIComponent(title)}`,
  };
}

export default async function WikiPage({ params }: Props) {
  const { title: currentTitle } = params;

  const decodeTitle = decodeURIComponent(currentTitle);

  return <Article title={decodeTitle} />;
}
