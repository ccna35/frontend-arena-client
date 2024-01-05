import Image from "next/image";
import Link from "next/link";
import { Menu } from "./Menu";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="py-4">
      <div className="container flex justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            alt="Frontend Arena Logo"
            src="./shield.svg"
            // className="mr-2"
            width={30}
            height={30}
          />
          <span>Frontend Arena</span>
        </Link>
        <Menu />
        <div className="flex gap-8">
          <Button className="py-2 px-4 bg-indigo-400 hover:bg-indigo-600 rounded-md text-white">
            <Link href="register">Sign up</Link>
          </Button>
          <Button variant="ghost">
            <Link href="login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
