// Import necessary types from Next.js
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { UserProfile, auth, currentUser } from "@clerk/nextjs";
import Image from 'next/image';
import Link from "next/link";

// Define the type for the user object
interface User {
    firstName: string;
    lastName: string;
    emailAddresses: { emailAddress: string }[];
    imageUrl?: string;
}

// Update the Dashboard component to accept a user prop of type User
export default function Dashboard({ user }: { user: User }) {
    if (!user) {
        return <h1>You are not logged in</h1>;
    }

    return (
        <>
            <h1>You are now authenticated with {user.firstName} {user.lastName} {user.emailAddresses[0].emailAddress}</h1>
            {user.imageUrl && <Image src={user.imageUrl} alt="Picture of the author" width={200} height={200} />}
        </>
    );
}

// Use GetServerSidePropsContext for the context parameter
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    try {
        const { userId } = auth();
        const user = await currentUser();

        if (!userId) {
            return {
                props: {}, // Will be passed to the page component as props
            };
        }

        return {
            props: { user }, // Will be passed to the page component as props
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        return {
            props: {}, // Will be passed to the page component as props
        };
    }
};
