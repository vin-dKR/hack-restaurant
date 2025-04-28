import Image from 'next/image';

const galleryImages = [
  {
    src: "/gallery/food-1.jpg",
    alt: "Signature dish",
    category: "food"
  },
  {
    src: "/gallery/interior-1.jpg",
    alt: "Restaurant interior",
    category: "interior"
  },
  {
    src: "/gallery/chef-1.jpg",
    alt: "Chef at work",
    category: "chef"
  },
  {
    src: "/gallery/food-2.jpg",
    alt: "Dessert presentation",
    category: "food"
  },
  {
    src: "/gallery/interior-2.jpg",
    alt: "Dining area",
    category: "interior"
  },
  {
    src: "/gallery/chef-2.jpg",
    alt: "Chef preparing food",
    category: "chef"
  },
  {
    src: "/gallery/food-3.jpg",
    alt: "Main course",
    category: "food"
  },
  {
    src: "/gallery/interior-3.jpg",
    alt: "Bar area",
    category: "interior"
  },
  {
    src: "/gallery/chef-3.jpg",
    alt: "Chef plating",
    category: "chef"
  }
];

export default function Gallery() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery-hero.jpg"
            alt="Gallery showcase"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Gallery</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            A visual journey through our culinary world
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
              All
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
              Food
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
              Interior
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
              Chef
            </button>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 