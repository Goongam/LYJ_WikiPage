import WikiList from "@/components/WikiList";

interface Props {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: Props) {
  const page = Number(searchParams?.page);

  return (
    <div className="w-full flex flex-col p-5 gap-10 h-full">
      <div className="w-full border rounded-md h-32 p-2">
        <h2 className="text-5xl font-extrabold">코딩위키</h2>
        <p className="mt-2">우리 모두가 만들어가는 자유 백과사전</p>
      </div>
      <WikiList page={isNaN(page) ? 1 : page} />
    </div>
  );
}
