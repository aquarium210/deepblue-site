export default function ContactPage() {
  return (
    <main className="px-4 py-10 max-w-3xl mx-auto space-y-12">
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-600">We’ll get back to you as soon as possible.</p>
      </section>

      <section className="space-y-6">
        <form
          action="https://formspree.io/f/xoqggynv"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Your email"
            required
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={6}
            className="w-full border px-4 py-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-200 h-48 flex items-center justify-center text-blue-900 font-medium rounded-lg">
            [ QR Code Placeholder (WeCom) ]
          </div>
          <div className="bg-blue-200 h-48 flex items-center justify-center text-blue-900 font-medium rounded-lg">
            [ Static Map Placeholder (Location) ]
          </div>
        </div>
      </section>
    </main>
  );
}
