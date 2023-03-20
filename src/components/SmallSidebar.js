import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { toogleSidebar } from "../features/user/userSlice";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export const SmallSidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((store) => store.user);

  const toogle = () => {
    dispatch(toogleSidebar());
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toogle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>

          <NavLinks toogleSidebar={toogle} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
