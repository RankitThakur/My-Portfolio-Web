import { motion } from "framer-motion";
import { HiUser, HiAcademicCap, HiStar } from "react-icons/hi";
import Headline2 from "./Headline2";
import AboutMeItem from "./AboutMeItem";
import CustomLink from "./Link";

const AboutMe = () => {
    return (
        <div className="relative z-10 w-full bg-background2">
            <motion.div
                className="container px-4 pt-10 mx-auto lg:px-40"
                initial={{ opacity: 0, translateY: -30 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -30 }}
                transition={{ duration: 0.2, delay: 0.1 }}
            >
                <Headline2 text="Who am I?" />
                <div className="relative flex flex-row flex-wrap justify-between py-10 sm:py-16">
                    <AboutMeItem
                        text="My name is Rankit Singh Thakur, and I am a Full Stack Web Developer with over two years of experience in building web applications. I specialize in React and Angular development and am proficient in both front-end and back-end technologies."
                        title="About Me"
                        icon={HiUser}
                    />
                    <AboutMeItem
                        text={
                            <>
                                I have successfully graduated from the{" "}
                                <CustomLink href="https://www.rgpv.ac.in/">RGPV</CustomLink>{" "}
                                in the IT branch of B.Tech, Bhopal.
                                <CustomLink href="#education">See more</CustomLink>
                            </>
                        }
                        title="School"
                        icon={HiAcademicCap}
                    />
                    <AboutMeItem
                        text="I have been active in a number of sports since I was 6 years old. I have played cricket, table tennis, etc."
                        title="Hobbies"
                        icon={HiStar}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default AboutMe;
