"use client"

import Image from "next/image";
import successImg from "../../../public/images/success-sign.png";
import qrCode from "../../../public/images/Qr Code.png";
import googleImg from "../../../public/images/google-play-logo.png";
import appStoreImg from "../../../public/images/apple-store-logo.png";

export default function ModalBtn() {
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="bg-[#EA5326] w-full mt-3 p-2 rounded-full text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Place Order</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex justify-center">
                        <Image
                            src={successImg}
                            width={60}
                            height={60}
                            alt="success image"
                        />
                    </div>
                    <h1 className="font-roboto font-bold text-[#1D242D] text-center text-xl py-3">Order Successfully</h1>
                    <hr />
                    <p className="w-3/4 mx-auto text-center text-xs py-3">If you want to tracking your order please install our app from
                        Play store or App store</p>
                    <h1 className="text-2xl font-semibold text-center">Download App</h1>
                    <div className="flex justify-center py-3 gap-3">
                        <div>
                            <Image
                                src={qrCode}
                                width={100}
                                height={100}
                                alt="success image"
                            />
                        </div>
                        <div className="space-y-3">
                            <Image
                                src={googleImg}
                                width={120}
                                height={60}
                                alt="success image"
                            />
                            <Image
                                src={appStoreImg}
                                width={120}
                                height={60}
                                alt="success image"
                            />
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
}