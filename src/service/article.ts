import { readFile, writeFile } from "fs/promises";
import path from "path";
import { cache } from "react";

interface Article {
  title: string;
  description: string;
  date: Date;
}

export const getAllArticles = cache(async () => {
  const filePath = path.join(process.cwd(), "src/data", "articles.json");
  return readFile(filePath, "utf-8").then<Article[]>(JSON.parse);
});
