import { FC } from "react";

type Props<T> = {
  data: T
}

const MyComponent = <T extends string>({data}: Props<T>) => {
  return <div>{data}</div>
}

<MyComponent<string> data="Data" /> 

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="hero-container w-container">
        <h1>h1テキスト</h1>
        <p>pテキストpテキストpテキスト</p>
        <a href="#" className="btn">無料ではじめる</a>
      </div>
    </section>
  );
};

export default Hero;
