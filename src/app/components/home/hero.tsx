import Image from "next/image";
import locationLogo from "../../../../public/images/location.png";
import search from "../../../../public/images/Search.png";
import heroImage from "../../../../public/images/hero-img.png";
import heroImg from "../../../../public/images/hero-img-2.png";

export default function Hero() {
    return (
        <div className="relative my-3 lg:my-20">
            <div className="flex-none lg:flex justify-between items-center">
                <div className="w-full lg:w-3/5 space-y-5 lg:space-y-10">
                    <h1 className="font-roboto text-5xl lg:text-7xl font-bold text-[#0C0C0C]">Good <span className="text-[#FF7D29]">food</span>, great <br /> memories</h1>
                    <p className="font-dm_Sans text-xl lg:text-3xl text-[#232323] w-4/5">Enable diners to customize their booking by requesting a specific table location or view.</p>
                    <div className="border rounded-full w-52 lg:w-[480px] flex justify-between items-center">
                        <div className="bg-[#00B047] w-24 lg:w-32 flex justify-between items-center text-white space-x-4 p-3 rounded-l-full">
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
                                src={search}
                                width={20}
                                height={20}
                                alt="search image"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/5">
                    <div>
                        <Image
                            src={heroImage}
                            width={600}
                            height={300}
                            alt="hero image"
                        />
                    </div>
                </div>
            </div>
            <div className="hidden lg:block absolute -top-20 left-80">
                <Image
                    src={heroImg}
                    width={1000}
                    height={200}
                    alt="search image"
                />
            </div>
        </div>
    );
}