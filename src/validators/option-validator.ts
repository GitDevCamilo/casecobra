// bg-zinc-900 border-zinc-900
// bg-blue-950 border-blue-950
// bg-rose-950 border-rose-950
// bg-yellow-500 border-yellow-500
// bg-green-500 border-green-500

import { PRODUCTS_PRICES } from "@/config/products";

export const COLORS = [
  {
    label: "Negro",
    value: "black",
    tw: "zinc-900",
  },
  {
    label: "Azul",
    value: "blue",
    tw: "blue-950",
  },
  {
    label: "Rosado",
    value: "rose",
    tw: "rose-950",
  },
  {
    label: "Amarillo",
    value: "yellow",
    tw: "yellow-500",
  },
  {
    label: "Verde",
    value: "green",
    tw: "green-500",
  },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone X",
      value: "iphonex",
    },
    {
      label: "iPhone 11",
      value: "iphone11",
    },
    {
      label: "iPhone 12",
      value: "iphone12",
    },
    {
      label: "iPhone 13",
      value: "iphone13",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      label: "iPhone 15",
      value: "iphone15",
    },
  ],
};

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicona",
      value: "silicone",
      description: undefined,
      price: PRODUCTS_PRICES.material.silicone,
    },
    {
      label: "Policarbonato Blando",
      value: "polycarbonate",
      description: "Revestimiento resistente a arañazos",
      price: PRODUCTS_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Acabado Liso",
      value: "smooth",
      description: undefined,
      price: PRODUCTS_PRICES.finish.smooth,
    },
    {
      label: "Acabado Con Textura",
      value: "textured",
      description: "textura suave y adherente",
      price: PRODUCTS_PRICES.finish.textured,
    },
  ],
} as const;
