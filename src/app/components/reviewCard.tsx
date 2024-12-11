import Image from "next/image";
import proImg from "../../../public/images/pro-img.png"

export default function ReviewCard() {
    return (
        <div className="flex justify-between py-3 border-b-2">
            <div>
                <div className="flex gap-3">
                    <Image
                        src={proImg}
                        width={50}
                        height={50}
                        alt="profile image"
                    />
                    <div>
                        <h3 className="font-poppins text-[#232323] font-medium text-xl">Kristin Watson</h3>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                <div className="py-3">
                    <p>200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Choice, Bok Choi, from USA</p>
                </div>
            </div>
            <div>
                <p>2 min ago</p>
            </div>
        </div>
    );
}