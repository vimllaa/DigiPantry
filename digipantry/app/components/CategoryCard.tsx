import AddToCategoryButton from "./AddToCategoryButton";

interface ContentCarProps {
  title: string;
  description: string;
  category: string;
}

export default function CategoryCard({
  title,
  description,
  category,
}: ContentCarProps) {
  return (
    <div className=" flex flex-col bg-neutral-200 rounded-xl max-w-max overflow-hidden shadow-lg m-4 ">
      <h1>{title}</h1>
      <p>{description}</p>
      <AddToCategoryButton category={category}></AddToCategoryButton>
    </div>
  );
}
