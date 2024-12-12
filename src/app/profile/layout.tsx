import ProfileBanner from "../components/profile/banner";
import Navigation from "../components/profile/navigation";

export default function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <ProfileBanner />
            <div className="flex w-4/5 mx-auto gap-10">
                <Navigation />
                {children}
            </div>
        </div>
    );
}