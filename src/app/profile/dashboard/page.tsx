import Image from "next/image";
import profilePhoto from "../../../../public/images/profile-photo.png";

export default function Dashboard() {
    return (
        <div className="w-full my-10">
            <div className="w-full flex-none lg:flex gap-10">
                <div className="bg-white rounded-lg flex-1 flex flex-col justify-center items-center py-3 lg:py-6 shadow-md">
                    <Image
                        src={profilePhoto}
                        width={100}
                        height={100}
                        alt="profile image"
                    />
                    <h3 className="text-[#1A1A1A] font-poppins font-medium text-xl mt-2">Dianne Russell</h3>
                    <p className="text-[#808080] my-1">Customer</p>
                    <button className="text-[#EA5326] font-medium">Edit Profile</button>
                </div>
                <div className="flex-1 bg-white rounded-lg p-5 lg:p-10 shadow-md">
                    <p className="text-[#999999] mb-3">Billing Address</p>
                    <h1 className="text-[#1A1A1A] font-medium text-xl">Dainne Russell</h1>
                    <p className="text-[#666666] my-2">4140 Parker Rd. Allentown, New Mexico 31134</p>
                    <p className="text-[#1A1A1A]">dainne.ressell@gmail.com</p>
                    <p className="text-[#1A1A1A]">(671) 555-0110</p>
                    <button className="text-[#EA5326] mt-3 font-medium">Edit Address</button>
                </div>
            </div>

            <div className="w-full bg-white rounded-lg shadow-md mt-5 lg:mt-10">
                <div className="flex justify-between p-3 lg:p-6">
                    <h1 className="text-2xl font-medium text-[#1A1A1A]">Recet Order History</h1>
                    <button className="text-[#EA5326] font-medium">View All</button>
                </div>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className="bg-[#F2F2F2] text-[#4D4D4D] border-none">
                                    <th>ORDER ID</th>
                                    <th>DATE</th>
                                    <th>TOTAL</th>
                                    <th>STATUS</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-none text-[#333333]">
                                    <td>
                                        <p>#738</p>
                                    </td>
                                    <td>
                                        <p>8 Sep, 2020</p>
                                    </td>
                                    <td>
                                        <p>$135.00 (5 Products)</p>
                                    </td>
                                    <td>
                                        <p>Processing</p>
                                    </td>
                                    <td>
                                        <button className="text-[#EA5326] font-medium">View Details</button>
                                    </td>
                                </tr>

                                <tr className="border-none text-[#333333]">
                                    <td>
                                        <p>#738</p>
                                    </td>
                                    <td>
                                        <p>8 Sep, 2020</p>
                                    </td>
                                    <td>
                                        <p>$135.00 (5 Products)</p>
                                    </td>
                                    <td>
                                        <p>Processing</p>
                                    </td>
                                    <td>
                                        <button className="text-[#EA5326] font-medium">View Details</button>
                                    </td>
                                </tr>

                                <tr className="border-none text-[#333333]">
                                    <td>
                                        <p>#738</p>
                                    </td>
                                    <td>
                                        <p>8 Sep, 2020</p>
                                    </td>
                                    <td>
                                        <p>$135.00 (5 Products)</p>
                                    </td>
                                    <td>
                                        <p>Processing</p>
                                    </td>
                                    <td>
                                        <button className="text-[#EA5326] font-medium">View Details</button>
                                    </td>
                                </tr>

                                <tr className="border-none text-[#333333]">
                                    <td>
                                        <p>#738</p>
                                    </td>
                                    <td>
                                        <p>8 Sep, 2020</p>
                                    </td>
                                    <td>
                                        <p>$135.00 (5 Products)</p>
                                    </td>
                                    <td>
                                        <p>Processing</p>
                                    </td>
                                    <td>
                                        <button className="text-[#EA5326] font-medium">View Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    );
}
