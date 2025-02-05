import { Search, SquarePen, Bell, CircleUserRound, House } from "lucide-react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex bg-blue-50 w-full">
      <div className="flex w-100">
        <img
          className="w-30 mx-8 scale-120"
          src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png"
        />
      </div>
      <div className="flex border border-black rounded-full my-4">
        <Search className="mx-3 my-1" size={30} />
        <input className="outline-0" type="text" placeholder="Search" />
      </div>
      <div className="flex justify-end w-full m-4 gap-5">
        <Link to="/">
          <House className="mx-3 my-1" size={30} />
        </Link>
        <div className="flex">
          <Link to="/addBlog">
            <SquarePen className="mx-3 my-1" size={30} />
          </Link>
        </div>
        <Bell className="mx-3 my-1" size={30} />
        <CircleUserRound className="mx-3 my-1" size={30} />
      </div>
    </div>
  );
};

export default NavBar;
