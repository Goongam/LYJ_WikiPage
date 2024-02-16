"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function NotFoundPage() {
  const params = useParams<{ title: string }>();
  const title = decodeURIComponent(params.title);

  return (
    <section className="p-5 flex-1 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">{title}</h1>
      </div>
      <div className="mt-5">문서를 찾을 수 없습니다!</div>
      <Link href={`/new?init=${title}`} className="text-blue-600">
        새 문서 만들기
      </Link>
    </section>
  );
}
