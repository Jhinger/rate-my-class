"use client";

import useAlert from "@/hooks/useAlert";
import FailureAlert from "./Failure";
import SuccessAlert from "./Success";
import { motion, AnimatePresence } from 'framer-motion';

const Alert = () => {
    const { text, type } = useAlert();

    const isAlert = text && type;
    return (
        <AnimatePresence>
            {isAlert
                ?
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.35 }}
                    >
                        {type === 'success' && <SuccessAlert text={text} />}
                        {type === 'failure' && <FailureAlert text={text} />}
                    </motion.div>
                : null
            }
        </AnimatePresence>
    )
}

export default Alert;