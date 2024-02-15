import {
  getAllArticles,
  getArticles,
  getArticlesCount,
} from "@/service/article";
import WikiListTitle from "./WikiListTitle";
import PageNation from "./ui/PageNation";
import { PAGE_SHOW_COUNT } from "@/constants";
interface Props {
  page?: number;
}
export default async function WikiList({ page = 1 }: Props) {
  const articles = await getArticles(page);
  const maxPage = Math.ceil((await getArticlesCount()) / PAGE_SHOW_COUNT);
  return (
    <section className="flex flex-col gap-2">
      {articles.map(({ title }) => (
        <WikiListTitle title={title} key={title} />
      ))}
      <PageNation maxPage={maxPage} showPage={5} currentPage={page} />
    </section>
  );
}
