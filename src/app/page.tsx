import Image from 'next/image'
import Hero from "@/Views/Hero"
import Product from '@/Views/productslist'
export default function Home()  {
  return (
    <div>
      <Hero/>
      <Product/>
    </div>
    )
}
