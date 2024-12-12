export default function Home() {
    return (
        <div className="w-full bg-white rounded-lg shadow-md my-5 lg:my-10">
            <div className="flex justify-between p-3 lg:p-6 border-b-2 border-[#E6E6E6]">
                <h1 className="text-2xl font-medium text-[#1A1A1A]">Recet Order History</h1>
                <button className="text-[#EA5326] font-medium">View All</button>
            </div>

            <div className="w-full flex-none lg:flex p-5 lg:p-10 gap-5">
                <div className="w-full lg:w-4/6 flex-none lg:flex border-2 border-[#E6E6E6] rounded-lg">
                    <div className="border-r-2 border-[#E6E6E6]">
                        <h3 className="text-[#999999] text-lg py-3 px-6 font-poppins border-b-2 border-[#E6E6E6]">Billing Address</h3>
                        <div className="p-6 text-[#1A1A1A]">
                            <h1 className="text-xl font-semibold">Dainne Russell</h1>
                            <p className="text-[#666666] pb-4 pt-2">4140 Parker Rd. Allentown, New Mexico 31134</p>
                            <p>Email</p>
                            <p className="font-semibold">dainne.ressell@gmail.com</p>
                            <p>Phone</p>
                            <p className="font-semibold">(671) 555-0110</p>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-[#999999] text-lg py-3 px-6 font-poppins border-b-2 border-[#E6E6E6]">Billing Address</h3>
                        <div className="p-6 text-[#1A1A1A]">
                            <h1 className="text-xl font-semibold">Dainne Russell</h1>
                            <p className="text-[#666666] pb-4 pt-2">4140 Parker Rd. Allentown, New Mexico 31134</p>
                            <p>Email</p>
                            <p className="font-semibold">dainne.ressell@gmail.com</p>
                            <p>Phone</p>
                            <p className="font-semibold">(671) 555-0110</p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/3 border-2 border-[#E6E6E6] text-[#1A1A1A] rounded-lg">
                    <div className="flex gap-3 p-4 border-b-2 border-[#E6E6E6] justify-around">
                        <div>
                            <p>Order ID:</p>
                            <p className="font-semibold">#4152</p>
                        </div>
                        <div>
                            <p>Payment Method:</p>
                            <p className="font-semibold">Paypal</p>
                        </div>
                    </div>
                    <div className="p-4 px-6">
                        <div className="flex justify-between border-b-2 border-[#E6E6E6] pb-3">
                            <p>Subtotal:</p>
                            <p className="font-semibold">$365.00</p>
                        </div>
                        <div className="flex justify-between border-b-2 border-[#E6E6E6] py-3">
                            <p>Discount</p>
                            <p className="font-semibold">20%</p>
                        </div>
                        <div className="flex justify-between border-b-2 border-[#E6E6E6] py-3">
                            <p>Shipping</p>
                            <p className="font-semibold">Free</p>
                        </div>
                        <div className="flex justify-between py-3">
                            <p className="text-xl font-semibold">Total</p>
                            <p className="text-[#EB2926] font-semibold text-xl">$84.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}