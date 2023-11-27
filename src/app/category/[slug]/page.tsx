export default function page({params}:{params:{slug:string}}){
    return <div>My category:{params.slug}</div>
}