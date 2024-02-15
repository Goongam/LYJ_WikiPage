import { getAllArticles, getArticle } from "@/service/article";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
// import {Link}

type LinkType = typeof Link;
interface Props {
  params: { title: string };
}

export default async function WikiPage({ params }: Props) {
  const { title: currentTitle } = params;

  const decodeTitle = decodeURIComponent(currentTitle);

  const article = await getArticle(decodeTitle);

  const allTitles = await (await getAllArticles())
    .map(({ title }) => title)
    .sort((a, b) => b.length - a.length);

  if (!article) notFound();

  // 1. 위키 타이틀 목록 가져오기
  // 2. 긴 순서로 정렬
  // 3. 정규화를 통한 Link로 변환
  const contentWithLinks2: ReactNode[] = allTitles.reduce(
    (accContent: ReactNode[], title) => {
      const titleRegex = new RegExp(`(${title})`, "g");
      return accContent.flatMap((part) => {
        if (typeof part === "string") {
          return part.split(titleRegex).map((segment, index) => {
            if (segment === title && segment !== decodeTitle) {
              return (
                <Link
                  key={`${title}-${index}`}
                  href={`/wiki/${encodeURIComponent(title)}`}
                  className="text-blue-500 hover:underline"
                >
                  {title}
                </Link>
              );
            }
            return segment;
          });
        } else {
          return part;
        }
      });
    },
    [article.content]
  );

  return (
    <section>
      <h1>{decodeTitle}</h1>
      <div>{contentWithLinks2}</div>
    </section>
  );
}
