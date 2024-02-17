import Link from "next/link";

export default async function Header() {
  return (
    <header className="w-full min-h-14 bg-black flex justify-between items-center text-white px-3">
      <a href="/" className="font-extrabold text-3xl">
        CODING WIKI
      </a>
      <Link href={"/new"} className="font-bold">
        추가
      </Link>
    </header>
  );
}
