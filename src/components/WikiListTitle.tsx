interface Props {
  title: string;
}
export default function WikiListTitle({ title }: Props) {
  return <div className="w-full">{title}</div>;
}
