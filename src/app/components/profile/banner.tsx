import Image from "next/image";
import profileBanner from "../../../../public/images/profile-banner.png";

export default function ProfileBanner() {
    return (
        <div>
            <div>
                <Image
                    src={profileBanner}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    alt="main logo image"
                />
            </div>

        </div>
    );
}