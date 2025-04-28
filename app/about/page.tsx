import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg"
            alt="Restaurant interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            A journey of passion, flavor, and excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-center">The Taste Magic Story</h2>
          <div className="prose prose-lg mx-auto">
            <p className="mb-6">
              Founded in 2010, Taste Magic began as a small family restaurant with a big dream: to create an unforgettable dining experience that combines traditional flavors with modern culinary innovation.
            </p>
            <p className="mb-6">
              Our journey started when Chef Maria Rodriguez, with over 20 years of experience in some of the world's finest restaurants, decided to bring her passion for authentic cuisine to the heart of the city.
            </p>
            <p className="mb-6">
              Today, we continue to honor our roots while embracing innovation, using only the finest locally-sourced ingredients to create dishes that tell a story of tradition, passion, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Image Collage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Our Restaurant</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-64">
              <Image
                src="/restaurant-1.jpg"
                alt="Restaurant interior"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/restaurant-2.jpg"
                alt="Chef preparing food"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/restaurant-3.jpg"
                alt="Dining area"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/chef-1.jpg"
                  alt="Head Chef"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Maria Rodriguez</h3>
              <p className="text-gray-600">Head Chef</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/chef-2.jpg"
                  alt="Sous Chef"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">James Wilson</h3>
              <p className="text-gray-600">Sous Chef</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/chef-3.jpg"
                  alt="Pastry Chef"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Sarah Chen</h3>
              <p className="text-gray-600">Pastry Chef</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 