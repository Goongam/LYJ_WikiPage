import { addArticle } from "@/service/article";

export default function AddArticle() {
  const a = () => {
    const newArticle = {
      title: "새로운 글 제목",
      description: "새로운 글 내용",
      date: new Date("2024-02-15"),
    };

    addArticle(newArticle);
  };

  a();
  return <></>;
}
