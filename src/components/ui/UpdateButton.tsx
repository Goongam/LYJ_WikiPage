import { UploadType } from "../UpdateArticleForm";

interface Props {
  type: UploadType;
}
export default function UpdateButton({ type }: Props) {
  return (
    <button className="bg-green-400 rounded-lg p-2 text-slate-950 font-bold">
      {type === "edit" ? "수정" : "작성"}
    </button>
  );
}
