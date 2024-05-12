import React from "react";
import "./_header.scss"
import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md"//material disign
const Header = ({handleToggleSidebar}) => {
  return (
    <div className="border border-dark header">
      <FaBars className="header__menu" size={26} 
      onClick={()=>handleToggleSidebar()}
      />
      <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" className="header__logo" />
      <form action="">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <dic className="header__icons">
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
        alt="avatar"/>
      </dic>

    </div>
  );
}

export default Header