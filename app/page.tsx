
<section className="bg-gradient-to-r from-blue-200 to-blue-400 py-20 px-6 text-center rounded-2xl shadow-md mb-12">
  <h1 className="text-5xl font-bold text-blue-900 mb-4">From Counting to Calculus</h1>
  <p className="text-lg text-blue-800 mb-6">Building deep mathematical foundations for the next generation of thinkers</p>
  <div className="w-full h-64 bg-gradient-to-br from-blue-300 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-semibold">
    Hero Image Placeholder
  </div>
</section>


export default function HomePage() {
  return (
    <main className="px-4 py-10 max-w-6xl mx-auto space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Deepblue Studio</h1>
        <p className="text-lg text-gray-600">Building Foundations to Frontiers from Counting to Calculus</p>
        <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a>
      </section>

      



      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">What Families Say</h2>
        <blockquote className="italic text-gray-700">"My daughter went from dreading math to topping her class." – Parent of 6th grader</blockquote>
        <blockquote className="italic text-gray-700">"The Deepblue team helped me get into my dream summer math camp." – 10th grade student</blockquote>
        
  <blockquote className="italic text-gray-700">
    "Testimonial coming soon"
  </blockquote>
  <p className="text-sm text-gray-500">– Harry, ISB Class of 2020, Columbia Class of 2024</p>

  <blockquote className="italic text-gray-700">
    "Testimonial coming soon"
  </blockquote>
  <p className="text-sm text-gray-500">– Alan, ISB Class of 2020, Columbia Class of 2024</p>

  <blockquote className="italic text-gray-700">
    "Testimonial coming soon"
  </blockquote>
  <p className="text-sm text-gray-500">– Diana, Indian Hill Class of 2021, Harvard Class of 2025</p>

  <blockquote className="italic text-gray-700">
    "Testimonial coming soon"
  </blockquote>
  <p className="text-sm text-gray-500">– Emory, ISB Class of 2021, Columbia Class of 2025</p>

  <a href="/testimonials" className="text-blue-600 hover:underline">Read more</a>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Featured Tutorial</h2>
        <a href="/tutorials" className="text-blue-600 hover:underline">Understanding Mean vs. Median</a>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Panel Archive</h2>
        <ul className="list-disc pl-6 text-blue-600 space-y-1">
          <li><a href="/panels/road-to-university-1" className="hover:underline">Road to University #1</a></li>
          <li><a href="/panels/road-to-university-2" className="hover:underline">Road to University #2</a></li>
        </ul>
        <a href="/panels" className="text-blue-600 hover:underline">View all panels</a>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">🎓 Road to University</h2>
        <div className="bg-blue-200 h-40 rounded-xl flex items-center justify-center text-blue-900 font-medium">
          [ Placeholder: Road to University Panel Preview ]
        </div>
        <p className="text-gray-700">Explore our student-led panels sharing advice, admissions stories, and strategies to reach top U.S. universities.</p>
        <a href="/r2u" className="text-blue-600 hover:underline">View all panels →</a>
      </section>
    </main>
  );
}
