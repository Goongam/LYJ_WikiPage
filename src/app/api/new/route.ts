import { addArticle, getArticle } from "@/service/article";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { title, content } = await req.json();

  if (!title || !content) {
    return NextResponse.json("잘못된 요청입니다", { status: 400 });
  }

  const sameTitleArticle = await getArticle(title);
  if (sameTitleArticle)
    return NextResponse.json("이미 존재하는 글입니다", { status: 400 });

  const newArticle = {
    title,
    content,
    date: new Date(),
  };

  return addArticle(newArticle)
    .then(() => {
      return NextResponse.json("성공적으로 추가되었습니다", { status: 200 });
    })
    .catch(() => {
      return NextResponse.json("추가하는데 실패하였습니다", { status: 400 });
    });
}
