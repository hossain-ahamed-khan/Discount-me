import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/main-logo.png";
import search from "../../../public/images/Search.png";
import cart from "../../../public/images/shopping_cart_icon 1.png";
import user from "../../../public/images/user _ user.png";

export const Navbar = () => {
    return (
        <div className="border-b-2">
            <div className="navbar w-full lg:w-4/5 mx-auto bg-[#FDFDFD] py-5 lg:py-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[10] mt-3 w-60 p-6 shadow bg-[#FDFDFD] text-[#1D242D] text-lg font-medium flex flex-col gap-3">
                            <Link href="/profile/dashboard"><li>Profile</li></Link>
                            <Link href="/shopping-cart"><li>Shopping Cart</li></Link>
                            <Link href="/categories/about-us"><li>About us</li></Link>
                            <Link href="/categories/terms-of-use"><li>Terms of use</li></Link>
                            <Link href="/categories/privacy-policy"><li>Privacy Policy</li></Link>
                        </ul>
                    </div>
                    <Link href="/">
                        <Image
                            src={logo}
                            width={200}
                            height={100}
                            alt="main logo image"
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">


                    <div className="relative flex border rounded-3xl">
                        <Image
                            className="absolute top-3 left-3"
                            src={search}
                            width={18}
                            height={18}
                            alt="search image"
                        />
                        <input className="w-72 px-10 py-2 rounded-3xl focus:outline-none bg-[#FDFDFD]" type="text" placeholder="Search" />
                        <button className="bg-[#FF7D29] px-6 text-white rounded-r-3xl">Search</button>
                    </div>


                    <ul className="menu menu-horizontal px-1 z-[10]">
                        <li>
                            <details>
                                <summary className="text-[#1D242D] text-lg hover">All Category</summary>
                                <ul className="p-6 w-60 bg-[#FDFDFD] text-[#1D242D] text-lg font-medium flex flex-col gap-3">
                                    <Link href="/profile/dashboard"><li>Profile</li></Link>
                                    <Link href="/shopping-cart"><li>Shopping Cart</li></Link>
                                    <Link href="/categories/about-us"><li>About Us</li></Link>
                                    <Link href="/categories/terms-of-use"><li>Terms of use</li></Link>
                                    <Link href="/categories/privacy-policy"><li>Privacy Policy</li></Link>
                                </ul>
                            </details>
                        </li>
                        <Link href="/coupon" className="text-[#1D242D] text-lg btn btn-ghost"><li>Coupon</li></Link>
                        <Link href="/categories/about-us" className="text-[#1D242D] text-lg btn btn-ghost"><li>About Us</li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex space-x-10">
                        <Link href="/shopping-cart" className="text-[#1D242D]">
                            <Image
                                src={cart}
                                width={20}
                                height={20}
                                alt="cart logo image"
                            />
                        </Link>
                        <Link href="/sign-in" className="text-[#1D242D]">
                            <Image
                                src={user}
                                width={20}
                                height={20}
                                alt="profile logo image"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};