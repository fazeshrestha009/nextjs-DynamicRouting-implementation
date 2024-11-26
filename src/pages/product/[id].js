import { useRouter } from 'next/router';
import Layout from './../component/Layout';
import products from './../Data/data'; 

export default function DynamicPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((product) => product.id === id);
  if (!product) {
      router.push('/contact');
    return null;
  }
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Product: {product.name}</h1>
        <p>{product.description}</p>
      </div>
    </Layout>
  );
}
