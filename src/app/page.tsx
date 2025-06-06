import Image from "next/image";
import { Feed } from "./components/Feed/Feed";
import { Posts } from "./components/Feed/Posts/Posts";

export default function Home() {
  return (
    <main className="container mt-20 min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
        {/* feed */}
        <Feed />
        {/* modal */}
    </main>
  );
}
