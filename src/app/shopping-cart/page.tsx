import Image from "next/image";
import shoppingCartBanner from "../../../public/images/shopping-cart-banner.png";
import frizeImg from "../../../public/images/frize-main.png";
import tvImg from "../../../public/images/TV main.png";
import IncrementDecrementBtn from "@/app/components/incrementDecrementBtn";
import Link from "next/link";

export default function ShoppingCart() {
    return (
        <div>
            <div>
                <Image
                    src={shoppingCartBanner}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    alt="main logo image"
                />
            </div>

            <div className="w-full lg:w-4/5 mx-auto">
                <h1 className="text-3xl text-[#1A1A1A] font-bold my-5">My Shopping Cart</h1>
                <div className="flex-none lg:flex gap-3 my-3 lg:my-6">
                    <div className="w-full lg:w-3/4 bg-white rounded-md border text-[#1A1A1A]">
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="bg-[#F2F2F2] text-[#4D4D4D] border-none">
                                        <th>PRODUCT</th>
                                        <th>PRICE</th>
                                        <th>QUANTITY</th>
                                        <th>SUBTOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="border-none text-[#333333]">
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squire h-16 w-16">
                                                        <Image
                                                            src={frizeImg}
                                                            width={100}
                                                            height={100}
                                                            alt="product image"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Hart Hagerty</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            $14.00
                                        </td>
                                        <td className="h-10 w-20">
                                            <IncrementDecrementBtn />
                                        </td>
                                        <td>
                                            $14.00
                                        </td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className="border-none text-[#333333]">
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squire h-16 w-16">
                                                        <Image
                                                            src={tvImg}
                                                            width={100}
                                                            height={100}
                                                            alt="product image"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Brice Swyre</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            $14.00
                                        </td>
                                        <td className="h-10 w-20">
                                            <IncrementDecrementBtn />
                                        </td>
                                        <td>
                                            $14.00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="w-full flex justify-between my-3 px-3 text-[#4D4D4D]">
                                <button className="bg-[#F2F2F2] rounded-full py-2 px-4">Return to shop</button>
                                <button className="bg-[#F2F2F2] rounded-full py-2 px-4">Update Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/4 bg-white rounded-md p-4 text-[#1A1A1A] font-poppins border">
                        <h1 className="text-xl font-medium">Cart Total</h1>
                        <div className="flex justify-between p-3 border-b-2">
                            <p>Subtotal:</p>
                            <p className="font-semibold">$84.00</p>
                        </div>
                        <div className="flex justify-between p-3 border-b-2">
                            <p>Shipping:</p>
                            <p className="font-semibold">Free</p>
                        </div>
                        <div className="flex justify-between p-3">
                            <p>Total:</p>
                            <p className="font-semibold">$84.00</p>
                        </div>
                        <Link href="/categories/checkout">
                            <button className="bg-[#EA5326] w-full mt-3 p-2 rounded-full text-white">Proceed to checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}