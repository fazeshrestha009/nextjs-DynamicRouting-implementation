import Layout from './component/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="Home Page" footerText="© 2024 Home Page">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Dynamic Routing Page!</h1>
        <ul className="mt-4">
          <li>
            <Link href="/1">
              <span className="text-blue-500 hover:underline cursor-pointer">Go to Page 1</span>
            </Link>
          </li>
          <li>
            <Link href="/2">
              <span className="text-blue-500 hover:underline cursor-pointer">Go to Page 2</span>
            </Link>
          </li>
          <li>
            <Link href="/3">
              <span className="text-blue-500 hover:underline cursor-pointer">Go to Page 3</span>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
