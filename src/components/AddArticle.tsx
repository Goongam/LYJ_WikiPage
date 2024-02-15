"use client";
import { useMutate } from "@/hooks/useFetch";
import { useInput } from "@/hooks/useInput";
import { addArticle } from "@/service/article";
import { validArticle } from "@/validations/newArticle";
import { redirect, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AddArticle() {
  const {
    value: titleValue,
    onchange: titleChange,
    error: titleError,
    showError: showTitleError,
  } = useInput("");
  const {
    value: contentValue,
    onchange: contentChange,
    error: contentError,
    showError: showContentError,
  } = useInput("");

  const { loading, mutate, serverError } = useMutate(
    () =>
      fetch("/api/new", {
        method: "POST",
        body: JSON.stringify({
          title: titleValue,
          content: contentValue,
        }),
      }),
    {
      onSuccess: () => router.push(`/wiki/${titleValue}`),
    }
  );

  const router = useRouter();

  const submit = (e: FormEvent) => {
    e.preventDefault();

    if (!validArticle.title(titleValue)) return showTitleError();
    if (!validArticle.content(contentValue)) return showContentError();

    mutate();
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center p-2 gap-2">
      {serverError && (
        <p className="w-full text-center h-20 flex items-center justify-center bg-red-400 rounded-md text-white font-bold max-w-screen-md">
          {serverError}
        </p>
      )}
      <form
        onSubmit={submit}
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
        />
        <textarea
          value={contentValue}
          onChange={contentChange}
          placeholder="내용을 입력하세요"
          className={`${
            contentError && "border border-red-500"
          } outline-none flex-1 resize-none border p-2 rounded-md`}
        />
        <button className="bg-green-400 rounded-lg p-2 text-slate-950 font-bold">
          작성
        </button>
      </form>
      {loading && (
        <div className="w-full h-[100vh] fixed top-0 bg-slate-400/50 flex items-center justify-center font-extrabold text-3xl">
          업로드 중...
        </div>
      )}
    </section>
  );
}
