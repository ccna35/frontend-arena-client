import Link from "next/link";

export function Menu() {
  return (
    <nav className="hidden lg:flex gap-8 items-center">
      <Link href="/challenges">Challenges</Link>
      <Link href="/submissions">Submissions</Link>
      <Link
        href="/premium"
        className="py-2 px-4 bg-orange-400 rounded-md text-white"
      >
        Premium
      </Link>
    </nav>
  );
}
