import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";

export default function Home() {
  return (
    <main className="container">

      <section className="hero">
        <h1>Discover Delicious Recipes</h1>
        <p>
          Find your next favorite meal with NextBites!
        </p>
      </section>

      <h2 className="section-title">
        Popular Recipes
      </h2>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>

    </main>
  );
}