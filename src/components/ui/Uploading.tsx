interface Props {
  loading: boolean;
}
export default function Uploading({ loading }: Props) {
  return (
    <>
      {loading && (
        <div className="w-full h-[100vh] fixed top-0 bg-slate-400/50 flex items-center justify-center font-extrabold text-3xl">
          업로드 중...
        </div>
      )}
    </>
  );
}
