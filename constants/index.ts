import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Beachfront Villa",
    rating: 4.8,
    address: { city: "Lagos", country: "Nigeria" },
    image: "/images/villa.jpg",
    description: "A luxurious beachfront villa with stunning views and premium amenities.",
    category: ["Wi-Fi", "Swimming Pool", "Air Conditioning", "Parking"],
    price: 150,
    reviews: [
      { name: "John Doe", avatar: "/images/user1.jpg", rating: 5, comment: "Amazing stay!" },
      { name: "Jane Smith", avatar: "/images/user2.jpg", rating: 4, comment: "Very comfortable and clean." },
    ]
  }
];
