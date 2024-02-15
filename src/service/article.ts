import { PAGE_SHOW_COUNT } from "@/constants";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { cache } from "react";

interface Article {
  title: string;
  content: string;
  date: Date;
}

export const getAllArticles = cache(async () => {
  const filePath = path.join(process.cwd(), "src/data", "articles.json");
  return readFile(filePath, "utf-8").then<Article[]>(JSON.parse);
});

export const getArticles = cache(async (page: number) => {
  const articles = await getAllArticles();

  return articles.slice((page - 1) * PAGE_SHOW_COUNT, page * PAGE_SHOW_COUNT);
});

export const getArticlesCount = cache(async () => {
  const articles = await getAllArticles();

  return articles.length;
});

export const getArticle = cache(async (title: string) => {
  const articles = await getAllArticles();

  return articles.find((article) => article.title === title);
});

export const addArticle = async (newArticle: Article) => {
  const filePath = path.join(process.cwd(), "src/data", "articles.json");

  try {
    const articles = await readFile(filePath, "utf-8").then<Article[]>(
      JSON.parse
    );

    // 새로운 데이터를 배열에 추가
    articles.push(newArticle);

    // 수정된 데이터를 JSON 형태로 변환
    const updatedData = JSON.stringify(articles, null, 2);

    // 파일에 새로운 데이터 작성
    await writeFile(filePath, updatedData, "utf-8");
  } catch (error) {
    console.error("글 추가 에러:", error);
  }
};
