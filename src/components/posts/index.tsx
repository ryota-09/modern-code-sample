/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

const Posts: FC = () => {
  return (
    <>
      <section className="posts">
        <div className="w-container">
          <h2 className="heading">
            h2テキストh2テキストh2テキスト<span>spanテキスト</span>
          </h2>
          <div className="posts-container">
            <article className="post">
              <a href="#">
                <figure>
                  <img src="/news01.jpg" alt="" width="1000" height="750" />
                </figure>
                <h3>h3テキスト</h3>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </a>
            </article>
            <article className="post">
              <a href="#">
                <figure>
                  <img src="/news02.jpg" alt="" width="1000" height="750" />
                </figure>
                <h3>h3テキスト</h3>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </a>
            </article>
            <article className="post">
              <a href="#">
                <figure>
                  <img src="/news03.jpg" alt="" width="1000" height="750" />
                </figure>
                <h3>h3テキスト</h3>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </a>
            </article>
            <article className="post">
              <a href="#">
                <figure>
                  <img src="/news01.jpg" alt="" width="1000" height="750" />
                </figure>
                <h3>h3テキスト</h3>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </a>
            </article>
            <article className="post">
              <a href="#">
                <figure>
                  <img src="/news02.jpg" alt="" width="1000" height="750" />
                </figure>
                <h3>h3テキスト</h3>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </a>
            </article>
            <article className="post">
              <a href="#">
                <figure>
                  <img src="/news03.jpg" alt="" width="1000" height="750" />
                </figure>
                <h3>h3テキスト</h3>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
