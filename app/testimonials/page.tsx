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
            "I had the pleasure of working with Daniel during my high school years, both as a student in his calculus class and when seeking his advice on my general schoolwork. His calculus course stood out for its clarity and rigor, proving Daniel as a caring instructor with a remarkable ability to teach complex concepts. Beyond the classroom, Daniel went above and beyond to support my academic journey—consistently offering thoughtful advice that extended far past calculus. He was not only an exceptional teacher but also a trusted mentor and, over time, a good friend."
          </p>
          <p className="text-right text-gray-600 font-medium mt-2">— William Sun, ISB ’20 / Columbia ’24 / MIT PhD Candidate</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl shadow-sm">
          <div className="h-40 bg-blue-300 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-lg">
            [ Photo Placeholder ]
          </div>
          <p className="text-gray-700 italic">
            "I first came to Daniel taking Dr Yuen’s advance pre-calc class, where I got a 55% on the first quiz. Taking Daniel’s class always added an extra sense of security as I could always assess if I was prepared for a test based on his preparation. 

I stuck with Daniel’s classes because it really was a matter of efficiency — 2 hours a week got done what might’ve otherwise taken 8 hours. It is as close to buying time as possible, which is especially important in the later years of high school. 

I might’ve forgotten all the math content (just kidding I will always remember “Low d high minus high d low over low low”), but I remember how he got his BlackRock internship from a random finance club, or how he originally ended up in Beijing through some random Yale program throwing money at him. These types of stories brought me through my junior year, giving me a surge of inspiration every weekend. While likely inadvertently, Daniel’s random stories during class reminded me, when buried under a pile of work, why I was studying and why I actually wanted to go to a top university."
          </p>
          <p className="text-right text-gray-600 font-medium mt-2">— Alex Tang, SAS ’24 / Dartmouth ’28</p>
        </div>
      
        <div className="bg-blue-100 p-6 rounded-xl shadow-sm">
          <div className="h-40 bg-blue-300 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-lg">
            [ Photo Placeholder ]
          </div>
          <p className="text-gray-700 italic">
            "My girlfriend asked me why Its taking me so long to write this quote. I answered: You don't understand the impact Daniel's had on my life. Growing up, I received little to no attention from teachers — and for good reason. Good teachers know how to spot and develop talent. I wasn’t good talent. So when Daniel believed in me, I wondered if he was a good teacher. Little did I know that his belief would push me toward a future far beyond anything I could’ve imagined for myself. It didn’t just improve my grades — it instilled in me a confidence and hunger I carry to this day. Those things can’t be taught — and that’s exactly what makes Daniel a great mentor.

"
          </p>
          <p className="text-right text-gray-600 font-medium mt-2">— Brian Lung, SAS ’20 / Northwestern ’24</p>
        </div>
</section>
    </main>
  );
}
