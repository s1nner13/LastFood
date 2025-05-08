import { Button } from "@/components/ui/button";
import { Logo } from "./Logo-container";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-[1440px] h-[68px] bg-[#18181b] px-22 py-3 flex gap-[735px]">
      <Logo />
      <div className="w-[152px] h-[36px] flex gap-[13px]">
        <Link href="./login">
          <Button variant={"secondary"}>Log in</Button>
        </Link>
        <Link href="./signup">
          <Button variant={"destructive"}>Sign up</Button>
        </Link>
      </div>
    </div>
  );
};
