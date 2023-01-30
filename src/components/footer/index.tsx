/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container w-container">
        <div className="footer-site">
          <a href="#">
            <img src="/next.svg" alt="" width="135" height="26" />
          </a>
        </div>
        <ul className="footer-sns">
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
              <span className="sr-only">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>
              <span className="sr-only">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
              <span className="sr-only">Instagram</span>
            </a>
          </li>
        </ul>
        <ul className="footer-menu">
          <li>
            <a href="#">aタグ</a>
          </li>
          <li>
            <a href="#">aタグ</a>
          </li>
          <li>
            <a href="#">aタグ</a>
          </li>
          <li>
            <a href="#">aタグ</a>
          </li>
          <li>
            <a href="#">aタグ</a>
          </li>
        </ul>
        <div className="footer-copy">@ コピー</div>
      </div>
    </footer>
  );
};

export default Footer;
