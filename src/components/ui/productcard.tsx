import Image,{StaticImageData} from "next/image"
import {Button} from "@/components/ui/button"
function productcard (props:{title:string, price:number, category:string, img:StaticImageData}) {
  return(
    <div className="py-12">
        <Image src={props.img} alt="product"/>
        <h3 className="font-bold text-lg mt-3">{props.title}</h3>
        <p className="font-bold text-lg">category {props.category}</p>
        <p className="font-bold text-lg">${props.price}</p>
        <Button>Add crad</Button>
    </div>
  )
}
export default productcard