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
    <div className=" flex flex-col bg-neutral-100 rounded-l max-w-max  overflow-hidden shadow-lg ">
      <h1>{title}</h1>
      <p>{description}</p>
      <AddToCategoryButton category={category}></AddToCategoryButton>
    </div>
  );
}
