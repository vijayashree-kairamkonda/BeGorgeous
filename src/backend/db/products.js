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
    badge:null,
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
  },
  {
    _id: uuid(),
    title:"RINGS",
    desc:"FLUTTERING BUTTERFLY - SILVER OXIDISED RING",
    price: 59,
    originalPrice: 120,
    badge:"new",
    rating: 2,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103652-1.jpg"
  },
  {
    _id: uuid(),
    title:"RINGS",
    desc:"THE NIGHT SKY- ROSE GOLDEN RHINESTONES RING",
    price: 98,
    originalPrice: 180,
    badge:null,
    rating: 2.5,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103825-1.jpg"
  },
  {
    _id: uuid(),
    title:"RINGS",
    desc:"THE CHIC LEAFLET TOE RING - TINY TRINKET COLLECTION",
    price: 49,
    originalPrice: 199,
    badge:null,
    rating: 5,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103101-1.jpg"
  },
  {
    _id: uuid(),
    title:"RINGS",
    desc:"THE CHIC LEAFLET TOE RING - TINY TRINKET COLLECTION",
    price: 49,
    originalPrice: 199,
    badge:"out of stock",
    rating: 3.8,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103513-1.jpg"
  },
  {
    _id: uuid(),
    title:"RINGS",
    desc:"THE SASSY N CLASSY RING (SILVER)",
    price: 89,
    originalPrice: 356,
    badge:"out of stock",
    rating: 3.8,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103292-1.jpg"
  },
  {
    _id: uuid(),
    title:"BRACELETS",
    desc:"THE CHAIN REACTION- GOLDEN STONE BRACELET",
    price: 98,
    originalPrice: 399,
    badge:"sale",
    rating: 4,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103873-5.jpg"
  },
  {
    _id: uuid(),
    title:"BRACELETS",
    desc:"THE SHIMMERING SLEET- PEARL AND CRYSTALS STUDDED GOLDEN BRACELET",
    price: 178,
    originalPrice: 750,
    badge:"sale",
    rating: 4,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103851-6_1.jpg"
  },
  {
    _id: uuid(),
    title:"BRACELETS",
    desc:"TREASURES OF SEA- GOLDEN PEARL BRACELET",
    price: 138,
    originalPrice: 549,
    badge:"sale",
    rating: 4,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103766-5.jpg"
  },
  {
    _id: uuid(),
    title:"BRACELETS",
    desc:"THE BLUEBERRY WOODS- GOLDEN STONE ANKLET",
    price: 248,
    originalPrice: 999,
    badge:"sale",
    rating: 4.3,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/d/s/dsc02469.jpg"
  },
  {
    _id: uuid(),
    title:"BRACELETS",
    desc:"THE RISING STAR- GOLDEN PEARL ANKLET",
    price: 138,
    originalPrice: 549,
    badge:"sale",
    rating: 4,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103904-7.jpg"
  },
  {
    _id: uuid(),
    title:"BRACELETS",
    desc:"THE WARRIOR WITHIN - GOLDEN STATEMENT BRACELET",
    price: 98,
    originalPrice: 400,
    badge:"out of stock",
    rating: 4,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103234-1.jpg"
  },
  {
    _id: uuid(),
    title:"BRACELETS",
    desc:"PEARL-FECTLY GOLDEN - GOLDEN LAYERED CHAIN BRACELET",
    price: 128,
    originalPrice: 549,
    badge:"sale",
    rating: 4,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103549-1.jpg"
  },
  {
    _id: uuid(),
    title:"NECKPIECES",
    desc:"THE BEGUILING BUTTERFLIES - STATEMENT GOLDEN NECKPIECE",
    price: 98,
    originalPrice: 400,
    badge:"new",
    rating: 3.5,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103267-1.jpg"
  },
  {
    _id: uuid(),
    title:"NECKPIECES",
    desc:"THE DARK REFLECTION- GOLDEN LAYERED NECKLACE",
    price: 138,
    originalPrice: 549,
    badge:"new",
    rating: 3.5,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103889-1.jpg"
  },
  {
    _id: uuid(),
    title:"NECKPIECES",
    desc:"THE IVORY DREAMCATCHER- GOLDEN BEAD NECKLACE",
    price: 198,
    originalPrice: 799,
    badge:"sale",
    rating: 4.3,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103892-1.jpg"
  },
  {
    _id: uuid(),
    title:"NECKPIECES",
    desc:"THE ENIGMATIC ME - GOLDEN TRIPLE LAYERED NECKPIECE",
    price: 178,
    originalPrice: 699,
    badge:null,
    rating: 2.8,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1102783-1.jpg"
  },
  {
    _id: uuid(),
    title:"NECKPIECES",
    desc:"'LA VIE EN ROSE' STATEMENT GOLDEN NECKPIECE",
    price: 198,
    originalPrice: 799,
    badge:null,
    rating: 5,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1102767-1.jpg"
  },
  {
    _id: uuid(),
    title:"EARRINGS",
    desc:"BOTTOM-UP- BLACK AND GOLDEN EARRINGS",
    price: 198,
    originalPrice: 799,
    badge:null,
    rating: 4.5,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103734-1.jpg"
  },
  {
    _id: uuid(),
    title:"EARRINGS",
    desc:"PETALS PANACHE- GOLDEN ENAMELLED EARRINGS (SKY BLUE)",
    price: 158,
    originalPrice: 650,
    badge:null,
    rating: 3.5,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1103635-1.jpg"
  },
  {
    _id: uuid(),
    title:"EARRINGS",
    desc:"THE ARTSY PEACOCKS - OXIDISED BOHO JHUMKIS",
    price: 118,
    originalPrice: 499,
    badge:null,
    rating: 5,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1102795-1.jpg"
  },
  {
    _id: uuid(),
    title:"EARRINGS",
    desc:"THE GLORIOUS BUTTERFLIES - GOLDEN STATEMENT STUD EARRINGS",
    price: 147,
    originalPrice: 599,
    badge:null,
    rating: 4.5,
    image: "https://everstylish.com/pub/media/catalog/product/cache/07b5e720067dd7c278573e022675f331/j/e/jew1102871-1.jpg"
  },
];
