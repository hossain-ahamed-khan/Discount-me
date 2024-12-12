import Image from "next/image";
import foodImg from "../../../../public/images/pasta-img.png";
import Link from "next/link";

export default function ProductCard() {
    return (
        <Link href="/restaurants/1/items/1">
            <div>
                <Image
                    src={foodImg}
                    width={550}
                    height={100}
                    alt="food image"
                />
                <p className="font-figtree text-xl font-medium text-[#232323]">Skateboard Shoe</p>
                <p className="text-[#232323] ">$125</p>
            </div>
        </Link>
    );
}