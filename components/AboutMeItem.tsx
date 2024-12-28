import { IconType } from "react-icons";

interface AboutMeItemProps {
    title: string;
    text: React.ReactNode;
    icon: IconType;
}

const AboutMeItem: React.FC<AboutMeItemProps> = ({ title, text, icon: Icon }) => {
    return (
        <div className="flex flex-row items-center w-full my-5 space-x-7 md:w-1/2 lg:px-5">
            <div className="flex flex-col items-center justify-center w-8 h-8 rounded-lg ">
                <Icon className="w-8 h-8 fill-gray-400" />
            </div>
            <div className="flex flex-col items-start justify-start pr-0 ">
                <div className="relative">
                    <h3 className="mb-3 text-xl font-semibold text-white after:w-full">
                        {title}
                    </h3>
                    <div className="absolute w-[calc(100%+0.6rem)] h-[2px] bg-gray-400 rounded-md bottom-[0.6rem] left-[-0.3rem] opacity-30"></div>
                </div>
                <p className="text-gray-400 text-md">{text}</p>
            </div>
        </div>
    );
};

export default AboutMeItem;

