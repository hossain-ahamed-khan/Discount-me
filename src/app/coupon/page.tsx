
const Coupon = () => {
    return (
        <div className="w-full lg:w-4/5 mx-auto">
            <h1 className="text-3xl text-[#000000] font-bold font-urbanist my-6">Coupon Cards</h1>

            <div className="relative">
                <div className="absolute top-14 lg:top-20 -left-8 h-20 w-20 bg-[#FDFDFD] rounded-full border-r-4">
                </div>
                <div className="w-full flex items-center border shadow-xl my-10 p-6 rounded-3xl bg-[#FDFDFD]">
                    <div className="w-2/5 border-dashed border-r-2 pl-12 lg:pl-32 space-y-3">
                        <p className="text-[#00B047] text-xl lg:text-5xl font-bold pt-10">Price</p>
                        <p className="text-[#FF7D29] text-xl lg:text-5xl font-bold pb-10">$ 10.99</p>
                    </div>

                    <div className="w-3/5 pl-10 lg:pl-20 space-y-3">
                        <h1 className="text-xl lg:text-5xl font-bold text-[#1D242D]">Single Discount</h1>
                        <p className="text-sm lg:text-xl font-medium">Customer takes 6 discount</p>
                    </div>
                </div>
                <div className="absolute top-14 lg:top-20 -right-8 h-20 w-20 bg-[#FDFDFD] rounded-full border-l-4">
                </div>
            </div>


            <div className="relative">
                <div className="absolute top-14 lg:top-20 -left-8 h-20 w-20 bg-[#FDFDFD] rounded-full border-r-4">
                </div>
                <div className="w-full flex items-center border shadow-xl my-10 p-6 rounded-3xl">
                    <div className="w-2/5 border-dashed border-r-2 pl-12 lg:pl-32 space-y-3">
                        <p className="text-[#00B047] text-xl lg:text-5xl font-bold pt-10">Price</p>
                        <p className="text-[#FF7D29] text-xl lg:text-5xl font-bold pb-10">$ 34.99</p>
                    </div>
                    <div className="w-3/5 pl-10 lg:pl-20 space-y-3">
                        <h1 className="text-xl lg:text-5xl font-bold text-[#1D242D]">Unlimited Discount</h1>
                        <p className="text-sm lg:text-xl font-medium">Customer get unlimited discount in one month</p>
                    </div>
                    <div className="absolute top-14 lg:top-20 -right-8 h-20 w-20 bg-[#FDFDFD] rounded-full border-l-4">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coupon;
