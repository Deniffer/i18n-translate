import { SignIn } from "@/components/common/SignIn";
import { SignOut } from "@/components/common/SignOut";
import UserAvatar from "@/components/common/UserAvatar";

export const runtime = "edge";

export default function ProjectPage() {
  return (
    <div>
      <h1>Project Page</h1>

      <SignIn />

      <UserAvatar />

      <SignOut />
    </div>
  );
}

