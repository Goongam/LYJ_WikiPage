import { UploadType } from "../UpdateArticleForm";

interface Props {
  type: UploadType;
  loading?: boolean;
}
export default function UpdateButton({ type, loading = false }: Props) {
  return (
    <button
      className="bg-green-400 rounded-lg p-2 text-slate-950 font-bold"
      disabled={loading}
    >
      {type === "edit" ? "수정" : "작성"}
    </button>
  );
}
