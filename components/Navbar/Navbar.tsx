import Image from "next/image";
import Link from "next/link";
import { Menu } from "./Menu";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="py-4 border-b">
      <div className="container flex justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            alt="Frontend Arena Logo"
            src="./shield.svg"
            width={30}
            height={30}
          />
          <span>Frontend Arena</span>
        </Link>
        <Menu />
        <div className="hidden lg:flex gap-8">
          <Button className="py-2 px-4 bg-indigo-400 hover:bg-indigo-600 rounded-md text-white">
            <Link href="register">Sign up</Link>
          </Button>
          <Button>
            <Link href="login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
