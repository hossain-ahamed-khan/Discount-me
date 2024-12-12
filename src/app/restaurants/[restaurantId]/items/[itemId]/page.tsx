import ReviewCard from "@/app/components/reviewCard";
import Image from "next/image";
import itemImg from "../../../../../../public/images/frize-main.png";
import IncrementDecrementBtn from "@/app/components/incrementDecrementBtn";
import shoppingBag from "../../../../../../public/images/shopping-bag.png";
import shoppingCart from "../../../../../../public/images/shopping_cart_icon 1.png";
import itemDetailsBanner from "../../../../../../public/images/item-details-banner.png";
import Link from "next/link";


export default function ItemDetails() {

    return (
        <div>
            <div>
                <Image
                    src={itemDetailsBanner}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    alt="main logo image"
                />
            </div>
            <div className="w-full lg:w-4/5 mx-auto">
                <div className="flex-none lg:flex my-3 lg:my-10">
                    <div className="flex-1">
                        <Image
                            src={itemImg}
                            width={500}
                            height={200}
                            alt="main logo image"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="flex gap-2">
                            <h1 className="font-figtree text-[#1A1A1A] text-3xl font-semibold">Smart Freezer</h1>
                            <p className="p-2 text-[#FF7D29] bg-[#FDEEE9] rounded-3xl">In Stock</p>
                        </div>
                        <div className="flex gap-3 mt-6">
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
                            <p className="text-[#666666] ">4 Review</p>
                        </div>
                        <div className="py-6 border-b-2">
                            <p className="text-[#FF7D29] text-2xl font-medium">$17.28</p>
                        </div>
                        <div className="py-6">
                            <p className="text-[#1A1A1A] font-medium">Category: <span className="text-[#808080]">Freeze</span></p>
                        </div>
                        <p className="pb-6">
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
                        </p>
                        <div className="flex gap-3">
                            <div className="flex bg-white rounded-full">
                                <IncrementDecrementBtn />
                            </div>
                            <div className="w-96 bg-[#FF7D29] rounded-full flex gap-2 justify-center items-center">
                                <Link href="/categories/checkout">
                                    <button className="text-white text-poppins font-semibold">Checkout</button>
                                </Link>
                                <Image
                                    src={shoppingBag}
                                    width={20}
                                    height={20}
                                    alt="main logo image"
                                />
                            </div>
                            <div className="px-4 bg-[#DFE1E3] rounded-full flex justify-center items-center">
                                <Image
                                    src={shoppingCart}
                                    width={25}
                                    height={25}
                                    alt="main logo image"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-3 lg:my-20">
                    <h1 className="text-[#232323] text-3xl font-bold font-figtree mb-3">Customer Feedback</h1>
                    <div className="w-full lg:w-3/4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
            </div>
        </div>
    );
}