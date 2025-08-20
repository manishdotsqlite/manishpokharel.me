import React from 'react'

const images = [
    '/gallery/g2.jpeg',
    '/gallery/g3.jpeg',
    '/gallery/g1.jpeg',

]

const Gallery = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800"
            style={{ width: '100%' }}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              style={{ display: 'block', width: '100%', borderRadius: '0.5rem', maxHeight: '500px' }}
            />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <div className="px-6 py-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow text-gray-700 dark:text-gray-300 text-center text-lg font-semibold">
          More photos coming soon...
        </div>
      </div>
    </section>
  )
}

export default Gallery