import Image from "next/image";
import locationLogo from "../../../public/images/location.png";
import searchLogo from "../../../public/images/Search.png";
import TopRestaurants from "../components/home/topRestaurants";

export default function Restaurants() {
    return (
        <div className="w-full lg:w-4/5 mx-auto my-5 lg:my-10">
            <div className="flex">
                <div className="flex-1">
                    <h1 className="text-4xl font-medium font-roboto text-[#334A55]">Explore <span className="text-[#FF7D29]">Top Restaurants</span></h1>
                    <p className="text-[#758888] py-2 text-xl">Check your city Near by Restaurant</p>
                </div>
                <div className="flex-1">
                    <div className="border rounded-full w-full flex justify-between items-center">
                        <div className="bg-[#00B047] w-1/4 flex justify-around items-center text-white space-x-2 py-3 px-2 rounded-l-full">
                            <div>
                                <Image
                                    src={locationLogo}
                                    width={20}
                                    height={20}
                                    alt="main logo image"
                                />
                            </div>
                            <p>Location</p>
                        </div>
                        <div>
                            <input className="bg-[#FDFDFD] rounded-full focus:outline-none" type="text" />
                        </div>
                        <div className="bg-[#00B047] rounded-full w-10 h-10 flex justify-center items-center mx-2">
                            <Image
                                src={searchLogo}
                                width={20}
                                height={20}
                                alt="search image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4 lg:mt-8">
                <TopRestaurants />
                <TopRestaurants />
                <TopRestaurants />
                <TopRestaurants />
                <TopRestaurants />
                <TopRestaurants />
                <TopRestaurants />
                <TopRestaurants />
                <TopRestaurants />
                <TopRestaurants />
                <TopRestaurants />
                <TopRestaurants />
            </div>
        </div>
    );
}