import { getArticles, getArticlesCount } from "@/service/article";
import ArticleListTitle from "./ArticleListTitle";
import PageNation from "./ui/PageNation";
import { PAGELIST_SHOW_COUNT, PAGE_SHOW_COUNT } from "@/constants";
interface Props {
  page?: number;
}

export default async function ArticleList({ page = 1 }: Props) {
  const articles = await getArticles(page);
  const maxPage = Math.ceil((await getArticlesCount()) / PAGE_SHOW_COUNT);

  return (
    <section className="flex flex-col gap-2 h-full">
      {articles.map(({ title }) => (
        <ArticleListTitle title={title} key={title} />
      ))}
      <div className="mt-auto">
        <PageNation
          maxPage={maxPage}
          showPage={PAGELIST_SHOW_COUNT}
          currentPage={page}
        />
      </div>
    </section>
  );
}
