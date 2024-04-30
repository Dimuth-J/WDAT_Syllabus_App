import Image from "next/image";
import bgImage from "../../../public/assert/images/bg1.png";
import learn from "../../../public/assert/images/learn.png";
import Link from "next/link";

export default function Home() {
    return (

        <div className="w-full h-full grid grid-cols-2">
            <Image
                src={bgImage}
                fill
                alt="bg-image"
                className="absolute inset-0 w-full h-full object-cover opacity-100 z-[-10]"
            />
            <div className="relative">
                
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-black text-7xl mt-20 font-bold">NEXT JS</h1>
                    <p className="text-black px-10 py-5">Next.js is an open-source React framework for building efficient and scalable server-side rendered and statically generated web applications. It offers features like automatic code splitting, optimized performance, and simplified page routing</p>
                    <div className="flex flex-row gap-5 items-center justify-start w-full px-10">
                        <h6 className="text-black">More Info...</h6>
                        <Link href='/test'>
                            <button className="bg-blue-400 p-1 rounded-lg">Click Here</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className="relative mt-20 w-full h-full">
                <div className="bg-white rounded-lg shadow-lg overflow-hidde z">
                    <Image
                        src={learn}
                        fill
                        alt="learn-image"
                        className="w-full h-full object-contain opacity-100"
                    />
                </div>
            </div> */}

    </div>
    )
}