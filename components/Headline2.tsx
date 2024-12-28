import { motion } from "framer-motion";

interface Headline2Props {
    text: string;
}

const Headline2: React.FC<Headline2Props> = ({ text }) => {
    return (
        <motion.h2
            className="text-3xl"
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            initial={{ translateX: -30, opacity: 0 }}
            transition={{
                duration: 0.2,
                delay: 0.03,
            }}
        >
            <span className="text-lg text-gray-400 select-none opacity-40">
                &lt;li&gt;
            </span>
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonGreen to-neonGreen">
                {text}
            </span>
            <span className="text-lg text-gray-400 select-none opacity-40">
                &lt;/li&gt;
            </span>
        </motion.h2>
    );
};

export default Headline2;

