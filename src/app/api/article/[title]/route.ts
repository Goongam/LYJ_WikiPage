import { editArticle, getAllArticles, getArticle } from "@/service/article";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: { title: string };
}

export async function GET(req: NextRequest, context: Context) {
  const { title } = context.params;

  if (!title) {
    return NextResponse.json("잘못된 요청입니다", { status: 400 });
  }

  const article = await getArticle(title);
  const allArticles = await (await getAllArticles())
    .map(({ title }) => title)
    .sort((a, b) => b.length - a.length);

  if (!article) return NextResponse.json("찾을 수 없는 위키", { status: 404 });
  return NextResponse.json({ article, allArticles }, { status: 200 });
}
