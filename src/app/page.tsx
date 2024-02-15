import Header from "@/components/Header";
import WikiList from "@/components/WikiList";

export default function Home() {
  return (
    <div className="w-full flex flex-col p-5 gap-10">
      <div className="w-full border rounded-md h-32 p-2">
        <h2 className="text-5xl font-extrabold">코딩위키</h2>
        <p className="mt-2">우리 모두가 만들어가는 자유 백과사전</p>
      </div>
      <WikiList />
    </div>
  );
}
