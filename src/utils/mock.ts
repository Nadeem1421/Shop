import { Product } from "./types";
import Image from "next/image"
import P1 from "/public/pic1.png"
import P2 from "/public/pic2.png"
import P3 from "/public/pic3.png"
import P4 from "/public/pic4.png"
import P5 from "/public/pic5.png"
import P6 from "/public/pic6.png"
import P7 from "/public/pic7.png"
import P8 from "/public/pic8.png"
import P9 from "/public/pic9.png"
import P10 from "/public/pic10.jpg"
export const Products:Product[] = [{
    id:1,
    name:"Flex Sweatshirt",
    price: 45,
    category: "female",
    image : P1,
},
{
    id:2,
    name:"Brushed Raglan Sweatshirt",
    price: 455,
    category: "female",
    image : P2,
},
{
    id:3,
    name:"Cameryn Sash Tie Dress",
    price: 145,
    category: "male",
    image : P3,
},
{
    id:4,
    name:"Flex Sweatshirt-1",
    price: 415,
    category: "female",
    image : P4,
},
{
    id:5,
    name:"Flex Sweatshirt-2",
    price: 45,
    category: "male",
    image : P5,
},
{
    id:6,
    name:"Cameryn Sash Tie Dress-1",
    price: 45,
    category: "kids",
    image : P6,
},
{
    id:7,
    name:"Cameryn Sash Tie Dress-2",
    price: 451,
    category: "kids",
    image : P7,
},
{
    id:8,
    name:"Brushed Raglan Sweatshirt-1",
    price: 451,
    category: "female",
    image : P8,
},
{
    id:9,
    name:"Brushed Raglan Sweatshirt-11",
    price: 451,
    category: "female",
    image : P9,
},
{
    id:10,
    name:"My Dress ",
    price: 451,
    category: "male",
    image : P10,
}
]