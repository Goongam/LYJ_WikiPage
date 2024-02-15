import { getAllArticles } from "@/service/article";
import WikiListTitle from "./WikiListTitle";

export default async function WikiList() {
  const articles = await getAllArticles();

  return (
    <section className="flex flex-col gap-2">
      {articles.map(({ title }) => (
        <WikiListTitle title={title} key={title} />
      ))}
    </section>
  );
}
