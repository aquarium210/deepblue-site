"use client";
import { useState, useEffect, useRef } from "react";

const mockPosts = Array.from({ length: 20 }).map((_, i) => ({
  title: `Sample Blog Post #${i + 1}`,
  description: "Insights and strategies from Deepblue Studio on high school math pathways, standardized tests, competitions, and more.",
  date: `2024-0${(i % 9) + 1}-15`,
}));

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(8);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisibleCount(prev => Math.min(prev + 4, mockPosts.length));
        }
      },
      { threshold: 1.0 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => loaderRef.current && observer.unobserve(loaderRef.current);
  }, []);

  return (
    <main className="px-4 py-10 max-w-3xl mx-auto space-y-10">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Deepblue Blog & Tutorials</h1>
        <p className="text-lg text-gray-600">
          Deep dives, strategies, and updates from our studio. Tailored for curious learners and thoughtful parents.
        </p>
      </header>

      <section className="space-y-8">
        {mockPosts.slice(0, visibleCount).map((post, i) => (
          <div key={i} className="border-b pb-4">
            <p className="text-sm text-gray-500">{post.date}</p>
            <h2 className="text-2xl text-blue-700 font-semibold">{post.title}</h2>
            <p className="text-gray-700 mt-1 text-base">{post.description}</p>
          </div>
        ))}
      </section>

      {visibleCount < mockPosts.length && (
        <div ref={loaderRef} className="h-10 mt-10 flex items-center justify-center text-sm text-gray-400">
          Loading more posts...
        </div>
      )}
    </main>
  );
}
