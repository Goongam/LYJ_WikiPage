import Link from "next/link";
import { ReactNode } from "react";
import AutoLink from "./ui/AutoLink";
import { translateLink } from "@/validations/translateLink";
import { makeLink } from "@/utils/makeLink";

interface Props {
  allTitles: string[];
  title: string;
  content: string;
}

export default function ArticleContent({ allTitles, title, content }: Props) {
  const contentWithLinks2: ReactNode[] = allTitles.reduce(makeLink(title), [
    content,
  ]);

  return <p className="mt-5 whitespace-pre-wrap">{contentWithLinks2}</p>;
}
