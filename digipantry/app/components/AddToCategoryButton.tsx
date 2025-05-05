"use client";

interface AddToCategoryButtonProps {
  category: string;
}

export default function AddToCategoryButton({
  category,
}: AddToCategoryButtonProps) {
  return (
    <button onClick={() => console.log("Added to inventory")}>
      Go to {category}
    </button>
  );
}
