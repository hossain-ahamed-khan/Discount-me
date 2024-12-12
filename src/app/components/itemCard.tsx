import Image from "next/image";
import item1 from "../../../public/images/item-1.png";
import Link from "next/link";

export default function ItemCard() {
    return (
        <div>
            <Link href="/restaurants/1/items/1">
                <div className="card card-compact shadow-xl">
                    <figure>
                        <Image
                            src={item1}
                            width={400}
                            height={200}
                            alt="item image"
                        />
                    </figure>
                    <div className="p-5">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="font-urbanist font-semibold text-xl text-[#1D242D]">Long Sleeve T-Shirt</h1>
                                <p className="text-[#494C61]">Delicouse tackos, appetizing...</p>
                            </div>
                            <p className="text-[#1D242D] font-bold text-xl">$45.5</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}