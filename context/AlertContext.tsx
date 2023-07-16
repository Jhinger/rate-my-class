"use client";

import { createContext, useState } from "react";
import { ALERT_TIME } from "@/constants";

type AlertProviderProps = {
    children: React.ReactNode;
}

type AlertTypes = 'success' | 'failure';

const initialState = {
    text: '',
    type: ''
}

const AlertContext = createContext({
	...initialState,
	setAlert: (text: string, type: AlertTypes) => {},
});
  
export const AlertProvider = ({ children }: AlertProviderProps) => {
    const [text, setText] = useState('');
    const [type, setType] = useState('');
  
    const setAlert = (text: string, type: AlertTypes) => {
		setText(text);
		setType(type);
	
		setTimeout(() => {
			setText('');
			setType('');
		}, ALERT_TIME);
    };
  
    return (
		<AlertContext.Provider
			value={{
				text,
				type,
				setAlert,
			}}
    	>
      		{children}
    	</AlertContext.Provider>
    )
};
  
  export default AlertContext;
  
