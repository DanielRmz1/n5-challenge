import { createContext } from "react";

interface LanguageContext {
	language: string;
}

export default createContext<LanguageContext>({ language: "" });
