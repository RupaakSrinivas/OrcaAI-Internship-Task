import { IoArrowBack } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className="w-full h-[48px] flex flex-row items-center justify-start gap-4">
            <p className="bg-zinc-300 rounded-md px-2 font-semibold flex flex-row items-center gap-2 hover:cursor-pointer">
               <IoArrowBack/> back
            </p>
            <p className=" font-semibold">
                Templates / Sales Effectivenes / BANT
            </p>
        </div>
    )
}