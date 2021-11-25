import React from "react";
import { slide as Menu } from "react-burger-menu";
import SideBar from "../../sidebar";

const Slider = ({ menuOpenState, stateChangeHandler, setMenuOpenState }) => {
  return (
    <Menu
      right
      disableAutoFocus
      customBurgerIcon={false}
      isOpen={menuOpenState}
      onStateChange={(state) => stateChangeHandler(state)}
      itemListElement="div"
    >
      <SideBar mobileView={true}/>
    </Menu>
  );
};

export default Slider;
