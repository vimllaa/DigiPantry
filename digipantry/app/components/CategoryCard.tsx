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
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <h1>{title}</h1>
      <p>{description}</p>
      <AddToCategoryButton category={category}></AddToCategoryButton>
    </div>
  );
}
