import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ImageText from "@/components/imgtext";
import Posts from "@/components/posts";
import { NextPage } from "next";

export const Top: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ImageText />
      <Posts />
      <Footer />
    </>
  );
};
export default Top;
