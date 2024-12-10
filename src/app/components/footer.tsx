import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/main-logo.png";
import qrCode from "../../../public/images/Qr Code.png";
import googlePlay from "../../../public/images/google-play-logo.png";
import appStore from "../../../public/images/apple-store-logo.png";

export const Footer = () => {
    return (
        <div className="bg-[#232323]">
            <div className="w-11/12 lg:w-4/5 flex-none lg:flex justify-between mx-auto py-12 space-y-10 lg:space-y-0">
                <div className="flex-1 justify-center">
                    <div>
                        <Link href="/">
                            <Image
                                src={logo}
                                width={200}
                                height={100}
                                alt="main logo image"
                            />
                        </Link>
                    </div>
                    <p className="font-inter w-60 lg:w-96 my-6">
                        Ecommerce is a free UI Kit from Paperpillar that you can use for your personal or commercial project.
                    </p>
                    <div className="space-x-2">
                        <input type="text" placeholder="Type your email address" className="border border-outline rounded-full px-3 lg:px-6 py-2 lg:py-3 bg-[#232323] text-xs lg:text-lg" />
                        <button className="bg-[#F8FAFC] px-3 lg:px-6 py-2 lg:py-3 rounded-full text-[#232323] text-xs lg:text-lg">Submit</button>
                    </div>
                </div>

                <div className="flex justify-around flex-1 text-[#F8FAFC]">
                    <div className="space-y-2">
                        <p className="font-semibold text-xl mb-3">Account</p>
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-semibold text-xl mb-3">Quick Link</p>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                </div>

                <div className="flex justify-around flex-1 text-[#F8FAFC]">
                    <div className="space-y-2">
                        <p className="font-semibold text-xl mb-3">Support</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>
                    <div>
                        <p className="font-semibold text-xl mb-5">Download App</p>
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