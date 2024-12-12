import Image from "next/image";
import Hero from "./components/home/hero";
import ProductCard from "./components/home/productCard";
import TopRestaurants from "./components/home/topRestaurants";
import couponImg from "../../public/images/coupon-logo.png";
import dollarImg from "../../public/images/dollar-logo.png";
import bookmarkImg from "../../public/images/bookmark-logo.png";
import truckImg from "../../public/images/truck-logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full lg:w-4/5 mx-auto">

      {/* ------------------------- Hero Section ----------------------- */}
      <Hero />

      {/* ---------------------------- Top Restaurants Section ---------------------- */}
      <div className="my-5 lg:my-20">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-medium font-roboto text-[#334A55]">Explore <span className="text-[#FF7D29]">Top Restaurants</span></h1>
            <p className="text-[#758888] py-2 text-xl">Check your city Near by Restaurant</p>
          </div>
          <div>
            <Link href="/restaurants">
              <button className="font-semibold text-black">See All</button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <TopRestaurants />
          <TopRestaurants />
          <TopRestaurants />
        </div>
      </div>


      {/* ------------------------------- Product Section ------------------------- */}

      <div>
        <h1 className="font-figtree text-[#232323] text-4xl font-bold py-5 border-t-2">Products</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

      </div>


      {/* ---------------------------- Customer Experience Section --------------------- */}

      <div className="my-5 lg:my-20">
        <h1 className="text-[#232323] text-4xl font-bold font-figtree">Customer experience is important to us</h1>
        <p className="py-5 text-[#EA5326] text-xl w-full lg:w-1/2">Sed dictum ipsum elementum diam dapibus, ut sodales orci monte consectetur. Fusce a mollis lorem. Orci varius natoque penatibus.</p>

        <div className="flex justify-between py-3 lg:py-10">
          <div>
            <Image
              src={couponImg}
              width={60}
              height={60}
              alt="food image"
            />
            <p className="text-[#232323] text-xs lg:text-xl font-figtree font-medium">Original Products</p>
          </div>
          <div>
            <Image
              src={dollarImg}
              width={60}
              height={60}
              alt="food image"
            />
            <p className="text-[#232323] text-xs lg:text-xl font-figtree font-medium">Satisfaction Guarantee</p>
          </div>
          <div>
            <Image
              src={bookmarkImg}
              width={60}
              height={60}
              alt="food image"
            />
            <p className="text-[#232323] text-xs lg:text-xl font-figtree font-medium">New Arrival Everyday</p>
          </div>
          <div>
            <Image
              src={truckImg}
              width={60}
              height={60}
              alt="food image"
            />
            <p className="text-[#232323] text-xs lg:text-xl font-figtree font-medium">Fast Shipping</p>
          </div>
        </div>

      </div>


    </div>
  );
}
