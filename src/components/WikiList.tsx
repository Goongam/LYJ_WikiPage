import { getAllArticles } from "@/service/article";
import WikiListTitle from "./WikiListTitle";

export default async function WikiList() {
  const articles = await getAllArticles();

  return (
    <section>
      {articles.map(({ title }) => (
        <WikiListTitle title={title} key={title} />
      ))}
    </section>
  );
}
