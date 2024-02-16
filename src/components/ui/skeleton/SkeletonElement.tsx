type SkeletonType = "title" | "content" | "textarea";
interface Props {
  type: SkeletonType;
  className?: string;
}

function getSkeletonStyle(type: SkeletonType) {
  switch (type) {
    case "title":
      return "w-full h-10";
    case "content":
      return "w-full min-h-screen";
    case "textarea":
      return "w-full flex-1";
  }
}

export default function SkeletonElement({ type, className }: Props) {
  return <div className={`skeleton ${getSkeletonStyle(type)} ${className}`} />;
}
