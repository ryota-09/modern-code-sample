/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

const ImageText: FC = () => {
  return (
    <>
      <section className="imgtext">
        <div className="imgtext-container w-container">
          <div className="text">
            <h2 className="heading-decoration">h2テキスト</h2>
            <p>Convenient</p>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <figure className="img">
            <img src="/tool.jpg" alt="" width="1600" height="1260" />
          </figure>
        </div>
      </section>
      <section className="imgtext">
        <div className="imgtext-container reverse w-container">
          <div className="text">
            <h2 className="heading-decoration">h2テキスト</h2>
            <p>Convenient</p>
            <p>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <figure className="img">
            <img src="/helpful.jpg" alt="" width="1600" height="1260" />
          </figure>
        </div>
      </section>
    </>
  );
};

export default ImageText;
