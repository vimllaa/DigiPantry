import Link from "next/link";
import CategoryCard from "./components/CategoryCard";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar></NavBar>
        <h1>How can I be to help?</h1>
        <Link href="/inventory"> My pantry </Link>
        <CategoryCard
          title="Grains"
          description="Rice, wheat, oats"
          category="Grains"
        ></CategoryCard>
      </div>
    </main>
  );
}
