"use client";

import { SimpleArticle } from "@/types/article";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  title: string;
}

export default function Article({ title }: Props) {
  const [article, setArticle] = useState<SimpleArticle>();
  const [allTitles, setAllTitle] = useState<string[]>([]);
  useEffect(() => {
    fetch(`/api/article/${title}`)
      .then((res) => {
        if (res.status === 200) return res.json();
        if (res.status === 404) console.log("404");
      })
      .then((data) => {
        setArticle(data.article);
        setAllTitle(data.allArticles);
      });
  }, [title]);

  if (!article) return <>loading...</>;

  // 1. 위키 타이틀 목록 가져오기
  // 2. 긴 순서로 정렬
  // 3. 정규화를 통한 Link로 변환
  const contentWithLinks2: ReactNode[] = allTitles.reduce(
    (accContent: ReactNode[], findTitle) => {
      const titleRegex = new RegExp(`(${findTitle})`, "g");
      return accContent.flatMap((part, index) => {
        if (typeof part !== "string") return part;
        return part.split(titleRegex).map((segment, index2) => {
          //위키 제목이 일치하며, 현재페이지의 위키가 아닌 단어
          if (segment === findTitle && segment !== title) {
            return (
              <Link
                key={`${index}-${findTitle}-${index2}`}
                href={`/wiki/${encodeURIComponent(findTitle)}`}
                className="text-blue-500 hover:underline"
              >
                {findTitle}
              </Link>
            );
          }
          return segment;
        });
      });
    },
    [article.content]
  );

  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">{title}</h1>
        <Link href={`/edit/${title}`}>수정</Link>
      </div>
      <div className="mt-5">{contentWithLinks2}</div>
    </section>
  );
}
