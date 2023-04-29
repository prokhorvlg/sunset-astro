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
    format?: string

    originalPost?: string
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
        height: 1530
    },
    {
        id: 'uniserve-welcome',
        src: "/images/home/uniserve-welcome.png",
        alt: "UNISERVE saying hello to the viewer",
        width: 865,
        height: 703,
        artist: ArtistLarkine
    },
    {
        id: 'uniserve-welcome-modern',
        src: "/images/home/uniserve-2.png",
        alt: "UNISERVE saying hello to the viewer",
        width: 2520,
        height: 1947,
        classes: "uniserve-modern"
    },
    // GOLDSPIRE INTRO
    {
        id: 'goldspire-2022',
        src: "/images/home/goldspire-2022.png",
        alt: "The Goldspire Archival Complex",
        width: 2801,
        height: 1779,
        classes: "uniserve-modern"
    },
    {
        id: 'goldspire-rev',
        src: "/images/home/Goldspire (3).png",
        alt: "The Goldspire Archival Complex",
        width: 1677,
        height: 1634,
        classes: "goldspire-rev",
        caption: "Goldspire Archival Complex, the space station you are currently on. The hub of the Coalition's spy network, ALTITUDE, and home of UNISERVE. Used to contain around a thousand crew members."
    },
    {
        id: 'can-2022',
        src: "/images/home/can-2022.png",
        alt: "The Goldspire Archival Complex",
        width: 1248,
        height: 1039,
    },
    // CONTENT
    {
        id: ImageId.Gordon,
        src: "/images/content/gordon.jpg",
        alt: "Print advertisement for Gordon",
        aspectRatio: "3000:4144",
        width: 3000,
        height: 4144
    },
    {
        id: 'lazarus',
        src: "/images/content/lazarus.jpg",
        alt: "Lazarus standing and pointing",
        width: 3688,
        height: 2294
    },
    {
        id: 'pals',
        src: "/images/content/pals.jpg",
        alt: "Advertisement for PAL teleindexers",
        width: 2000,
        height: 2775
    },
    {
        id: 'sri-brochure',
        src: "/images/content/sunset-brochure-intro.jpg",
        alt: "Brochure for the Sunset Research Initiative",
        width: 2700,
        height: 1673
    },
    {
        id: 'sri-brochure-photo',
        src: "/images/content/sunset-brochure-photo.png",
        alt: "Photo of the Input Data Sanitization Team",
        caption: "A photograph of the Input Data Sanitization Team on Project BELOBOG: Genadiy Sobakin, Jane Davis, and DTEK.",
        width: 2245,
        height: 1768
    },
    {
        id: 'pan-sol-crane-ad',
        src: "/images/content/crane-airline-ad.jpg",
        alt: "Advertisement for the Pan Sol Crane spaceplane",
        caption: "Pan Sol's Crane 850 ULTRA was one of many spaceplanes that ferried people and cargo among the living worlds.",
        width: 2818,
        height: 1831
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
        alt: "Big robot on campus",
        width: 2615,
        height: 1692
    },
    {
        id: 'internal-use-only',
        src: "/images/content/internal-use-only-2.png",
        alt: "Hanging television in a spooky dark area",
        width: 1797,
        height: 1797
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
]