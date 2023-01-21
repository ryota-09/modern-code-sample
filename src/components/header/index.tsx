import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="site">
          <a href="">
            <img src="/next.svg" alt="" width="135" height="26" />
          </a>
        </div>
      </div>
      <button className="navbtn">
        <i className="fas fa-bars"></i>
        <span className="sr-only">SPボタン</span>
      </button>
    </header>
  );
};
export default Header;
