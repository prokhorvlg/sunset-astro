export interface QuoteAuthor {
    id: string
    name: string
    image: string
    description: string
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
    image: "/images/home/uniserve-welcome.png",
    description: "The curator of this exhibit."
}

// C.A.N.
// Text-transcribing spy robot.
export const AuthorCAN: QuoteAuthor = {
    id: "can",
    name: "Concealed Assessment Node",
    image: "/images/home/uniserve-present.png",
    description: "Your trusty transcription companion."
}