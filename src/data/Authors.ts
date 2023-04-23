export interface QuoteAuthor {
    id: string
    name: string
    image: string
    description: string
    theme?: string
}

export const AuthorTerminal: QuoteAuthor = {
    id: "you",
    name: "Internal Memory",
    image: "",
    description: "The little voices in your head."

}
export const AuthorUniserve: QuoteAuthor = {
    id: "uniserve",
    name: "UNISERVE",
    //image: "/images/home/uniserve-welcome.png",
    image: "/images/home/Uniserve_2_Composition (3).png",
    description: "The curator of this exhibit.",
    theme: "aqua",
}

// C.A.N.
// Text-transcribing spy robot.
export const AuthorCAN: QuoteAuthor = {
    id: "can",
    name: "Trash CAN",
    image: "/images/home/can-2022.png",
    description: "Your trusty companion. Bites intruders and transcribes text."
}