import { Products } from "@/utils/mock"
import Productcard from "@/components/ui/productcard"
const productslist = () => {
  const productchecks = Products.slice(3,6);
  return(
   <div className="flex justify-evenly mt-16 py-10">
    {
      productchecks.map((product)=>
      <Productcard 
          key={product.id} 
          title={product.name}
           price={product.price}
          img={product.image}/>
      )
    }
      { /*  <Productcard title="Brushed Raglan Sweatshirt" price={195} img={P1}/>
              <Productcard title="Cameryn Sash Tie Dress" price={545} img={P2}/>
        <Productcard title="Flex Sweatshirt" price={175} img={P3}/> */}
    </div>
  )
}
export default productslist