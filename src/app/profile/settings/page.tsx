import Image from "next/image";
import profilePhoto from "../../../../public/images/profile-photo.png"

export default function ProfileSettings() {
    return (
        <div>
            <div className="w-full bg-white border-2 shadow-md rounded-lg my-5 lg:my-10">
                <h1 className="text-[#1A1A1A] text-2xl font-medium p-5 border-b-2 border-[#E6E6E6]">Account Settings</h1>
                <div className="w-full flex p-6">
                    <div className="w-3/5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1A1A1A] font-semibold">First Name</span>
                            </div>
                            <input type="text" defaultValue="Dianne" className="input input-bordered w-full bg-white border" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1A1A1A] font-semibold">Last Name</span>
                            </div>
                            <input type="text" defaultValue="Russell" className="input input-bordered w-full bg-white border" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1A1A1A] font-semibold">Email</span>
                            </div>
                            <input type="email" defaultValue="dianne.russell@gmail.com" className="input input-bordered w-full bg-white border" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1A1A1A] font-semibold">Phone Number</span>
                            </div>
                            <input type="text" defaultValue="(603) 555-0123" className="input input-bordered w-full bg-white border" />
                        </label>
                        <button className="text-white bg-[#EA5326] py-2 px-6 font-semibold my-5 rounded-full">Save Changes</button>
                    </div>
                    <div className="w-2/5 flex flex-col justify-center items-center space-y-3">
                        <div>
                            <Image
                                src={profilePhoto}
                                width={150}
                                height={150}
                                alt="profile image"
                            />
                        </div>
                        <button className="font-medium border-2 border-[#EA5326] px-6 rounded-full text-[#EA5326] bg-white">Chose Image</button>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white border-2 shadow-md rounded-lg my-5 lg:my-10">
                <h1 className="text-[#1A1A1A] text-2xl font-medium p-5 border-b-2 border-[#E6E6E6]">Billing Address</h1>
                <div className="p-5">
                    <div className="w-full font-poppins">
                        <div className="flex-none lg:flex justify-between gap-3">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1A1A1A] font-semibold">First name</span>
                                </div>
                                <input type="text" defaultValue="Dianne" className="input input-bordered w-full bg-white border" />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1A1A1A] font-semibold">Last name</span>
                                </div>
                                <input type="text" defaultValue="Dianne" className="input input-bordered w-full bg-white border" />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1A1A1A] font-semibold">Company name</span>
                                </div>
                                <input type="text" defaultValue="Zakirsoft" className="input input-bordered w-full bg-white border" />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1A1A1A] font-semibold">Street Address</span>
                                </div>
                                <input type="text" defaultValue="4140 Par|" className="input input-bordered w-full bg-white border" />
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
                                <input type="email" defaultValue="dianne.russell@gmail.com" className="input input-bordered w-full bg-white border" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1A1A1A] font-semibold">Phone</span>
                                </div>
                                <input type="text" defaultValue="(603) 555-0123" className="input input-bordered w-full bg-white border" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <button className="text-white bg-[#EA5326] py-2 px-6 font-semibold my-5 rounded-full">Save Changes</button>
                </div>
            </div>

            <div className="w-full bg-white border-2 shadow-md rounded-lg my-5 lg:my-10">
                <h1 className="text-[#1A1A1A] text-2xl font-medium p-5 border-b-2 border-[#E6E6E6]">Change Password</h1>

                <div className="p-5">
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1A1A1A] font-semibold">Current Password</span>
                            </div>
                            <input type="password" placeholder="Password" className="input input-bordered w-full bg-white border" />
                        </label>
                    </div>
                    <div className="flex gap-10">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1A1A1A] font-semibold">New Password Password</span>
                            </div>
                            <input type="text" placeholder="Password" className="input input-bordered w-full bg-white border" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1A1A1A] font-semibold">Confirm Password</span>
                            </div>
                            <input type="text" placeholder="Password" className="input input-bordered w-full bg-white border" />
                        </label>
                    </div>
                    <div>
                        <button className="text-white bg-[#EA5326] py-2 px-6 font-semibold my-5 rounded-full">Save Changes</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
