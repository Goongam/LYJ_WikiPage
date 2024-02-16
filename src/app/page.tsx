import ArticleList from "@/components/ArticleList";

interface Props {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: Props) {
  const page = Number(searchParams?.page);

  const currentPage = isNaN(page) ? 1 : page;

  return (
    <div className="w-full flex flex-col p-5 gap-10 h-full">
      <div className="w-full border rounded-md h-32 p-2">
        <h2 className="text-5xl font-extrabold">코딩위키</h2>
        <p className="mt-2">지식 저장소 코딩위키입니다</p>
      </div>
      <ArticleList page={currentPage} />
    </div>
  );
}
