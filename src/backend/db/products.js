import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "RINGS",
    desc: "HEARTS WRAPPED AROUND MY FINGER - GOLDEN ADJUSTABLE RING",
    price: 98,
    originalPrice:249,
    badge: "sale",
    rating:4.5,
    image:" https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103203-1.jpg"
  },
  {
    _id: uuid(),
    title: "BRACELETS",
    desc: "DAY 'N' NITE- PEARL AND STONES STUDDED GOLDEN BRACELET",
    price: 198,
    originalPrice:449,
    rating: 3,
    badge:"new",
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103854-1.jpg"
  },
  {
    _id: uuid(),
    title: "NECKPIECES",
    desc: "THE INFINITE ELEGANCE - GOLDEN MULTILAYERED NECKPIECE",
    price: 298,
    originalPrice: 500,
    badge:"null",
    rating:2,
    image:"https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103139-1.jpg"
  },
  {
    _id: uuid(),
    title:"EARRINGS",
    desc:"THE ROYAL AFFAIR STUDDED DAZZLING EARRINGS",
    price: 158,
    originalPrice: 480,
    badge:"sale",
    rating: 1,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew220885-12_copy.jpg"
  }
];
