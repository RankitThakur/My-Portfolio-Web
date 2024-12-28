import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const ProjectsCTA = () => {
    return (
        <div
            className="w-full"
            style={{
                background: "linear-gradient(90deg, green 0%, green 100%)",
            }}
        >
            <div className="container px-10 py-10 mx-auto sm:flex sm:flex-row sm:items-center sm:justify-between lg:px-40">
                <motion.div
                    className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight"
                    whileInView={{ opacity: 1, translateX: 0 }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, translateX: -30 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                >
                    <span className="block">Interest aroused?</span>
                    <span className="block font-bold text-neonGreen">
                        See all of my projects
                    </span>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, translateX: 0 }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, translateX: 30 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                >
                    <Link href="/projects" passHref>
                        <a className="inline-flex flex-row items-center justify-center px-3 py-2 mt-6 space-x-2 text-base font-bold text-black border border-transparent rounded-md sm:px-5 sm:py-3 sm:mt-0 bg-neonGreen hover:bg-neonGreen">
                            <HiArrowRight className="text-xl" />
                            <span>Get inspired</span>
                        </a>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectsCTA;
