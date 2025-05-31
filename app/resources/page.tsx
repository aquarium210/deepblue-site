"use client";
import { useState } from "react";

const resources = [
  { title: "AMC 10 Official Archive", url: "https://artofproblemsolving.com/wiki/index.php/AMC_10_Problems_and_Solutions", tags: ["AMC", "Competitions"] },
  { title: "SAT Practice via Khan Academy", url: "https://www.khanacademy.org/test-prep/sat", tags: ["SAT", "Standardized Test"] },
  { title: "Common Core Math Overview", url: "https://www.corestandards.org/Math/", tags: ["Curriculum", "Common Core"] },
  { title: "SAS Math Placement Guide", url: "#", tags: ["Placement", "SAS"] },
  { title: "Deepblue Math Tutorials", url: "#", tags: ["Tutorials", "Deepblue"] },
];

const allTags = Array.from(new Set(resources.flatMap(r => r.tags)));

export default function ResourcesPage() {
  const [selectedTag, setSelectedTag] = useState("");

  const filteredResources = selectedTag
    ? resources.filter(r => r.tags.includes(selectedTag))
    : resources;

  return (
    <main className="px-4 py-10 max-w-4xl mx-auto space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Resources</h1>
        <p className="text-gray-600">Explore curated tools, links, and references from Deepblue Studio.</p>
      </section>

      <section className="flex flex-wrap gap-2 justify-center">
        <button onClick={() => setSelectedTag("")} className={`px-3 py-1 rounded-full text-sm ${selectedTag === "" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>All</button>
        {allTags.map(tag => (
          <button key={tag} onClick={() => setSelectedTag(tag)} className={`px-3 py-1 rounded-full text-sm ${selectedTag === tag ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>
            {tag}
          </button>
        ))}
      </section>

      <section className="space-y-4">

      <section className="border p-4 rounded-xl hover:shadow transition bg-blue-50">
        <a href="/r2u" className="text-blue-700 font-semibold text-lg hover:underline">
          🎓 Road to University Panels
        </a>
        <p className="text-sm text-gray-600 mt-1">
          Sign up to attend panels featuring Deepblue students discussing their academic journeys and sharing important lessons for middle and high schoolers.
        </p>
      </section>

        {filteredResources.map((res, idx) => (
          <div key={idx} className="border p-4 rounded-xl hover:shadow transition">
            <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold text-lg hover:underline">
              {res.title}
            </a>
            <div className="mt-1 text-sm text-gray-500 space-x-2">
              {res.tags.map((tag, i) => (
                <span key={i} className="inline-block bg-gray-200 px-2 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
