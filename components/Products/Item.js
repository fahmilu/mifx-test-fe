import Link from "next/link";
import ImageNotFound from "../ImageNotFound";
const Item = ({product}) => {
    // console.log(product.id);
    return (
        <div className={`px-5 py-6`}>
            <Link href={`product/${product.id}`}>
                <a href="{`product/${product.id}`}" className={`text-red-400 hover:underline block shadow-md p-4 rounded-md hover:shadow-lg transition-all bg-slate-50`}>
                    <ImageNotFound src={product.image} layout={`fill`} />
                    <div className={`font-semibold mt-4`}>
                        {product.name}
                    </div>
                </a>
            </Link>
        </div>
    );
} 

export default Item; 