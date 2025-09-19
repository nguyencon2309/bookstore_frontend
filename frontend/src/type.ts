export interface Book {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  sold: number;
  stock: number;
  generId: {
    _id: string;
    catelogy: string;
  };
  authorId: {
    _id: string;
    name: string;
  };
}
export interface BasicBook {
  _id:string,
  image?:string,
  title?:string,
  price:number
}
export interface Gener{
  _id:string,
  catelogy:string
}
export interface Author{
  _id:string,
  name:string
}