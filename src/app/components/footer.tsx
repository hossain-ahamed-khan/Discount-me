import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/main-logo.png";
import qrCode from "../../../public/images/Qr Code.png";
import googlePlay from "../../../public/images/google-play-logo.png";
import appStore from "../../../public/images/apple-store-logo.png";

export const Footer = () => {
    return (
        <div className="bg-[#232323]">
            <div className="w-full lg:w-4/5 flex-none lg:flex justify-between mx-auto py-5 lg:py-12 space-y-6 lg:space-y-0">
                <div className="flex-1 text-center lg:text-left">
                    <div className="flex lg:flex-none justify-center lg:justify-start">
                        <Link href="/">
                            <Image
                                src={logo}
                                width={200}
                                height={100}
                                alt="main logo image"
                            />
                        </Link>
                    </div>
                    <p className="font-inter w-full lg:w-96 my-3 lg:my-6 text-sm lg:text-base">
                        Ecommerce is a free UI Kit from Paperpillar that you can use for your personal or commercial project.
                    </p>
                    <div className="space-x-3">
                        <input type="text" placeholder="Type your email address" className="w-1/2 border border-outline rounded-full px-6 py-3 bg-[#232323]" />
                        <button className="bg-[#F8FAFC] px-6 py-3 rounded-full text-[#232323 text-black font-semibold">Submit</button>
                    </div>
                </div>

                <div className="flex justify-around flex-1 text-[#F8FAFC]">
                    <div className="space-y-2 text-xs lg:text-base">
                        <p className="font-bold mb-3">Account</p>
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>
                    <div className="space-y-2 text-xs lg:text-base">
                        <p className="font-bold mb-3">Quick Link</p>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                </div>

                <div className="flex justify-around flex-1 text-[#F8FAFC]">
                    <div className="space-y-2 text-xs lg:text-base">
                        <p className="font-bold mb-3">Support</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>
                    <div>
                        <p className="font-bold mb-5 text-xs lg:text-base">Download App</p>
                        <div className="flex gap-3">
                            <div>
                                <Image
                                    src={qrCode}
                                    width={80}
                                    height={80}
                                    alt="qr code image"
                                />
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <Image
                                        src={googlePlay}
                                        width={100}
                                        height={40}
                                        alt="google play image"
                                    />
                                </div>
                                <div>
                                    <Image
                                        src={appStore}
                                        width={100}
                                        height={40}
                                        alt="app store image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};