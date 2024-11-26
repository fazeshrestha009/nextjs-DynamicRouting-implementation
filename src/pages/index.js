import React from 'react';
import Layout from './component/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home!</h1>
        <ul className="mt-4">
          <li>
            <Link href="product/1" className="text-blue-500 hover:underline cursor-pointer">
              Go to Product 1
            </Link>
          </li>
          <li>
            <Link href="product/2" className="text-blue-500 hover:underline cursor-pointer">
              Go to Product 2
            </Link>
          </li>
          <li>
            <Link href="product/3" className="text-blue-500 hover:underline cursor-pointer">
              Go to Product 3
            </Link>

          </li>
          <li>
            <Link href="product/4" className="text-blue-500 hover:underline cursor-pointer">
              Go to Product 4
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
