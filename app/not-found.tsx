import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-container not-found">
      <span className="state-icon">🍽️</span>
      <h2>Recipe Not Found</h2>
      <p>Sorry, we couldn&apos;t find the recipe you were looking for.</p>
      <Link href="/" className="btn-primary">
        ← Back to all recipes
      </Link>
    </main>
  );
}
