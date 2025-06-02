import Image from "next/image";
import { Feed } from "./components/Feed/Feed";
import { Posts } from "./components/Feed/Posts/Posts";

export default function Home() {
  return (
    <main className="container mt-20 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* feed */}
        <Feed />
        {/* modal */}
    </main>
  );
}
