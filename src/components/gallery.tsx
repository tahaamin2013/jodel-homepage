import GalleryItem from "./gallery-item"

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Entertainment",
      image: "/woman with microphone singing",
    },
    {
      id: 2,
      title: "Gourmet Food",
      image: "/delicious burger food",
    },
    {
      id: 3,
      title: "Ambiance",
      image: "/red neon lights",
    },
    {
      id: 4,
      title: "Asian Cuisine",
      image: "/asian salad bowl",
    },
    {
      id: 5,
      title: "Fresh Drinks",
      image: "/orange juice drink",
    },
    {
      id: 6,
      title: "Party Vibes",
      image: "/orange neon party lights",
    },
  ]

  return (
    <section className="px-4 py-20">
      <div className="text-center mb-16">
        <h3 className="text-lime-500 font-script text-xl mb-4">Gallery</h3>
        <h2 className="text-white text-4xl font-bold">Our Moments</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
