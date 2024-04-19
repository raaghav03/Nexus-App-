import { UserButton, UserProfile, auth, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
export default function Sidebar() {
    const { userId } = auth();
    return (
        <div className="bg-gray-100 w-[14vw] p-4  h-screen top-0 left-0" >
            {/* fixed top-0 left-0 z-40 w-64 h-screen */}
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link
                            href="/"
                            className="block px-4 py-2 rounded hover:bg-gray-300 transition-colors duration-200"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard"
                            className="block px-4 py-2 rounded hover:bg-gray-300 transition-colors duration-200"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <div>
                        {userId ? (
                            <div className="flex gap-4 items-center">
                                <div>
                                    <UserButton afterSignOutUrl="/" />
                                </div>
                            </div>
                        ) : (
                            <div className="flex gap-4 items-center">
                                <Link href="/sign-up">Sign up</Link>
                                <Link href="/sign-in">Sign In</Link>
                            </div>
                        )}
                    </div>
                    {/* Add more links as needed */}
                </ul>
            </nav>
        </div>
    );
}