import Link from "next/link";
import { createClient } from '@/utils/supabase/server';
import { auth, currentUser } from "@clerk/nextjs";

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
        <Link href="/videoCall">
          <button className="bg-gray-100 py-4 px-6 rounded-full hover:bg-gray-200 hover:underline">Start a video call</button>
        </Link>
      </>
    );
  }
  if (!userId || !user) { return <>You are not logged in , Please log in </> }
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (<><h1><Header /></h1></>)
}

