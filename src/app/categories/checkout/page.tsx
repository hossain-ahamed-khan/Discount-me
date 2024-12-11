import Image from "next/image";
import checkoutBanner from "../../../../public/images/checkout-banner.png";
import frizeImg from "../../../../public/images/frize-main.png";
import ModalBtn from "@/app/components/modalBtn";

export default function Checkout() {
    return (
        <div>
            <div>
                <Image
                    src={checkoutBanner}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    alt="main logo image"
                />
            </div>

            <div className="w-full lg:w-4/5 mx-auto my-3 lg:my-10">
                <h1 className="text-3xl text-[#1A1A1A] font-bold my-5">Billing Information</h1>
                <div className="flex-none lg:flex gap-3 my-3 lg:my-6">
                    <div className="w-full lg:w-3/4 font-poppins">

                        <div className="flex-none lg:flex justify-between gap-3">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1A1A1A] font-semibold">First name</span>
                                </div>
                                <input type="text" placeholder="Your first name" className="input input-bordered w-full bg-white border" />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1A1A1A] font-semibold">Last name</span>
                                </div>
                                <input type="text" placeholder="Your last name" className="input input-bordered w-full bg-white border" />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1A1A1A] font-semibold">Company name</span>
                                </div>
                                <input type="text" placeholder="Company name" className="input input-bordered w-full bg-white border" />
                            </label>
                        </div>

                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1A1A1A] font-semibold">Street Address</span>
                                </div>
                                <input type="text" placeholder="Your first name" className="input input-bordered w-full bg-white border" />
                            </label>
                        </div>

                        <div className="flex-none lg:flex gap-5 my-5">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1A1A1A] font-semibold">Country / Region</span>
                                </div>
                                <select className="bg-white h-12">
                                    <option value="volvo">Select</option>
                                    <option value="volvo">Bangladesh</option>
                                    <option value="saab">Finland</option>
                                    <option value="opel">Denmark</option>
                                    <option value="audi">Australia</option>
                                </select>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1A1A1A] font-semibold">States</span>
                                </div>
                                <select className="bg-white h-12">
                                    <option value="volvo">Select</option>
                                    <option value="volvo">Dhaka</option>
                                    <option value="saab">Texas</option>
                                    <option value="opel">Mishigan</option>
                                    <option value="audi">Alaska</option>
                                </select>
                            </label>
                        </div>

                        <div className="flex-none lg:flex gap-5">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1A1A1A] font-semibold">Email</span>
                                </div>
                                <input type="text" placeholder="Email Address" className="input input-bordered w-full bg-white border" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1A1A1A] font-semibold">Phone</span>
                                </div>
                                <input type="text" placeholder="Phone number" className="input input-bordered w-full bg-white border" />
                            </label>
                        </div>
                    </div>


                    <div className="w-full lg:w-1/4 bg-white rounded-md p-4 text-[#1A1A1A] font-poppins border">
                        <h1 className="text-[#1A1A1A] text-xl font-semibold my-3">Order Summery</h1>
                        <div className="flex justify-between p-3 border-b-2">
                            <div className="flex gap-3">
                                <Image
                                    src={frizeImg}
                                    width={30}
                                    height={30}
                                    alt="main logo image"
                                />
                                <p>Freezer</p>
                                <p>XL</p>
                            </div>
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
                        <div className="my-3 space-y-2">
                            <h1 className="text-[#1A1A1A] text-xl font-semibold">Payment Method</h1>
                            <div className="form-control">
                                <label className="flex gap-2 cursor-pointer">
                                    <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked />
                                    <span className="label-text text-[#1A1A1A]">Cash on Delivery</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="flex gap-2 cursor-pointer">
                                    <input type="radio" name="radio-10" className="radio checked:bg-red-500" />
                                    <span className="label-text text-[#1A1A1A]">Paypal</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <ModalBtn />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}