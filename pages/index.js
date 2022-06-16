import Item from '../components/Products/Item';
import useSWR from 'swr';

export default function Home() {
	const fetcher = (...args) => fetch(...args).then(res => res.json());

    const { data, error } = useSWR('/api/product', fetcher);

    if (error) return <div>failed to load data</div>;
    if (!data) return <div>loading...</div>;

	return (
		<div className={`sm:grid sm:grid-cols-2 md:grid-cols-3`}>
			{data.data.map((product, i) => {
				return <Item product={product} key={i} />
			})}
		</div>
	)
}
