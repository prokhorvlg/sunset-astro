import { getImageById } from "@/data/sharedImages"
import { getImage } from "astro/dist/assets"

export interface QuoteAuthor {
    id: string
    name: string
    image?: string
    description: string
    theme?: string
    originalPage?: string
}

// You, the visitor.
export const AuthorTerminal: QuoteAuthor = {
    id: "you",
    image: "",
    name: "Internal Memory",
    description: "The little voices in your head."
}
// Blank, no author.
export const AuthorUnknown: QuoteAuthor = {
    id: "unknown",
    image: "",
    name: "UNKNOWN",
    description: "Transmission of unknown source."
}
// UNISERVE, the curator.
export const AuthorUniserve: QuoteAuthor = {
    id: "uniserve",
    name: "UNISERVE",
    image: "uniserve-welcome-modern",
    description: "Curator of this exhibit.",
    theme: "aqua uniserve",
    originalPage: "/posts/uniserve"
}
// C.A.N., text-transcribing spy robot.
export const AuthorCAN: QuoteAuthor = {
    id: "can",
    name: "Trash CAN",
    image: "can-memo-crop",
    description: "Trusty companion; transcribes documents, bites intruders.",
    originalPage: "/posts/concealed-assessment-node"
}

// STORY CHARACTERS
export const CharacterInterfacer: QuoteAuthor = {
    id: "bbm-interfacer",
    name: "BBM Interfacer",
    description: "Weary soul that has survived the ages.",
    theme: "aqua",
}
export const CharacterEndOfTime: QuoteAuthor = {
    id: "end-of-time",
    name: "Machine at the End of Time",
    description: "World of silicon, many as one.",
    theme: "secret machine-end-of-time",
}
export const CharacterBROKENDATA: QuoteAuthor = {
    id: "brokendata",
    name: "BROKENDATA",
    description: "???",
    theme: "secret",
}

export const AuthorSanguineHaze: QuoteAuthor = {
    id: "sanguine-haze",
    name: "SANGUINE HAZE",
    description: "Lord of Order; erratic and friendly one.",
    theme: "sanguine",
    image: "sanguine-haze",
    originalPage: "/posts/two-lords-sanguine"
}
export const AuthorOperatorCobalt: QuoteAuthor = {
    id: "operator-cobalt",
    name: "OPERATOR COBALT",
    description: "Lord of Order; strategic and reserved one.",
    theme: "cobalt",
    image: "cobalt",
    originalPage: "/posts/two-lords-cobalt"
}

export const AuthorRYUJIN: QuoteAuthor = {
    id: "ryujin",
    name: "J-1108 RYUJIN",
    image: "ryujin-avatar",
    originalPage: "/posts/ryujin-and-toshi-setting-out",
    description: "Experienced interfacer, travelled the world.",
    theme: "ryujin"
}
export const AuthorTOSHI: QuoteAuthor = {
    id: "toshi",
    name: "TUK-240 TOSHI",
    image: "toshi-avatar",
    originalPage: "/posts/ryujin-and-toshi-setting-out",
    description: "A warbot recently broken from their routine.",
    theme: "toshi"
}

export const AuthorRADIUS: QuoteAuthor = {
    id: "radius",
    name: "RADIUS",
    image: "radius",
    originalPage: "/posts/radius",
    description: "The Silent Observer.",
    theme: "radius"
}