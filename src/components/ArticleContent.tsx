import { ReactNode } from "react";
import { makeLinkContent } from "@/utils/makeLink";

interface Props {
  allTitles: string[];
  title: string;
  content: string;
}

export default function ArticleContent({ allTitles, title, content }: Props) {
  const contentWithLinks2: ReactNode[] = allTitles.reduce(
    makeLinkContent(title),
    [content]
  );

  return <p className="mt-5 whitespace-pre-wrap">{contentWithLinks2}</p>;
}
