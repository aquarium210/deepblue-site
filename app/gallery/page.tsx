export default function GalleryPage() {
  return (
    <main className="px-4 py-10 max-w-6xl mx-auto space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Gallery</h1>
        <p className="text-lg text-gray-600">A glimpse into our classroom, community, and moments that matter.</p>
      </section>

      <section className="grid grid-cols-3 gap-4 auto-rows-[150px]">
        <div className="bg-blue-200 rounded-lg col-span-1 row-span-1 flex items-center justify-center text-blue-900">1x1</div>
        <div className="bg-blue-300 rounded-lg col-span-1 row-span-2 flex items-center justify-center text-blue-900">1x2</div>
        <div className="bg-blue-400 rounded-lg col-span-2 row-span-1 flex items-center justify-center text-blue-900">2x1</div>
        <div className="bg-blue-500 rounded-lg col-span-2 row-span-2 flex items-center justify-center text-blue-900">2x2</div>
        <div className="bg-blue-200 rounded-lg col-span-1 row-span-1 flex items-center justify-center text-blue-900">1x1</div>
        <div className="bg-blue-300 rounded-lg col-span-1 row-span-2 flex items-center justify-center text-blue-900">1x2</div>
        <div className="bg-blue-400 rounded-lg col-span-2 row-span-1 flex items-center justify-center text-blue-900">2x1</div>
      </section>
    </main>
  );
}
