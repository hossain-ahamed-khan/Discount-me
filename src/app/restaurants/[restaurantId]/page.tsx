import Image from "next/image";
import restaurentBanner1 from "../../../../public/images/villagio1.jpeg";
import restaurentBanner2 from "../../../../public/images/villago2.png";
import restaurentBanner3 from "../../../../public/images/villago3.png";
import restaurentBanner4 from "../../../../public/images/villago4.png";
import locationIcon from "../../../../public/images/Location_icon_ic.png";
import milkImg from "../../../../public/images/milk.png";
import tshirtImg from "../../../../public/images/t-shirt.png";
import bookImg from "../../../../public/images/book.png";
import riceImg from "../../../../public/images/rice.png";
import ItemCard from "@/app/components/itemCard";

export default function RestaurantDetails() {
    return (
        <div className="w-full lg:w-4/5 mx-auto">
            <div className="carousel w-full mt-3">
                <div id="slide1" className="carousel-item relative w-full">
                    <Image
                        src={restaurentBanner1}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        alt="main logo image"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Image
                        src={restaurentBanner2}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        alt="main logo image"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Image
                        src={restaurentBanner3}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        alt="main logo image"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <Image
                        src={restaurentBanner4}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        alt="main logo image"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-[#334A55] font-roboto text-3xl font-medium py-3 border-b-2"><span className="text-[#00B047]">Villagio</span> Restaurant & Bar</h1>
                <div className="flex-none lg:flex py-5 lg:py-10">
                    <div className="flex-1">
                        <div className="flex gap-2">
                            <div>
                                <Image
                                    src={locationIcon}
                                    width={20}
                                    height={20}
                                    alt="main logo image"
                                />
                            </div>
                            <p className="text-[#334A55]">360 San Lorenzo Avenue, Suite <br />
                                1430 Coral Gables, FL 33146-1865 |</p>
                        </div>
                        <div className="flex items-center gap-4 py-6">
                            <div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <p className="text-[#1D242D] text-xl font-bold">4.3</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-[#334A55]">Villagio restaurant and bar has one mission: to provide guests with a fine and fresh seafood experience. Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional. to provide guests with a fine  Read More...</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <h1 className="text-[#1D242D] text-3xl font-bold">Items🔥</h1>
                <button className="p-3 text-[#00B047] bg-[#D9F3E3] rounded-full">See all</button>
            </div>

            <div className="grid grid-cols-4 lg:grid-cols-8">
                <Image
                    src={milkImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={milkImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={milkImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={tshirtImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={tshirtImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={bookImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={bookImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={riceImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-5">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    );
}