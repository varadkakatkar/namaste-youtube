import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1" >
        <img
          className="h-8"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />
        <img
         className="h-8 mx-2"
          alt="youtube-logo"
          src="https://i.pinimg.com/736x/10/0d/92/100d925f120c7b3c1a53b2aaea2ec11c.jpg"
        
        />
      </div>
      <div className="col-span-10 px-10 flex items-center justify-center">
       <input type="text" id="search" className="w-1/2 border border-gray-300 px-3 py-1 rounded-l-full focus:outline-none" placeholder="Search"/>
       <button className="bg-gray-100 px-3 py-1 rounded-r-full border border-gray-300 hover:bg-gray-200"> 🔍 </button>
      </div>

      <div className="col-span-1">
        <img  className="h-8" alt="user" src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"/>
      </div>
    </div>
  );
};

export default Head;
