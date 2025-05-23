import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex  ">
      <Link href="/recipes">RECPET</Link>
      <Link href="/inventory">MITT SKAFFERI</Link>
      <Link href="/inventory">INKÖPSLISTA</Link>
    </nav>
  );
}
