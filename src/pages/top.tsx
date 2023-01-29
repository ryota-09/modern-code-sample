import Header from "@/components/header";
import Hero from "@/components/hero";
import ImageText from "@/components/imgtext";
import { NextPage } from "next";

export const Top: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ImageText />
    </>
  );
};
export default Top;
