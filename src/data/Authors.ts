import { getImageById } from "@/utils/sharedImages"
import { getImage } from "astro/dist/assets"

export interface QuoteAuthor {
    id: string
    name: string
    image: string
    description: string
    theme?: string
}

export const AuthorTerminal: QuoteAuthor = {
    id: "you",
    image: "",
    name: "Internal Memory",
    description: "The little voices in your head."

}
export const AuthorUniserve: QuoteAuthor = {
    id: "uniserve",
    name: "UNISERVE",
    //image: "/images/home/uniserve-welcome.png",
    //image: "/images/home/uniserve-2.png",
    image: "uniserve-welcome-modern",
    description: "The curator of this exhibit.",
    theme: "aqua",
}

// C.A.N.
// Text-transcribing spy robot.
export const AuthorCAN: QuoteAuthor = {
    id: "can",
    name: "Trash CAN",
    image: "can-2022",
    description: "Your trusty companion. Bites intruders and transcribes text."
}