import CategoryCard from "./components/CategoryCard";
import NavBar from "./components/Navbar/NavBar";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar></NavBar>

        <div className="flex align-middle justify-center">
          <CategoryCard
            title="Grains"
            description="This is a short description for this categoryCard, you can add more text here"
            category="Grains"
          ></CategoryCard>
          <CategoryCard
            title="Grains"
            description="This is a short description for this categoryCard, you can add more text here"
            category="Grains"
          ></CategoryCard>
          <CategoryCard
            title="Grains"
            description="This is a short description for this categoryCard, you can add more text here"
            category="Grains"
          ></CategoryCard>
          <CategoryCard
            title="Grains"
            description="This is a short description for this categoryCard, you can add more text here"
            category="Grains"
          ></CategoryCard>
        </div>
      </div>
    </main>
  );
}
