export default function TestimonialsPage() {
  return (
    <main className="px-4 py-10 max-w-5xl mx-auto space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Student Testimonials</h1>
        <p className="text-lg text-gray-600">Real stories from our students and their journeys through Deepblue Studio.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-100 p-6 rounded-xl shadow-sm">
          <div className="h-40 bg-blue-300 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-lg">
            [ Photo Placeholder ]
          </div>
          <p className="text-gray-700 italic">
            "Deepblue helped me move from IM2 to BC Calculus in a year. I wouldn't have made it without Daniel and Yusi."
          </p>
          <p className="text-right text-gray-600 font-medium mt-2">— William Sun, ISB ’20 / Columbia ’24 / MIT PhD Candidate</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl shadow-sm">
          <div className="h-40 bg-blue-300 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-lg">
            [ Photo Placeholder ]
          </div>
          <p className="text-gray-700 italic">
            "Deepblue gave me the confidence to pursue higher-level math and helped me prepare for the SAT and competitions."
          </p>
          <p className="text-right text-gray-600 font-medium mt-2">— Alex Tang, SAS ’24 / Dartmouth ’28</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl shadow-sm">
          <div className="h-40 bg-blue-300 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-lg">
            [ Photo Placeholder ]
          </div>
          <p className="text-gray-700 italic">
            "The small class sizes and personal feedback helped me truly understand and enjoy math."
          </p>
          <p className="text-right text-gray-600 font-medium mt-2">— [Placeholder Name], [School] ’XX / [College] ’XX</p>
        </div>
      
        <div className="bg-blue-100 p-6 rounded-xl shadow-sm">
          <div className="h-40 bg-blue-300 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-lg">
            [ Photo Placeholder ]
          </div>
          <p className="text-gray-700 italic">
            "Daniel and Yusi not only taught me math but also taught me how to think. Their support was instrumental throughout high school."
          </p>
          <p className="text-right text-gray-600 font-medium mt-2">— Brian Lung, SAS ’20 / Northwestern ’24</p>
        </div>
</section>
    </main>
  );
}
