import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section
        className="relative w-full min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center text-center px-4 py-20"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center">
          <div className="mb-16">
            <h1 className="text-4xl font-bold drop-shadow-lg">
              Welcome to DIETHER Library Management System
            </h1>
            <p className="text-xl mt-4 drop-shadow-lg">
              Borrow your favorite books
            </p>
            <Link
              href="/Auth"
              className="bg-blue-600 text-white py-2 px-6 mt-6 inline-block rounded-lg text-lg hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          {/* Features */}
          <div className="container mx-auto text-center mt-32"> 
            <h2 className="text-3xl font-bold mb-10">Library Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div>
                <Image
                  src="/file.svg"
                  alt="Book Catalog"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
                <h4 className="mt-4 text-xl font-semibold">
                  Extensive Book Catalog
                </h4>
                <p>Browse thousands of titles across all genres and categories.</p>
              </div>

              <div>
                <Image
                  src="/window.svg"
                  alt="Borrowing"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
                <h4 className="mt-4 text-xl font-semibold">
                  Easy Borrowing System
                </h4>
                <p>Reserve, borrow, and return books with a few clicks.</p>
              </div>

              <div>
                <Image
                  src="/globe.svg"
                  alt="User Profiles"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
                <h4 className="mt-4 text-xl font-semibold">User Profiles</h4>
                <p>Track borrowed books, due dates, and reading history.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-6">
        <p className="mb-0">© librarians. All rights reserved.</p>
      </footer>
    </div>
  );
}
