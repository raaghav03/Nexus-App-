import Link from "next/link";

export default function Home() {
  return (<>
    <div><h1 className="bold ">home page</h1></div>
    <Link href="/videoCall"><button>Video calll</button></Link></>)
}