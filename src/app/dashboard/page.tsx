import { UserProfile, auth, currentUser } from "@clerk/nextjs";
import Image from 'next/image';

export default async function Dashboard() {
    try {
        const { userId } = auth();
        const user = await currentUser();
        console.log(user);

        if (!userId) {
            return <h1>You are not logged in</h1>;
        }

        return (
            <>
                <h1>You are now authenticated with {user?.firstName} {user?.lastName} {user?.emailAddresses[0].emailAddress}</h1>
                {user?.imageUrl && <Image src={user?.imageUrl} alt="Picture of the author" width={200} height={200} />}
                <UserProfile />
            </>
        );
    } catch (error) {
        console.error("Error fetching user data:", error);
        return <h1>Error fetching user data. Please try again.</h1>;
    }
}
