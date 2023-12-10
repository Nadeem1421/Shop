import React from "react"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {ShoppingCart} from "lucide-react"
import heroImage from "/public/Hero post.webp"
import Image from "next/image"
const Hero = () => {
    return(
       <section className="flex flex-col lg:flex-row gap-y-10 py-6 "> 
            {/* left div */}
            <div className="flex-1">
                <Badge className="py-3 px-9 rounded-lg bg-blue-200 text-blue-700 text-lg">Sale 70%</Badge>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
                An Industrial Take on Streetwear </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                    </p>
                    <Button className="bg-black h-12 px-8 mt-4"> 
                    <div className="h-10 w-10 flex justify-center items-center">
                <ShoppingCart className="h-6 w-6"/>
                </div>
                       <div className="taxt-lg">Start Shopping</div>
                    </Button>
            </div>
            {/* Right div */}
            <div className="flex-1  ">
                <Image src={heroImage} alt='hero' className="rounded-full bg-green-600 flex justify-center items-center"/>
            </div>
       </section>

    )
}
export default Hero