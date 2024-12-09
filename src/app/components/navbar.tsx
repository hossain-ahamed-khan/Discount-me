import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/main-logo.png";
import search from "../../../public/images/Search.png";

export const Navbar = () => {
    return (
        <div className="border-b-2 border-[#DFE1E3]">
            <div className="w-4/5 mx-auto flex justify-between h-36 items-center">
                <div>
                    <Image
                        src={logo}
                        width={250}
                        height={100}
                        alt="main logo image"
                    />
                </div>
                <div>
                    <div className="relative flex border rounded-3xl">
                        <Image
                            className="absolute top-3.5 left-2.5"
                            src={search}
                            width={20}
                            height={20}
                            alt="main logo image"
                        />
                        <input className="w-96 pl-9 rounded-3xl focus:outline-none" type="text" placeholder="Search" />
                        <button className="bg-[#FF7D29] py-3 px-6 text-white rounded-r-3xl">Search</button>
                    </div>
                </div>
                <nav>
                    <div>
                        <h1>dropdown menu</h1>
                    </div>
                    <Link href="/" className="text-[#1D242D] ">
                        Coupon
                    </Link>
                </nav>
                <nav>
                    login
                </nav>
            </div>
        </div>
    );
};