import {useRouter} from "next/router";
import useSWR from 'swr';
import Image from "next/image";
import ImageNotFound from "../../components/ImageNotFound";
import RatingStars from "../../components/RatingStars";
import {BuyNow, AddtoChart} from  "../../components/Buttons";
import ImageCarousel from "../../components/Products/ImageCarousel";
import Link from "next/link";

const product = () => {
    const router = useRouter();
    const productID = router.query.id;

	const fetcher = (...args) => fetch(...args).then(res => res.json());

    const { data, error } = useSWR('/api/product', fetcher); 

    if (error) return <div>failed to load data</div>;
    if (!data) return <div className={'text-center'}>loading product...</div>;

    const products = data.data;
    const product = products.filter(p => p.id === productID)[0];

    console.log(product);

    return (
        <div className={`md:grid md:grid-cols-12 shadow-md border-gray-200 p-5 gap-10 rounded-lg`}>
            <div className={`col-span-12`}>
                <Link href={`/`}>
                    <a href={`/`} className={`text-sm`}> {`<  Back to Product List`} </a>
                </Link>
            </div>
            <div className={`col-span-7`}>
                <div className={`max-w-sm mx-auto`}>
                    <ImageCarousel images={product.images} />
                </div>
            </div>
            <div className={`mt-10 md:mt-10 col-span-5`}>
                <div className={`uppercase text-sm text-red-500 font-bold tracking-wider`}>SALE {product.off}</div>
                <h1 className={`text-black font-bold mb-3 text-lg`}>{product.name}</h1>
                <div className={`flex items-center gap-2`}>
                    <RatingStars rating={product.rating} />
                    <div className={`text-xs text-gray-400 font-semibold`}>{`(${product.reviewCount}reviewers)`}</div>
                </div>
                <div className={`text-black font-bold mb-3 text-2xl mt-4`}>{product.price}</div>
                <div className={`border-t-2 border-dashed border-gray-300 max-w-xs mb-5 pt-10 grid grid-cols-2 gap-3`}>
                    <AddtoChart />
                    <BuyNow />
                </div>
            </div>
        </div>
    );
}

export default product;