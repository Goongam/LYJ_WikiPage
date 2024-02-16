import SkeletonElement from "./SkeletonElement";

export default function SkeletonUpdatePage() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full p-4">
      <div className="w-full flex flex-col h-full max-w-screen-md gap-2">
        <SkeletonElement type="title" />
        <SkeletonElement type="textarea" />
        <SkeletonElement type="title" />
      </div>
    </section>
  );
}
