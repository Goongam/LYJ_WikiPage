import Link from "next/link";

interface Props {
  showPage: number;
  maxPage: number;
  currentPage?: number;
}
export default function PageNation({
  maxPage,
  showPage,
  currentPage = 1,
}: Props) {
  if (currentPage <= 0 || currentPage > maxPage) return <></>;

  const startPage = Math.floor((currentPage - 1) / showPage) * showPage + 1;

  const page = new Array(showPage)
    .fill(0)
    .map((_, i) => i + startPage)
    .filter((p) => p !== 0 && p <= maxPage);

  const prevPage = page[0] - 1 <= 0 ? null : page[0] - 1;
  const nextPage =
    page[page.length - 1] + 1 <= maxPage ? page[page.length - 1] + 1 : null;

  return (
    <div className="w-full my-5 flex gap-2 justify-center text-2xl">
      {prevPage && <Link href={`?page=${1}`}>{`1`}</Link>}
      {prevPage && <Link href={`?page=${prevPage}`}> {`...`} </Link>}
      {page.map((i) => (
        <Link
          href={`?page=${i}`}
          className={`${currentPage === i && "font-bold"}`}
          key={i}
        >
          {i}
        </Link>
      ))}
      {nextPage && <Link href={`?page=${nextPage}`}>{`...`}</Link>}
      {nextPage && <Link href={`?page=${maxPage}`}>{maxPage}</Link>}
    </div>
  );
}
