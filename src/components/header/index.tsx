/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="header">
      {/* NOTE: コンテナサイズはヘッダーに合わせる(112px(100%)) */}
      <div className="header-container w-container">
        <div className="site">
          <a href="">
            <img src="/next.svg" alt="" width="135" height="26" />
          </a>
        </div>
        <button className="navbtn">
          <i className="fas fa-bars"></i>
          <span className="sr-only">SPボタン</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
