import CategoryCard from "./components/CategoryCard";
import ChatBar from "./components/ChatBar";
import NavBar from "./components/Navbar/NavBar";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar></NavBar>
        <div className="">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Vad kan jag hjälpa dig med?
          </h1>
          <p>Ta hjälp av chatten nedan</p>
          <ChatBar></ChatBar>
          <div className="flex">
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
      </div>
    </main>
  );
}
