import Image from "next/image";
import aboutBanner from "../../../../public/images/aboutus-banner.png";

export default function AboutUs() {
    return (
        <div>
            <div>
                <Image
                    src={aboutBanner}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    alt="main logo image"
                />
            </div>

            <div className="w-full lg:w-4/5 mx-auto my-4 lg:my-10 space-y-5">
                <h1 className="text-3xl lg:text-5xl font-roboto font-bold text-[#232323]">About us</h1>
                <p className="text-[#758888] text-sm lg:text-xl">Welcome to [Your Company Name]. Before using our logo design service, please carefully review the following Terms and Conditions, as they govern the contractual relationship between you (the Client) and [Your Company Name] (the Service Provider). By using our logo design service, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety.</p>

                <h1 className="text-2xl lg:text-4xl font-roboto font-bold text-[#232323]">→ Scope of Service</h1>
                <p className="text-[#758888] text-sm lg:text-xl">a. [Your Company Name] will provide custom logo design services to the Client based on the specifications provided by the Client.
                    b. <br /> The Service Provider will deliver the final logo design in the agreed-upon format upon completion and full payment of the service fee.</p>

                <h1 className="text-2xl lg:text-4xl font-roboto font-bold text-[#232323]">→ Copyright and Ownership</h1>
                <p className="text-[#758888] text-sm lg:text-xl">a. The Client acknowledges that all rights, title, and ownership of the final logo design will belong solely to the Client after full payment has been received by the Service Provider.
                    <br />
                    b. Final payment ensures that only the agreed design becomes the client&amp;s property. Any previous ideas/concepts remain the property of The Service Provider, unless any prior agreement has been made.
                    <br />
                    c. The Service Provider reserves the right to showcase the completed logo design in their portfolio or promotional materials.</p>

            </div>
        </div>
    );
}