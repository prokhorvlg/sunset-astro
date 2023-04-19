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
}

export enum ImageId {
    Gordon = 'Gordon'
}

export const Images: ImageDetails[] = [
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
        src: "/images/home/Uniserve_2 (2).png",
        alt: "UNISERVE saying hello to the viewer",
        width: 2589,
        height: 2120,
        artist: ArtistProkhor
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
        alt: "Brochure for Sunset Research Initiative",
        width: 2700,
        height: 1673
    },
]