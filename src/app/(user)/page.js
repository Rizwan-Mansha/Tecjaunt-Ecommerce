import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import HeroSection from "@/components/HeroSection";
import CategoriesLinks from "@/components/CategoriesLinks";
import Cart from "@/components/Products";

export default function Home() {
  return (
    <MaxWidthWrapper className="">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center mt-12 font-semibold text-3xl w-96">
          Choose The Best Items For Yourself
        </p>
        <HeroSection />
        <CategoriesLinks />
        <Cart />
      </div>
    </MaxWidthWrapper>
  );
}
