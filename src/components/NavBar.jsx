import { Search, SquarePen, Bell, CircleUserRound } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex bg-white w-full">
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
        <div className="flex">
          <SquarePen className="mx-3 my-1" size={30} />
          <p className="text-xl mt-1">Write</p>
        </div>
        <Bell className="mx-3 my-1" size={30} />
        <CircleUserRound className="mx-3 my-1" size={30} />
      </div>
    </div>
  );
};

export default NavBar;
