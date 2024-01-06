import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container flex justify-between">
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold">About us</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Link 1</Link>
            </li>
            <li>
              <Link href="/">Link 2</Link>
            </li>
            <li>
              <Link href="/">Link 3</Link>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold">About us</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Link 1</Link>
            </li>
            <li>
              <Link href="/">Link 2</Link>
            </li>
            <li>
              <Link href="/">Link 3</Link>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-4">
          <h4 className="font-semibold">About us</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Link 1</Link>
            </li>
            <li>
              <Link href="/">Link 2</Link>
            </li>
            <li>
              <Link href="/">Link 3</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
