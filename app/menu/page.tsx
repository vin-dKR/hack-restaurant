import Image from 'next/image';

const menuItems = {
  appetizers: [
    {
      name: "Truffle Arancini",
      description: "Crispy risotto balls with black truffle and mozzarella",
      price: "$14",
      image: "/menu/appetizer-1.jpg"
    },
    {
      name: "Calamari Fritti",
      description: "Lightly fried calamari with lemon aioli",
      price: "$16",
      image: "/menu/appetizer-2.jpg"
    },
    {
      name: "Burrata Salad",
      description: "Fresh burrata with heirloom tomatoes and basil",
      price: "$18",
      image: "/menu/appetizer-3.jpg"
    }
  ],
  mains: [
    {
      name: "Wagyu Ribeye",
      description: "A5 Japanese Wagyu with truffle mashed potatoes",
      price: "$65",
      image: "/menu/main-1.jpg"
    },
    {
      name: "Lobster Linguine",
      description: "Fresh Maine lobster with house-made pasta",
      price: "$45",
      image: "/menu/main-2.jpg"
    },
    {
      name: "Duck Breast",
      description: "Pan-seared duck breast with cherry reduction",
      price: "$38",
      image: "/menu/main-3.jpg"
    }
  ],
  desserts: [
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with espresso and mascarpone",
      price: "$12",
      image: "/menu/dessert-1.jpg"
    },
    {
      name: "Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla ice cream",
      price: "$14",
      image: "/menu/dessert-2.jpg"
    },
    {
      name: "Crème Brûlée",
      description: "Vanilla bean crème brûlée with fresh berries",
      price: "$12",
      image: "/menu/dessert-3.jpg"
    }
  ]
};

export default function Menu() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/menu-hero.jpg"
            alt="Menu showcase"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Menu</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            A culinary journey through our finest dishes
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Appetizers */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8 text-center">Appetizers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuItems.appetizers.map((item, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-lg font-semibold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Courses */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8 text-center">Main Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuItems.mains.map((item, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-lg font-semibold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div>
            <h2 className="text-3xl font-serif mb-8 text-center">Desserts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuItems.desserts.map((item, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-lg font-semibold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 