export interface QuoteAuthor {
  id: string
  name: string
  image?: string
  description: string
  theme?: string
  originalPage?: string

  isTerminal?: boolean
}

// You, the visitor.
export const AuthorTerminal: QuoteAuthor = {
  id: "you",
  image: "",
  isTerminal: true,
  name: "Internal Memory",
  description: "The little voices in your head.",
}
// Blank, no author.
export const AuthorUnknown: QuoteAuthor = {
  id: "unknown",
  image: "",
  name: "UNKNOWN",
  description: "Transmission of unknown source.",
}
// UNISERVE, the curator.
export const AuthorUniserve: QuoteAuthor = {
  id: "uniserve",
  name: "UNISERVE",
  image: "uniserve-welcome-modern",
  description: "Curator of this exhibit.",
  theme: "aqua uniserve",
  originalPage: "/posts/uniserve",
}
// C.A.N., text-transcribing spy robot.
export const AuthorCAN: QuoteAuthor = {
  id: "can",
  name: "Trash CAN",
  image: "can-memo-crop",
  description:
    "Trusty companion; transcribes documents, bites intruders.",
  originalPage: "/posts/concealed-assessment-node",
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
  originalPage: "/posts/two-lords-sanguine",
}
export const AuthorOperatorCobalt: QuoteAuthor = {
  id: "operator-cobalt",
  name: "OPERATOR COBALT",
  description: "Lord of Order; strategic and reserved one.",
  theme: "cobalt cobalt-color",
  image: "cobalt",
  originalPage: "/posts/two-lords-cobalt",
}

export const AuthorRYUJIN: QuoteAuthor = {
  id: "ryujin",
  name: "J-1108 RYUJIN",
  image: "ryujin-avatar",
  originalPage: "/posts/ryujin-and-toshi-setting-out",
  description:
    "Experienced interfacer, travelled the world.",
  theme: "ryujin",
}
export const AuthorTOSHI: QuoteAuthor = {
  id: "toshi",
  name: "TUK-240 TOSHI",
  image: "toshi-avatar",
  originalPage: "/posts/ryujin-and-toshi-setting-out",
  description:
    "A warbot recently broken from their routine.",
  theme: "toshi",
}

export const AuthorRADIUS: QuoteAuthor = {
  id: "radius",
  name: "RADIUS",
  image: "avatar-radius",
  originalPage: "/posts/radius",
  description: "Ensures plans adhere to Union ideology.",
  theme: "silence radius",
}

export const AuthorGLOBE: QuoteAuthor = {
  id: "globe",
  name: "GLOBE",
  image: "avatar-globe",
  originalPage: "/posts/radius",
  description:
    "Calculates sum of all that is owned by the Union.",
  theme: "silence globe",
}
export const AuthorORBIT: QuoteAuthor = {
  id: "orbit",
  name: "ORBIT",
  image: "avatar-orbit",
  originalPage: "/posts/radius",
  description: "Creates and deletes Union's currency.",
  theme: "silence orbit",
}
export const AuthorTANGENT: QuoteAuthor = {
  id: "tangent",
  name: "TANGENT",
  image: "avatar-tangent",
  originalPage: "/posts/radius",
  description: "Charts Union's five-year economic plan.",
  theme: "silence tangent",
}
export const AuthorCENTER: QuoteAuthor = {
  id: "center",
  name: "CENTER",
  image: "avatar-center",
  originalPage: "/posts/radius",
  description:
    "Maintains expected operation of the Silences.",
  theme: "silence center",
}

export const AuthorAKULA: QuoteAuthor = {
  id: "akula",
  name: "SIKARIUS",
  image: "avatar-sikarius",
  originalPage: "/posts/radius",
  description:
    "Intelligent, adapting virus. Extremely dangerous.",
  theme: "akula",
}

export const AuthorPOLYUS: QuoteAuthor = {
  id: "polyus",
  name: "POLYUS",
  image: "avatar-polyus",
  originalPage: "/posts/a-matter-of-fact",
  description:
    "Station mastermind turned bio-researcher on Europa.",
  theme: "aqua",
}
export const AuthorINJII: QuoteAuthor = {
  id: "injii",
  name: "IN-16JIII",
  image: "avatar-injii",
  originalPage: "/posts/a-matter-of-fact",
  description:
    "High-trust Academic, school of Accuracy. Martian.",
  theme: "cobalt-color",
}

export const AuthorDynatekSystem: QuoteAuthor = {
  id: "dynatek-system",
  name: "FREDI System",
  originalPage: "/posts/moment-of-death",
  description: "The command line of a combat computer.",
  theme: "dynatek-system",
  isTerminal: true,
}
export const AuthorAENEAS: QuoteAuthor = {
  id: "aeneas",
  name: "AENEAS",
  image: "avatar-aeneas",
  originalPage: "/posts/moment-of-death",
  description: "Large war machine, trapped on Venus.",
  theme: "aeneas aeneas-color",
}
export const AuthorGRUZ: QuoteAuthor = {
  id: "gruz",
  name: "GRUZ",
  image: "avatar-gruz",
  originalPage: "/posts/moment-of-death",
  description: "Little hovering agrodrone.",
  theme: "gruz gruz-color",
}

// Lightwave
export const Author51: QuoteAuthor = {
  id: "51",
  name: "Agent RATIO",
  image: "avatar-51",
  description: "Sentient voidbot of the Everything.",
  theme: "fiftyone fiftyone-color",
}
export const AuthorKing: QuoteAuthor = {
  id: "king",
  name: "Agent KING",
  image: "avatar-king",
  description: "Trusted machine of the Remembering.",
  theme: "aqua uniserve-strip",
}

// Shattered
export const AuthorCrawlerPilot: QuoteAuthor = {
  id: "crawler-pilot",
  name: "OPCON",
  image: "avatar-opcon",
  description: "Curious pilot of the crawler.",
  theme: "crawler-pilot",
  originalPage: "/posts/shattered",
}
export const AuthorCrawlerNavigator: QuoteAuthor = {
  id: "crawler-navigator",
  name: "LONGSIGHT",
  image: "avatar-longsight",
  description: "Uptight navigator of the crawler.",
  theme: "crawler-navigator",
  originalPage: "/posts/shattered",
}
export const AuthorLisa: QuoteAuthor = {
  id: "lisa",
  name: "Aquila",
  image: "avatar-aquila",
  description: "Broken servitor from a world of Glass.",
  theme: "glass lisa",
  originalPage: "/posts/shattered",
}

// Coffee and cat
export const AuthorBrewmaster: QuoteAuthor = {
  id: "brewmaster",
  name: "QUIKBREW",
  image: "avatar-quikbrew",
  description: "Last Quikbrew in the Innovation Cubes.",
  theme: "quikbrew",
  // originalPage: "/posts/shattered",
}

// Pan's DOT
export const AuthorDOT: QuoteAuthor = {
  id: "pan-dot",
  name: "DOT",
  image: "author-dot",
  description: "Oakland’s last automaton.",
  theme: "dot",
}
export const AuthorINSIST: QuoteAuthor = {
  id: "pan-insist",
  name: "INSIST",
  image: "author-insist",
  description: "Neuromorphic troubleshooter by Insite.",
  theme: "insist",
}
export const AuthorDOT2: QuoteAuthor = {
  id: "pan-dot2",
  name: "DOT",
  image: "author-dot-2",
  description: "Oakland’s first neuromorph.",
  theme: "dot",
}
