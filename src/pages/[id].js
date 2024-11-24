import { useRouter } from 'next/router';
import Layout from './component/Layout';

export default function DynamicPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Dynamic Page: {id}</h1>
      </div>
    </Layout>
  );
}
