import Image from 'next/image'
import Hero from "@/Views/Hero"
import Product from '@/Views/productslist'
import CounterView from './counter'
export default function Home()  {
  return (
    <div>
      <Hero/>
      <Product/>
      <CounterView/>
    </div>
    )
}
