"use client";

import useAlert from "@/hooks/useAlert";
import FailureAlert from "./Failure";
import SuccessAlert from "./Success";

const Alert = () => {
    const { text, type } = useAlert();

    const isAlert = text && type;
    if (isAlert) {
        return (
            <div>
                {type === 'success' && <SuccessAlert text={text} />}
                {type === 'failure' && <FailureAlert text={text} />}
            </div>
        )
    } else return null;
}

export default Alert;