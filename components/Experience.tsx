import { motion } from "framer-motion";
import { HiCode } from "react-icons/hi";
import Headline2 from "./Headline2";
import CustomLink from "./Link";

const Experience = () => {
    return (
        <div className="w-full bg-background2">
            <div className="container flex flex-row items-center justify-between px-4 py-16 mx-auto lg:px-40">
                <div className="flex flex-col w-full">
                    <Headline2 text="Experience" />
                    <ol className="mx-3 mt-12 space-y-10">
                        <ExperienceItem
                            company="Shriffle technologies"
                            period="Jun 2022 - Current"
                            description={
                                <>
                                    I've been working as Frontend developer at Shriffle Software
                                    Solutions &nbsp;
                                    <CustomLink href="https://www.shriffle.com/">
                                        View more
                                    </CustomLink>
                                </>
                            }
                        />
                        {/* Add more ExperienceItem components here for additional work experiences */}
                    </ol>
                </div>
            </div>
        </div>
    );
};

interface ExperienceItemProps {
    company: string;
    period: string;
    description: React.ReactNode;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    company,
    period,
    description,
}) => {
    return (
        <li className="relative flex-1">
            <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-neonGreen sm:ring-8 ring-gray-800 shrink-0">
                    <HiCode className="w-4 h-4 text-background" />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <motion.div
                className="mt-3 sm:pr-8"
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, translateY: 30 }}
                transition={{ duration: 0.2, delay: 0.2 }}
            >
                <h3 className="text-lg font-semibold text-white">{company}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {period}
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    {description}
                </p>
            </motion.div>
        </li>
    );
};

export default Experience;

