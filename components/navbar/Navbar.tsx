
import NavSearch from "./NavSearch";
import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <div className='flex gap-2 sm:flex-row sm:justify-between sm:w-2/3 sm:items-center '>
          {/*left: logo */}
          <Logo />
          {/*middle: search input */}
          <NavSearch />
        </div>

        {/*right: links dropdown */}
        <div className='flex gap-4 items-center '>
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
