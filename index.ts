//! 1)
const num: number = 1;
const str: string = "str";
const Isbool: boolean = true;

//! 2)
const calculateArea = (a: number): number => {
  const area = Math.PI * a ** 2;
  return area;
};
console.log(calculateArea(5));

const calculateDensity = (b: number, c: number): number => {
  const density = b / c;
  return density;
};
console.log(calculateDensity(4, 6));

//! 3)
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};

const arr: Product[] = [
  {
    id: 1,
    title: "hello",
    description: "world",
    price: 10,
    colors: ["purple", "green"],
  },
  {
    id: 2,
    title: "hello",
    description: "world",
    price: 20,
    colors: ["blue", "black"],
  },
];
