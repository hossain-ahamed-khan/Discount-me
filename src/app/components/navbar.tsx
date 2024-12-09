import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/main-logo.png";

export const Navbar = () => {
    return (
        <div className="border-b-2 border-[#DFE1E3]">
            <div className="w-4/5 mx-auto flex justify-between h-36 items-center">
                <div>
                    <Image
                        src={logo}
                        width={200}
                        height={100}
                        alt="main logo image"
                    />
                </div>
                <div>
                    search
                </div>
                <nav>
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