import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

export default function Navigation() {
    return (
        <nav className="h-96 bg-[#FFFFFF] text-[#1A1A1A] border rounded-lg my-3 lg:my-10 shadow-md">
            <div className="flex flex-col justify-start gap-3">
                <h1 className="text-xl font-semibold py-2 px-10 mt-3">Navigation</h1>
                <div className="">
                    <Link href="/profile/dashboard">
                        <div className="flex gap-2 items-center px-10 py-3">
                            <MdDashboard />
                            <h3>Dashboard</h3>
                        </div>
                    </Link>

                    <Link href="/profile/order-history">
                        <div className="flex gap-2 items-center px-10 py-3">
                            <GoHistory />
                            <h3>Order History</h3>
                        </div>
                    </Link>

                    <Link href="/profile/settings">
                        <div className="flex gap-2 items-center px-10 py-3">
                            <IoSettingsOutline />
                            <h3>Settings</h3>
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="flex gap-2 items-center px-10 py-3">
                            <CiLogout />
                            <h3>Log-out</h3>
                        </div>
                    </Link>

                </div>
            </div>
        </nav>
    );
}