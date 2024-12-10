import Hero from "./components/home/hero";
import TopRestaurants from "./components/home/topRestaurants";

export default function Home() {
  return (
    <div className="w-full lg:w-4/5 mx-auto">
      <Hero />

      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-medium font-roboto text-[#334A55]">Explore <span className="text-[#FF7D29]">Top Restaurants</span></h1>
            <p className="text-[#758888] py-2 text-xl">Check your city Near by Restaurant</p>
          </div>
          <div>
            <button>See All</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <TopRestaurants />
          <TopRestaurants />
          <TopRestaurants />
        </div>
      </div>

    </div>
  );
}
