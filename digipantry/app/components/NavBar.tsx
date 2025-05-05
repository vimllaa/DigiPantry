import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-green-800">
      <div>
        <Link href="/inventory">RECPET</Link>
        <Link href="/inventory">MITT SKAFFERI</Link>
        <Link href="/inventory">INKÖPSLISTA</Link>
      </div>
    </nav>
  );
}
