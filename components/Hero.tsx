import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="container relative px-4 pt-12 pb-24 mx-auto lg:px-40 sm:pb-32 sm:pt-20">
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                transition={{ duration: 0.4 }}
                animate={{ opacity: 1, translateX: 0 }}
            >
                <h1 className="font-black text-[3.8rem] md:text-[5rem] tracking-tight leading-[1.2] relative">
                    Hello,
                    <br />
                    I&apos;m{" "}
                    <motion.div
                        initial={{ rotateZ: 0 }}
                        animate={{ rotateZ: 6 }}
                        transition={{
                            duration: 0.13,
                            delay: 0.7,
                            default: { ease: "easeInOut" },
                        }}
                        className="relative z-30 inline-block"
                    >
                        <div className="inline-block mx-0 my-6 transition-all rounded-lg sm:mx-2 bg-background2">
                            <span className="px-2 py-0 sm:px-6 sm:py-2 text-[3rem] md:text-[4.5rem] text-transparent bg-clip-text bg-gradient-to-r from-neonGreen to-neonGreen">
                                &lt;Rankit /&gt;
                            </span>
                        </div>
                    </motion.div>
                </h1>
                <div className="relative z-30 inline-block mt-10">
                    <Link href="/contact" passHref>
                        <a className="flex flex-row items-center px-3 py-2 space-x-2 text-sm font-bold border-2 rounded-md cursor-pointer sm:space-x-3 sm:px-5 sm:py-2 md:text-lg bg-background border-neonGreen">
                            <HiMail className="fill-neonGreen" />
                            <span className="text-neonGreen">Contact me</span>
                        </a>
                    </Link>
                </div>
            </motion.div>
            <div
                style={{
                    textShadow:
                        "-3px -3px 0 #fff,3px -3px 0 #fff, -3px 3px 0 #fff, 3px 3px 0 #fff",
                }}
                className="rotate-90 right-[-3rem] sm:right-[10rem] sm:rotate-0 select-none absolute opacity-[2%] top-0 font-black text-background text-[22rem] sm:text-[28rem]  z-[0] leading-tight"
            >
                DEV
            </div>
        </div>
    );
};

export default Hero;
