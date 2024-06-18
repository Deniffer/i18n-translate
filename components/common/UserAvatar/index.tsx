import { auth } from "@/auth";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      {JSON.stringify(session.user)}
      {/* <Image src={session.user} alt="User Avatar" /> */}
    </div>
  );
}

