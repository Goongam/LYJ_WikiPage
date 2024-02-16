"use client";
import { useMutate } from "@/hooks/useFetch";
import { useInput } from "@/hooks/useInput";
import { Article } from "@/service/article";
import { validArticle } from "@/validations/newArticle";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import UpdateButton from "./ui/UpdateButton";
import Uploading from "./ui/Uploading";

export type UploadType = "new" | "edit";

interface Props {
  type: UploadType;
  submit: (title: string, content: string) => Promise<Response>;
  initData?: Omit<Article, "date">;
  initLoading?: boolean;
}

export default function UpdateArticleForm({
  type,
  submit,
  initData = { title: "", content: "" },
  initLoading,
}: Props) {
  const {
    value: titleValue,
    onchange: titleChange,
    error: titleError,
    showError: showTitleError,
  } = useInput(initData.title);
  const {
    value: contentValue,
    onchange: contentChange,
    error: contentError,
    showError: showContentError,
  } = useInput(initData.content);

  const router = useRouter();

  // 업로드 api 커스텀 훅
  const { loading, mutate, serverError } = useMutate(
    () => submit(titleValue, contentValue),
    {
      onSuccess: () => router.push(`/wiki/${titleValue}`),
    }
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // 텍스트 검증
    if (!validArticle.title(titleValue)) return showTitleError();
    if (!validArticle.content(contentValue)) return showContentError();

    mutate();
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center p-2 gap-2">
      {serverError.error && (
        <p className="w-full text-center h-20 flex items-center justify-center bg-red-400 rounded-md text-white font-bold max-w-screen-md">
          {serverError.message}
        </p>
      )}
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full h-full max-w-screen-md gap-5"
      >
        <input
          type="text"
          value={titleValue}
          onChange={titleChange}
          placeholder="제목을 입력하세요"
          className={`${
            titleError && "border border-red-500"
          } outline-none border p-2 rounded-md`}
          disabled={type === "edit"} //타입이 edit일 경우 수정불가
        />
        <textarea
          value={contentValue}
          onChange={contentChange}
          placeholder="내용을 입력하세요"
          disabled={initLoading}
          className={`${
            contentError && "border border-red-500"
          } outline-none flex-1 resize-none border p-2 rounded-md`}
        />
        <UpdateButton type={type} loading={initLoading} />
      </form>
      <Uploading loading={loading} />
    </section>
  );
}
