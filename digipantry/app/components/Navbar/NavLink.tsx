import Link from "next/link";

interface NavLinkProps {
  label: string;
  linkTo: string;
}

export default function NavLink({ label, linkTo }: NavLinkProps) {
  return (
    <Link className=" p-3 rounded-3xl hover:bg-fuchsia-200" href={linkTo}>
      {label}
    </Link>
  );
}
