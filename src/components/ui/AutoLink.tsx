import Link from "next/link";

interface Props {
  title: string;
}

export default function AutoLink({ title }: Props) {
  return (
    <Link href={`/wiki/${title}`} className="text-blue-500 hover:underline">
      {title}
    </Link>
  );
}
