import { Button } from "@/components/ui/button";
import { Logo } from "./Logo-container";

export const Header = () => {
  return (
    <div className="w-[1440px] h-[68px] bg-[#18181b] px-22 py-3 flex gap-[735px]">
      <Logo />
      <div className="w-[152px] h-[36px] flex gap-[13px]">
        <Button variant={"secondary"}>Sign up</Button>
        <Button variant={"destructive"}>Log in</Button>
      </div>
    </div>
  );
};
