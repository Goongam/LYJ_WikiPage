"use client";
import { useParams } from "next/navigation";

export default function NotFoundPage() {
  const params = useParams<{ title: string }>();

  const title = decodeURIComponent(params.title);

  return <>{title}문서를 찾을 수 없음</>;
}
