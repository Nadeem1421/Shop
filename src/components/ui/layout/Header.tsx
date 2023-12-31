import Link from "next/link"
import logo from "/public/logo.webp"
import Image from 'next/image'
import {ShoppingCart} from "lucide-react"
const Header = () => {
    return(
        <div className="flex justify-between items-center py-6 px-8">
           <Image src={logo} alt="Dine Market" className="w-40"/>
           <ul className="flex gap-x-12">
                <li className="text-lg">
                    <Link href={"/category/female"}>Female</Link>                
                </li>
                <li className="text-lg"> 
                    <Link href={"/category/male"}>Male</Link>
                </li>
                <li className="text-lg">
                    <Link href={"/category/kids"}>Kids</Link>
                </li>
                <li className="text-lg">
                    <Link href={"/products"}>All Products</Link>
                </li>
           </ul>
           <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
                <ShoppingCart className="h-6 w-6"/>
           </div>
           
        </div>
    )
}
export default Header