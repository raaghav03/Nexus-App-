import { UserButton, UserProfile, auth, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { Home, ListTodo, Video, MessageSquare } from "lucide-react";

export default function Sidebar() {
    const { userId } = auth();
    const activeColor = "text-indigo-500";
    const defaultColor = "text-gray-700";
    const hoverColor = "hover:text-gray-900";
    const hoverBgColor = "hover:bg-gray-100";

    return (
        <div className="fixed top-0 left-0 h-screen bg-white w-[14vw] p-4 border-r border-gray-200 flex flex-col">

            <nav className="flex-grow">
                <ul className="space-y-2">

                    <li>
                        <Link
                            href="/"
                            className={`block px-4 py-2 gap-2 flex items-center rounded transition-colors duration-200 ${defaultColor} ${hoverColor} ${hoverBgColor}`}
                        >
                            <Home className={`w-6 h-6 ${defaultColor} ${hoverColor}`} />
                            <span>Home</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/videoCall"
                            className={`block px-4 py-2 rounded gap-2 flex items-center transition-colors duration-200 ${defaultColor} ${hoverColor} ${hoverBgColor}`}
                        >
                            <Video className={`w-6 h-6 ${defaultColor} ${hoverColor}`} />
                            <span>Video Call</span>
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            href="/chat"
                            className={`block px-4 py-2 rounded gap-2 flex items-center transition-colors duration-200 ${defaultColor} ${hoverColor} ${hoverBgColor}`}
                        >
                            <MessageSquare className={`w-6 h-6 ${defaultColor} ${hoverColor}`} />
                            <span>Chat</span>
                        </Link>
                    </li> */}
                    <li>
                        <Link
                            href="/tasks"
                            className={`block px-4 py-2 rounded gap-2 flex items-center transition-colors duration-200 ${defaultColor} ${hoverColor} ${hoverBgColor}`}
                        >
                            <ListTodo className={`w-6 h-6 ${defaultColor} ${hoverColor}`} />
                            <span>Task</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                {userId ? (
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center">
                            <UserButton afterSignOutUrl="/" />
                            <span className="ml-2">Your Profile</span>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-4 items-center">
                        <Link href="/sign-up">Sign up</Link>
                        <Link href="/sign-in">Sign In</Link>
                    </div>
                )}
            </div>
        </div>
    );
}