import { Article } from "@/service/article";

export type SimpleArticle = Omit<Article, "date">;

export type ErrorType = { error: boolean; message?: string };
