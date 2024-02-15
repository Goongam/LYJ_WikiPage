import Article from "@/components/Article";

interface Props {
  params: { title: string };
}

export default async function WikiPage({ params }: Props) {
  const { title: currentTitle } = params;

  const decodeTitle = decodeURIComponent(currentTitle);

  return (
    <section className="p-5">
      <Article title={decodeTitle} />
    </section>
  );
}
