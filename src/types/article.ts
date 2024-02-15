import { Article } from "@/service/article";

export type SimpleArticle = Omit<Article, "date">;
