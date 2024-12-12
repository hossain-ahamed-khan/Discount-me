import Image from "next/image";
import restaurantImg from "../../../../public/images/Rectangle 2.png";
import starImg from "../../../../public/images/Star 1.png";
import location from "../../../../public/images/location.png";
import Link from "next/link";

export default function TopRestaurants() {
    return (
        <div>
            <div className="card bg-[#FDFDFD] shadow-xl border-2">
                <figure className="px-10 pt-10">
                    <Image
                        src={restaurantImg}
                        width={350}
                        height={100}
                        alt="main logo image"
                    />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title text-[#334A55] font-roboto text-2xl">Trattoria dallOste</h2>
                        <div className="flex gap-2 items-center">
                            <Image
                                src={starImg}
                                width={25}
                                height={5}
                                alt="main logo image"
                            />
                            <p className="text-[#334A55] text-xl">(4.5)</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Image
                            src={location}
                            width={25}
                            height={5}
                            alt="main logo image"
                        />
                        <p className="text-[#232323]">Via Luigi Alamanni, 3, 50123 Firenze</p>
                    </div>
                    <p className="text-xs text-[#758888]">
                        Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  Read More...
                    </p>
                    <div className="pt-3 w-full">
                        <Link href="/restaurants/1">
                            <button className="btn w-full bg-[#00B047] hover:bg-[#119747]  text-white border-none">Visit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}