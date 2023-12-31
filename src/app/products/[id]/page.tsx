import { Products } from "@/utils/mock"
import Productcard from "@/components/ui/productcard"
import { StaticImageData } from "next/image"
const getproductsbycategory=(category:string)=>{
    return Products.filter((Products)=>Products.category==category);
};
export default function page({params}:{params:{id:string}}){
    //const result = getproductsbycategory(params.slug);
    return(
        <div className="flex justify-evenly mt-16 py-10  flex-wrap">
           {/*result.length>0 ? result.map((product)=>
      <Productcard 
          key={product.id} 
          title={product.name}
           price={product.price}
          img={product.image}
          category={product.category}/>
          ) : (<p>No products found</p>)
          */}
          This is product page for product Id {params.id}
        </div>
    )
}