import { Products } from "@/utils/mock"
import Productcard from "@/components/ui/productcard"

const AllProducts=()=>{
  return(
    <div className="flex justify-evenly mt-16 py-10  flex-wrap">
    {
      Products.map((product)=>
      <Productcard 
          key={product.id} 
          title={product.name}
           price={product.price}
          img={product.image}
          category={product.category}/>
          
      )
    }
    </div>
  )
}
export default AllProducts