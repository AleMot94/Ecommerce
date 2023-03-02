const products = [
  {
    id: "1",
    name: "iphone 12",
    price: 500,
    category: "celulares",
    img: "/images/iphone12.webp",
    stock: 20,
    description: "descripcion de iphone 12",
  },
  {
    id: "2",
    name: "samsung galaxy tab a7",
    price: 300,
    category: "tablets",
    img: "/images/galaxy-tab-a7.jpg",
    stock: 20,
    description: "descripcion de samsung galaxy tab a7",
  },
  {
    id: "3",
    name: "smart tv samsung series 7",
    price: 700,
    category: "televisores",
    img: "/images/smart-tv-samsung-series7.jpg",
    stock: 20,
    description: "descripcion de smart tv samsung",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
