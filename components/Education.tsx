import { useRef } from "react";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import Headline2 from "./Headline2";

const Education = () => {
    const educationRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full bg-background2" ref={educationRef} id="education">
            <div className="container flex flex-row items-center justify-between px-4 py-16 mx-auto lg:px-40 ">
                <div className="flex flex-col">
                    <Headline2 text="Education" />
                    <ol className="mx-3 mt-12 sm:flex">
                        <EducationItem
                            school="PRAGATI H S SCHOOL"
                            period="September 2011 - June 2018"
                            description="Completed my higher secondary and secondary education"
                            delay={0.2}
                        />
                        <EducationItem
                            school="RGPV"
                            period="September 2018 - July 2021"
                            description="I successfully completed my degree from RGPV University, specializing in the IT branch of B.Tech."
                            delay={0.4}
                        />
                        <EducationItem
                            school="Code Better"
                            period="September 2021 - July 2022"
                            description="I completed my React and Angular internship at Code Batter."
                            delay={0.6}
                        />
                    </ol>
                </div>
            </div>
        </div>
    );
};

interface EducationItemProps {
    school: string;
    period: string;
    description: string;
    delay: number;
}

const EducationItem: React.FC<EducationItemProps> = ({
    school,
    period,
    description,
    delay,
}) => {
    return (
        <li className="relative flex-1 mb-6 sm:mb-0">
            <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-neonGreen sm:ring-8 ring-gray-800 shrink-0">
                    <HiAcademicCap className="fill-neonGreen-900" />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <motion.div
                className="mt-3 sm:pr-8"
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, translateY: 30 }}
                transition={{
                    duration: 0.2,
                    delay: delay,
                }}
            >
                <h3 className="text-lg font-semibold text-white">{school}</h3>
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

export default Education;
