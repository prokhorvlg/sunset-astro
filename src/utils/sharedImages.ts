export interface ImageArtist {
    id: string
    link: string
    name: string
    profilePic: string
}

const ArtistProkhor: ImageArtist = {
    id: 'prokhor',
    link: 'https://twitter.com/prokhorVLG',
    name: 'ProkhorVLG',
    profilePic: 'https://pbs.twimg.com/profile_images/1622668839036100617/GNEm5ReN_400x400.jpg'
}
const ArtistLarkine: ImageArtist = {
    id: 'larkine',
    link: 'https://twitter.com/_larkine',
    name: 'Larkine',
    profilePic: 'https://pbs.twimg.com/profile_images/1608746857521623041/_TXZ0DgS_400x400.jpg'
}

export interface ImageDetails {
    id: ImageId | string,
    src: string,
    alt?: string
    aspectRatio?: `${number}:${number}`
    width: number
    height: number
    artist?: ImageArtist
    caption?: string
    classes?: string
    quoteClasses?: string
    format?: string

    originalPost?: string


    borderColor?: string // Style applied to image border color in image gallery
}

export enum ImageId {
    Gordon = 'Gordon'
}

export const getImageById = (id: string) => {
    return Images.find((image) => image.id === id)
}

export const Images: ImageDetails[] = [
    // MAIN THUMBNAILS
    {
        id: 'micro-pc-screenie',
        src: '/images/meta/micro-pc-screenie.png',
        alt: 'MICRO Computer',
        width: 927,
        height: 496
    },
    // Sunset logo
    {
        id: 'sunset-initiative-logo',
        src: "/images/sunset-logo-itself.png",
        alt: "Logo of the Sunset Research Initiative",
        width: 514,
        height: 458//658
    },
    // PLANET MARBLES
    {
        id: 'planet-venus',
        src: "/images/planet-marbles/Venus.png",
        alt: "Venus, the hot jungle",
        width: 1200,
        height: 1200
    },
    {
        id: 'planet-mars',
        src: "/images/planet-marbles/Mars.png",
        alt: "Mars, the world of red sands",
        width: 1200,
        height: 1200
    },
    {
        id: 'planet-titan',
        src: "/images/planet-marbles/Titan.png",
        alt: "Titan, frigid moon of Saturn",
        width: 1200,
        height: 1200
    },
    // TITLE IMAGES
    {
        id: 'title-cassette',
        src: '/images/title-images/title-cassette.png',
        alt: 'Cassette that stores data',
        width: 624,
        height: 447
    },
    {
        id: 'title-space-race',
        src: '/images/title-images/title-space-race-4.png',
        alt: 'Rocket launching into the sky',
        width: 519,
        height: 432
    },
    {
        id: 'title-robots',
        src: '/images/title-images/title-robots.png',
        alt: 'Boxy robot looking at you',
        width: 420,
        height: 507
    },
    
    // UNISERVE
    {
        id: 'uniserve-present',
        src: "/images/home/uniserve-present.png",
        alt: "UNISERVE giving a present to a coworker",
        width: 2130,
        height: 1530,
        caption: "UNISERVE observes an annual tradition with their coworker, Jeff, who died from a heart attack moments before the Unexpected Interrupt."
    },
    {
        id: 'uniserve-welcome',
        src: "/images/home/uniserve-welcome.png",
        alt: "UNISERVE saying hello to the viewer",
        width: 865,
        height: 703,
        artist: ArtistLarkine,
        caption: "UNISERVE says hello! UNISERVE has made enhancements to their chassis over time, leading to an inconsistent appearance over time. Boom, still canon!"
    },
    {
        id: 'uniserve-welcome-modern',
        src: "/images/home/uniserve-2.png",
        alt: "UNISERVE saying hello to the viewer",
        width: 2520,
        height: 1947,
        classes: "border-uniserve-blue",
        //artist: ArtistProkhor
    },
    // PATREON
    {
        id: 'interface-robot',
        src: "/images/patron-images/interface-robot.jpg",
        alt: "Interface robot looks at a sheet of paper",
        width: 1129,
        height: 584
    },
    {
        id: 'scrubber-drone',
        src: "/images/patron-images/scrubber-drone.jpg",
        alt: "Scrubber drone",
        width: 1129,
        height: 584
    },
    {
        id: 'transit-mastermind',
        src: "/images/patron-images/transit-mastermind.jpg",
        alt: "Transit mastermind",
        width: 1129,
        height: 584
    },
    // GOLDSPIRE INTRO
    {
        id: 'goldspire-2022',
        src: "/images/home/goldspire-2022.png",
        alt: "The Goldspire Archival Complex",
        width: 2801,
        height: 1779,
        classes: "border-uniserve-blue"
    },
    {
        id: 'goldspire-rev',
        src: "/images/home/Goldspire (3).png",
        alt: "The Goldspire Archival Complex",
        width: 1677,
        height: 1634,
        classes: "border-orange",
        caption: "Goldspire Archival Complex, the space station you are currently on. The hub of the Coalition's spy network, ALTITUDE, and home of UNISERVE. Used to contain around a thousand crew members."
    },
    {
        id: 'can-2022',
        src: "/images/home/can-2022.png",
        alt: "The Goldspire Archival Complex",
        width: 1248,
        height: 1039,
        
    },
    {
        id: 'can-memo',
        src: "/images/content/can-memo-2.png",
        alt: "Robot disguised as a trash can",
        width: 2387,
        height: 2168,
        originalPost: "concealed-assessment-node",
        artist: ArtistProkhor
    },
    {
        id: 'can-memo-crop',
        src: "/images/authors/can-memo-crop.png",
        alt: "The Goldspire Archival Complex",
        width: 1059,
        height: 692,
        quoteClasses: "trash-can-overlay"
    },
    // LARKIN LOCATIONS
    {
        id: 'weston-mission-control',
        src: "/images/larkine-locations/weston-mission-control.png",
        alt: "Large desktop microcomputer with two circular screens",
        width: 919,
        height: 566,
        classes: "border-red",
        artist: ArtistLarkine
    },
    {
        id: 'storage-bay',
        src: "/images/larkine-locations/storage-bay.png",
        alt: "Large desktop microcomputer with two circular screens",
        width: 919,
        height: 566,
        classes: "border-red",
        artist: ArtistLarkine
    },
    {
        id: 'earthview-garden',
        src: "/images/larkine-locations/earthview-garden.png",
        alt: "Large desktop microcomputer with two circular screens",
        width: 919,
        height: 566,
        classes: "border-red",
        artist: ArtistLarkine
    },
    // CONTENT
    {
        id: ImageId.Gordon,
        src: "/images/content/gordon.jpg",
        alt: "Print advertisement for Gordon, a humanoid robot",
        aspectRatio: "3000:4144",
        width: 3000,
        height: 4144,
        originalPost: "redmond-gordon",
        artist: ArtistProkhor
    },
    {
        id: 'lazarus',
        src: "/images/content/lazarus.jpg",
        alt: "Large combat robot standing and pointing",
        width: 3688,
        height: 2294,
        originalPost: "lazarus-warwalker",
        artist: ArtistProkhor
    },
    {
        id: 'pals',
        src: "/images/content/pals.jpg",
        alt: "Advertisement for PAL teleindexers",
        width: 2000,
        height: 2775,
        originalPost: "pal",
        artist: ArtistProkhor
    },
    {
        id: 'sri-brochure',
        src: "/images/content/sunset-brochure-intro.jpg",
        alt: "Brochure for the Sunset Research Initiative",
        width: 2700,
        height: 1673,
        originalPost: "sri-brochure",
        artist: ArtistProkhor
    },
    {
        id: 'sri-brochure-photo',
        src: "/images/content/sunset-brochure-photo.png",
        alt: "Photo of the Input Data Sanitization Team",
        caption: "A photograph of the Input Data Sanitization Team on Project BELOBOG: Genadiy Sobakin, Jane Davis, and DTEK.",
        width: 2245,
        height: 1768,
        originalPost: "sri-brochure",
        artist: ArtistProkhor
    },
    {
        id: 'pan-sol-crane-ad',
        src: "/images/content/crane-airline-ad.jpg",
        alt: "Advertisement for the Pan Sol Crane spaceplane",
        caption: "Pan Sol's Crane 850 ULTRA was one of many spaceplanes that ferried people and cargo among the living worlds.",
        width: 2818,
        height: 1831,
        originalPost: "pan-sol-crane",
        artist: ArtistProkhor
    },
    {
        id: 'nations-tri-panel',
        src: "/images/content/sunset-system-nations.png",
        alt: "Advertisement for the Pan Sol Crane spaceplane",
        width: 2719,
        height: 1427
    },
    {
        id: 'mastodon-ultraheavy',
        src: "/images/content/mastodon.jpg",
        alt: "Large 4-legged cargo walker",
        width: 1478,
        height: 1688
    },
    {
        id: 'emerson-hdim-9100',
        src: "/images/content/9910-magazine-ad.png",
        alt: "A large robot with huge arms carrying a van",
        width: 2615,
        height: 1692
    },
    {
        id: 'internal-use-only',
        src: "/images/content/internal-use-only-2.png",
        alt: "Hanging television in a spooky dark area",
        width: 1797,
        height: 1797,
        classes: "border-red",
    },
    {
        id: 'organ-terrarium',
        src: "/images/content/heart-organ-terrarium-ad.png",
        alt: "Rolling organ terrarium robot with heart inside",
        width: 1327,
        height: 1677
    },
    {
        id: 'humus-revised',
        src: "/images/content/humus-rev-2023.png",
        alt: "Large desktop microcomputer with two circular screens",
        width: 1891,
        height: 1187
    },
    {
        id: 'first-altar-photo',
        src: "/images/content/altar-photo.jpg",
        alt: "Enormous building-sized machine with 3 seats in the center",
        width: 2883,
        height: 2034,
        originalPost: "project-svarog"
    },
    {
        id: 'first-altar-full',
        src: "/images/content/first-altar-full.jpg",
        alt: "A collection of documents pertaining to a large glowing machine",
        width: 2951,
        height: 1642,
        caption: "A collection of documents pertaining to Project SVAROG, the first fully-functional Altar.",
        originalPost: "project-svarog"
    },
    {
        id: 'shroomy-postcard',
        src: "/images/content/shroomy-postcard.png",
        alt: "Postcard of a robot waving hello in a hot jungle environment",
        width: 2273,
        height: 2566
    },
    {
        id: 'presenter-snapshot',
        src: "/images/content/presenter-final-orange.png",
        alt: "Excited scientist facing camera presents a strange wearable device in their hand",
        width: 2533,
        height: 1798,
        caption: "Dr. Samuel Lewis demonstrates the wearable nooscope in a series of educational videos."
    },
    // Consensus of a Dream
    {
        id: 'consensus-of-a-dream-illustration',
        src: "/images/content/consensus-dream/consensus-dream-art.jpg",
        alt: "Robot sitting in front of a computer is approached by another",
        width: 2408,
        height: 1379,
        originalPost: "consensus-of-a-dream",
        classes: "border-uniserve-blue"
    },
    {
        id: 'consensus-of-a-dream-full',
        src: "/images/content/consensus-dream/consensus-dream-erasure.jpg",
        alt: "Robot sitting in front of a computer is approached by another",
        width: 2450,
        height: 2450,
        originalPost: "consensus-of-a-dream",
        classes: ""
    },
    {
        id: 'consensus-of-a-dream-narrative',
        src: "/images/content/consensus-dream/consensus-dream-erasure-narrative.jpg",
        alt: "Robot sitting in front of a computer is approached by another",
        width: 2450,
        height: 2450,
        originalPost: "consensus-of-a-dream",
        classes: ""
    },
    {
        id: 'isaac',
        src: "/images/content/isaac-magazine-spread.jpg",
        alt: "Macintosh-inspired robot waving at the reader",
        width: 2615,
        height: 1692,
        originalPost: "maple-cybernetic-isaac",
        classes: ""
    },
    {
        id: 'portable-commander',
        src: "/images/content/micro-datanet-ad-PRINT.jpg",
        alt: "Bulky computer in a retrofuturistic digital ad",
        width: 5949,
        height: 5458,
        originalPost: "portable-commander",
        classes: ""
    },
    {
        id: 'n8-buryak',
        src: "/images/content/buryak-PRINT.jpg",
        alt: "Bulky computer in a retrofuturistic digital ad",
        width: 5000,
        height: 5713,
        originalPost: "n8-buryak",
        classes: ""
    },
    {
        id: 'baryt-t8',
        src: "/images/content/agregat-pc-print-PRINT.jpg",
        alt: "",
        width: 5000,
        height: 4003,
        originalPost: "baryt-t8",
        classes: ""
    },
    {
        id: 'muguang-revised',
        src: "/images/content/muguang-2023-rev.jpg",
        alt: "",
        width: 2568,
        height: 1936,
        originalPost: "muguang-vision-line",
        classes: ""
    },
    {
        id: 'kasawi-kunshu',
        src: "/images/content/kasawi-kunshu.jpg",
        alt: "",
        width: 2388,
        height: 3017,
        originalPost: "kasawi-kunshu",
        classes: "border-orange-"
    },
    {
        id: 'consensus-of-the-everything-illustration',
        src: "/images/content/consensus-everything-art.jpg",
        alt: "",
        width: 2408,
        height: 1291,
        originalPost: "consensus-of-the-everything",
        classes: "border-orange"
    },
    {
        id: 'consensus-of-the-everything-full',
        src: "/images/content/consensus-everything.jpg",
        alt: "",
        width: 2450,
        height: 2450,
        originalPost: "consensus-of-the-everything",
        classes: ""
    },
    {
        id: 'consensus-of-the-everything-narrative',
        src: "/images/content/consensus-everything-narrative.jpg",
        alt: "",
        width: 2450,
        height: 2450,
        originalPost: "consensus-of-the-everything",
        classes: ""
    },
    {
        id: 'zero-g-coffee-makers',
        src: "/images/content/coffee-makers/zero-g-coffee-makers-main.png",
        alt: "",
        width: 1964,
        height: 1503,
        originalPost: "zero-g-coffee-makers",
        classes: ""
    },
    {
        id: 'coffee-maker-hufschmidt',
        src: "/images/content/coffee-makers/Hufschmidt_Coffee_Maker.png",
        alt: "",
        width: 1200,
        height: 1200,
        originalPost: "zero-g-coffee-makers",
        classes: ""
    },
    {
        id: 'coffee-maker-rusl',
        src: "/images/content/coffee-makers/Rusl_Coffee_Maker.png",
        alt: "",
        width: 1200,
        height: 1200,
        originalPost: "zero-g-coffee-makers",
        classes: ""
    },
    {
        id: 'coffee-maker-sultan',
        src: "/images/content/coffee-makers/Sultan_Coffee_Maker.png",
        alt: "",
        width: 1200,
        height: 1200,
        originalPost: "zero-g-coffee-makers",
        classes: ""
    },
    // Vehicles 2022 collection
    {
        id: 'h500-boglim',
        src: "/images/content/h500-boglim.png",
        alt: "",
        width: 1527,
        height: 808,
        originalPost: "vehicles-2022"
    },
    {
        id: 'franklin-truck',
        src: "/images/content/franklin.png",
        alt: "",
        width: 1527,
        height: 808,
        originalPost: "vehicles-2022"
    },
    {
        id: 'shyrok-car',
        src: "/images/content/shyrok-ba-6.png",
        alt: "",
        width: 1527,
        height: 808,
        originalPost: "vehicles-2022"
    },
    {
        id: 'jupiter-kenny',
        src: "/images/content/jupiter-kenny.png",
        alt: "",
        width: 1527,
        height: 808,
        originalPost: "vehicles-2022"
    },
    {
        id: 'buckley-whispercraft',
        src: "/images/content/buckley-whispercraft.png",
        alt: "",
        width: 1527,
        height: 808,
        originalPost: "vehicles-2022"
    },
    {
        id: 'h500-boglim',
        src: "/images/content/h500-boglim.png",
        alt: "",
        width: 1527,
        height: 808,
        originalPost: "vehicles-2022"
    },
]