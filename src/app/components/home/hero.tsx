import Image from "next/image";
import locationLogo from "../../../../public/images/location.png";
import search from "../../../../public/images/Search.png";
import heroImage from "../../../../public/images/hero-img.png";
import heroImg from "../../../../public/images/hero-img-2.png";
import box from "../../../../public/images/box.png";
import truck from "../../../../public/images/delivery-truck.png";
import clock from "../../../../public/images/24-hours.png";
import shield from "../../../../public/images/shield.png";

export default function Hero() {
    return (
        <div className="py-2 lg:py-10">
            <div className="relative my-3 lg:my-20">
                <div className="flex-none lg:flex justify-between items-center">
                    <div className="w-full lg:w-3/5 space-y-5 lg:space-y-10 text-center lg:text-left">
                        <h1 className="font-roboto text-5xl lg:text-7xl font-bold text-[#0C0C0C]">Good <span className="text-[#FF7D29]">food</span>, great <br /> memories</h1>

                        <p className="w-full lg:w-3/5 font-dm_Sans text-xl lg:text-3xl text-[#232323]">Enable diners to customize their booking by requesting a specific table location or view.</p>

                        <div className="border rounded-full w-full lg:w-4/6 flex justify-between items-center">
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
                                width={550}
                                height={300}
                                alt="hero image"
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block absolute -top-32 left-60">
                    <Image
                        src={heroImg}
                        width={1000}
                        height={100}
                        alt="hero second image"
                    />
                </div>
            </div>

            <div className="hidden lg:block">
                <div className="flex w-3/4 mx-auto justify-between bg-[#FFFFFF] shadow-md p-10">
                    <div className="flex justify-center items-center gap-3">
                        <div>
                            <Image
                                src={box}
                                width={40}
                                height={40}
                                alt="main logo image"
                            />
                        </div>
                        <div>
                            <h3 className="font-inter font-medium text-[#272343]">Discount</h3>
                            <p className="text-[#9A9CAA] font-inter text-xs font-normal">Every week new sales</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <div>
                            <Image
                                src={truck}
                                width={40}
                                height={40}
                                alt="main logo image"
                            />
                        </div>
                        <div>
                            <h3 className="font-inter font-medium text-[#272343]">Free Delivery</h3>
                            <p className="text-[#9A9CAA] font-inter text-xs font-normal">100% Free for all orders</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <div>
                            <Image
                                src={clock}
                                width={40}
                                height={40}
                                alt="main logo image"
                            />
                        </div>
                        <div>
                            <h3 className="font-inter font-medium text-[#272343]">Great Support 24/7</h3>
                            <p className="text-[#9A9CAA] font-inter text-xs font-normal">We care your experiences</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <div>
                            <Image
                                src={shield}
                                width={40}
                                height={40}
                                alt="main logo image"
                            />
                        </div>
                        <div>
                            <h3 className="font-inter font-medium text-[#272343]">secure Payment</h3>
                            <p className="text-[#9A9CAA] font-inter text-xs font-normal">100% Secure Payment Method</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}