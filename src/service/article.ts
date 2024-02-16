import { PAGE_SHOW_COUNT } from "@/constants";
import { readFile, writeFile } from "fs/promises";
import path from "path";
export interface Article {
  title: string;
  content: string;
  date: Date;
}

/**
 * 전체 글 반환 함수
 *
 */
export const getAllArticles = async () => {
  const filePath = path.join(process.cwd(), "src/data", "articles.json");
  return readFile(filePath, "utf-8")
    .then<Article[]>(JSON.parse)
    .then((data) =>
      data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    );
};

/**
 * 특정 페이지 글 반환 함수
 * @param {number} page 페이지 입력
 */
export const getArticles = async (page: number) => {
  const articles = await getAllArticles();

  return articles.slice((page - 1) * PAGE_SHOW_COUNT, page * PAGE_SHOW_COUNT);
};

/**
 * 전체 글 개수 반환 함수
 */
export const getArticlesCount = async () => {
  const articles = await getAllArticles();

  return articles.length;
};

/**
 * 특정 글 반환 함수
 * @param {string} title 위키 제목 입력란
 */
export const getArticle = async (title: string) => {
  const articles = await getAllArticles();

  return articles.find((article) => article.title === title);
};

/**
 * 위키 글 추가 함수
 * @param {Article}
 */
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

    // test
    const test = await readFile(filePath, "utf-8").then<Article[]>(JSON.parse);
    console.log(test);
  } catch (error) {
    console.error("글 추가 에러:", error);
  }
};

/**
 * 위키 글 수정 함수
 * @param {Article}
 */
export const editArticle = async (editArticle: Article) => {
  const filePath = path.join(process.cwd(), "src/data", "articles.json");

  try {
    const articles = await readFile(filePath, "utf-8").then<Article[]>(
      JSON.parse
    );

    // 제목이 같은 기사 찾아 내용(content) 업데이트
    const updatedArticles = articles.map((article) => {
      if (article.title === editArticle.title) {
        return { ...article, content: editArticle.content };
      }
      return article;
    });

    // 수정된 데이터를 JSON 형태로 변환
    const updatedData = JSON.stringify(updatedArticles, null, 2);

    // 파일에 업데이트된 데이터 작성
    return await writeFile(filePath, updatedData, "utf-8");
  } catch (error) {
    console.error("글 추가 에러:", error);
  }
};
