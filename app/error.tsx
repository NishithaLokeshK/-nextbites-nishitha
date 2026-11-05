"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="state-container error-state">
      <span className="state-icon">⚠️</span>
      <h2>Something went wrong!</h2>
      <p>We ran into an unexpected problem loading this page.</p>
      <button onClick={() => reset()} className="btn-primary">
        Try again
      </button>
    </main>
  );
}
