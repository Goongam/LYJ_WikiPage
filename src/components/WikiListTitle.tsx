import Link from "next/link";

interface Props {
  title: string;
}
export default function WikiListTitle({ title }: Props) {
  return (
    <Link
      href={`/wiki/${title}`}
      className="flex items-center border p-2 h-16 rounded-md hover:bg-slate-100"
      key={title}
    >
      {title}
    </Link>
  );
}
