import NavLink from "./NavLink";
import ProfileLink from "./ProfileLink";

export default function NavBar() {
  return (
    <div className="w-full md:px-4 mt-4 ">
      <nav
        aria-label="Main navigation"
        className="flex justify-between items-center bg-neutral-100 rounded-3xl shadow-lg"
      >
        <div className=" m-5 ">
          <NavLink label="SKAFFERI" linkTo="/inventory"></NavLink>
          <NavLink label="RECEPT" linkTo="/recipes"></NavLink>
          <NavLink label="INKÖPSLISTA" linkTo="/inventory"></NavLink>
        </div>

        <div className="gap-4 p-2 m-3  rounded-3xl">
          <ProfileLink></ProfileLink>
        </div>
      </nav>
    </div>
  );
}
