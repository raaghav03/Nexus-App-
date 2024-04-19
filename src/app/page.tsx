import Link from "next/link";
import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (<><Link href="/videoCall"><button>Video calll</button></Link><pre>  <div><h1 className="bold ">home page</h1></div>{JSON.stringify(notes, null, 2)}</pre></>)
}

