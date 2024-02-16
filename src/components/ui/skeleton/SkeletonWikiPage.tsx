import SkeletonElement from "./SkeletonElement";

export default function SkeletonWikiPage() {
  return (
    <section className="p-5">
      <SkeletonElement type="title" />
      <SkeletonElement type="content" className="mt-6" />
    </section>
  );
}
