import Image from "next/image";

export default function Home() {
  return (
   
    <div className="flex flex-col min-h-screen">
       <header className="flex-1 bg-amber-100">
      Our Header
    </header>
      <main className="flex-1  bg-amber-600">
       Our Main
      </main>
      <footer className=" flex-1  bg-amber-300">
        Our Footer
      </footer>
    </div>
  );
}
