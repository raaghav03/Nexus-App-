import Link from "next/link";
import { createClient } from '@/utils/supabase/server';
import { auth, currentUser } from "@clerk/nextjs";
import Image from "next/image";

export default async function Home() {
  const { userId } = auth()
  const user = await currentUser()
  function Header() {
    return (
      <>

        <header className="bg-slate-100 border-b border-gray-200 ">
          <div className="container mx-auto">
            <h1 className="text-slate-800 p-4 text-xl">Hey {user?.firstName} {user?.lastName} , Welcome to Nexus</h1>
          </div>
        </header>


      </>
    );
  }
  if (!userId || !user) { return <>You are not logged in , Please log in </> }
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <>
      <Header />
      <div className="p-4 grid ">
        <div className="w-5/6 py-40 pl-32 grid gap-4">
          <p className=" text-wrap text-4xl subpixel-antialiased font-medium text-stone-950">Navigate your collaborative landscape with integrated video calls, group chat, and task prioritization, ensuring seamless productivity for your team</p>
          <p className=" text-wrap text-xl subpixel-antialiased  text-stone-400">Built by Team Captain Commit for HackInnovate 2024 </p>
        </div>
        <div className="relative">
      
        </div>



      </div>
      <div className="absolute bottom-8 right-8">
        <Link href="/videoCall">
          <button className="bg-blue-100 py-4 px-6 rounded-full hover:bg-blue-200 hover:underline">Start a video call</button>
        </Link>
      </div></>)
}

