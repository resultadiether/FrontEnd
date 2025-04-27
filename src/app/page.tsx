import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-blue-600 text-white text-center py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Welcome to Library Management System</h1>
          <p className="text-xl mt-4">Borrow your favorites book</p>
          
          <Link
            href="/auth"
            className="bg-white text-blue-600 py-2 px-6 mt-6 inline-block rounded-lg text-lg"
          >
            Get Started
          </Link>
        </div>
      </section>


      <section className="container mx-auto text-center my-20">
        <h2 className="text-3xl font-bold">Awesome Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          <div className="text-center">
            <Image
              src="/file.svg"
              alt="Feature 1"
              width={60}
              height={60}
              className="mx-auto"
            />
            <h4 className="mt-4 text-xl font-semibold">Fast Performance</h4>
            <p>Optimized for speed and efficiency.</p>
          </div>
          <div className="text-center">
            <Image
              src="/window.svg"
              alt="Feature 2"
              width={60}
              height={60}
              className="mx-auto"
            />
            <h4 className="mt-4 text-xl font-semibold">User Friendly</h4>
            <p>Intuitive and easy-to-use design.</p>
          </div>
          <div className="text-center">
            <Image
              src="/globe.svg"
              alt="Feature 3"
              width={60}
              height={60}
              className="mx-auto"
            />
            <h4 className="mt-4 text-xl font-semibold">SEO Ready</h4>
            <p>Boost your search rankings with SEO.</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p className="mb-0">© 2025 MyBrand. All rights reserved.</p>
      </footer>
    </>
  );
}