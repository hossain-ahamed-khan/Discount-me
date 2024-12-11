import milkImg from "../../../../../public/images/milk.png";
import tshirtImg from "../../../../../public/images/t-shirt.png";
import bookImg from "../../../../../public/images/book.png";
import riceImg from "../../../../../public/images/rice.png";
import Image from "next/image";
import ItemCard from "@/app/components/itemCard";

export default function Items() {
    return (
        <div className="w-full lg:w-4/5 mx-auto">
            <div className="grid grid-cols-4 lg:grid-cols-8 my-3">
                <Image
                    src={milkImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={milkImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={milkImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={tshirtImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={tshirtImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={bookImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={bookImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
                <Image
                    src={riceImg}
                    width={80}
                    height={80}
                    alt="main logo image"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-5">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    );
}