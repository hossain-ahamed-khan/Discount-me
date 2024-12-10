import Image from "next/image";
import bannerImg from "../../../../public/images/banner-signin.png";

export default function SignIn() {
  return (
    <div>
      <div>
        <Image
          src={bannerImg}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt="main logo image"
        />
      </div>

      <div className="w-full lg:w-2/5 mx-auto p-5 shadow-lg my-20 py-10 rounded-xl space-y-6">
        <h1 className="text-4xl font-figtree text-[#1A1A1A] font-semibold text-center py-5">Sign In</h1>
        <div>
          <input type="text" placeholder="Email" className="bg-white w-full border-2 p-3 rounded-xl" />
        </div>
        <div>
          <input type="text" placeholder="Password" className="bg-white w-full border-2 p-3 rounded-xl" />
        </div>
        <div className="flex justify-between text-[#666666]">
          <div className="flex gap-2">
            <input type="checkbox" className="checkbox" />
            <p>Remember me</p>
          </div>
          <div>
            <button>Forgot Password</button>
          </div>
        </div>
        <button className="text-white bg-[#FF7D29] hover:bg-[#c2570f] w-full p-4 rounded-full font-semibold">Login</button>
        <div className="text-[#666666] flex justify-center gap-1">
          <p>Don&apos;t have account?</p>
          <button className="text-[#1A1A1A] font-poppins font-medium">Register</button>
        </div>
      </div>
    </div>
  );
}