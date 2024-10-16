import { animate, motion } from "framer-motion"

// Variants
const stairAniamtion = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculete the reverse index fot staggred delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
    <>
    {/* render 6 motion divs, each representing a step of the stairs */}
        {[...Array(6)].map((_, index)=> {
            return(
                <motion.div key={index} variants={stairAniamtion} initial="initial" animate="animate" exit="exit"
                transition={{
                    duration: 0.4,
                    delay: reverseIndex(index) *  0.1 ,
                    ease: 'easeInOut',
                }}
                className="h-full w-full bg-white relative"
                />
            );
        })}

    </>
    )
}

export default Stairs