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
    isVideo?: boolean
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
        alt: "Scene depicting a mission control room",
        width: 919,
        height: 566,
        classes: "border-red",
        artist: ArtistLarkine
    },
    {
        id: 'storage-bay',
        src: "/images/larkine-locations/storage-bay.png",
        alt: "Scene depicting a storage bay where the walls are filled with containers",
        width: 919,
        height: 566,
        classes: "border-red",
        artist: ArtistLarkine
    },
    {
        id: 'earthview-garden',
        src: "/images/larkine-locations/earthview-garden.png",
        alt: "Scene depicting a garden within a space station",
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
        artist: ArtistProkhor,
        caption: "LAZARUS, a Martian combat system, is being shipped out to combat rogue entities on other worlds. They are experiencing hesitation for the first time."
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
        height: 2566,
        caption: "GREEB poses for a photograph in the Venusian jungle, as part of an expedition to catalog and sample the local life forms. Centuries later, GREEB hunts down human remains for genetic data, so that the human race may be revived.",
        originalPost: "hello-from-venus"
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
    {
        id: 'dawnlight-vigil',
        src: "/images/content/dawnlight-vigil.png",
        alt: "",
        width: 2388,
        height: 1688,
        originalPost: "dawnlight-vigil"
    },
    {
        id: 'microcomputers',
        src: "/images/content/microcomputers.png",
        alt: "",
        width: 2125,
        height: 1361,
        originalPost: "microcomputers"
    },
    {
        id: 'bigheads',
        src: "/images/content/bigheads-2023-rev.png",
        alt: "",
        width: 2370,
        height: 1954,
        originalPost: "bigheads"
    },
    {
        id: 'thumpers',
        src: "/images/content/thumpers.png",
        alt: "",
        width: 1351,
        height: 1771,
        originalPost: "thumpers"
    },
    {
        id: 'cybernetics-lab',
        src: "/images/content/cybernetics-lab.png",
        alt: "",
        width: 1278,
        height: 1083,
        originalPost: "cybernetics-lab"
    },
    {
        id: 'larkin',
        src: "/images/content/larkin-waterlogged-machine.png",
        alt: "",
        width: 1875,
        height: 1668,
        originalPost: "larkin"
    },
    {
        id: 'kaizen-k10',
        src: "/images/content/kaizen-k10.jpg",
        alt: "",
        width: 1481,
        height: 2898,
        originalPost: "kaizen-k10",
        classes: "shrink-50"
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
        width: 1238,
        height: 880,
        originalPost: "vehicles-2022"
    },
    {
        id: 'shyrok-car',
        src: "/images/content/shyrok-ba-6.png",
        alt: "",
        width: 1319,
        height: 1113,
        originalPost: "vehicles-2022"
    },
    {
        id: 'jupiter-kenny',
        src: "/images/content/jupiter-kenny.png",
        alt: "",
        width: 1479,
        height: 1167,
        originalPost: "vehicles-2022"
    },
    {
        id: 'buckley-whispercraft',
        src: "/images/content/buckley-whispercraft.png",
        alt: "",
        width: 1379,
        height: 978,
        originalPost: "vehicles-2022"
    },
    {
        id: 'hovertrains',
        src: "/images/content/hovertrains.png",
        alt: "",
        width: 2041,
        height: 1450,
        originalPost: "vehicles-2022"
    },
    {
        id: 'ibragimov-ib-58',
        src: "/images/content/ibragimov-ib-58.jpg",
        alt: "",
        width: 1280,
        height: 1134,
        originalPost: "vehicles-2022"
    },
    // Gadgets 2021-2022
    {
        id: 'guns-1',
        src: "/images/content/artifacts-2021-2022/guns-1.png",
        alt: "",
        width: 1458,
        height: 1138,
        originalPost: "artifacts-2021-2022"
    },
    {
        id: 'neurocaster',
        src: "/images/content/artifacts-2021-2022/neurocaster.png",
        alt: "",
        width: 1016,
        height: 768,
        originalPost: "artifacts-2021-2022",
        classes: "shrink-50"
    },
    {
        id: 'kobra-pistol',
        src: "/images/content/artifacts-2021-2022/kobra pistol.png",
        alt: "",
        width: 1122,
        height: 813,
        originalPost: "artifacts-2021-2022",
        classes: "shrink-50"
    },
    {
        id: 'uspeh',
        src: "/images/content/artifacts-2021-2022/uspeh.png",
        alt: "",
        width: 1135,
        height: 843,
        originalPost: "artifacts-2021-2022",
        classes: "shrink-80"
    },
    {
        id: 'brainsaver',
        src: "/images/content/artifacts-2021-2022/brainsaver.png",
        alt: "",
        width: 1086,
        height: 924,
        originalPost: "artifacts-2021-2022",
        classes: "shrink-50"
    },
    // robots 2022
    {
        id: 'agro-rev',
        src: "/images/content/robots-2022/agro-rev.png",
        alt: "",
        width: 2000,
        height: 1605,
        originalPost: "random-robots-2022"
    },
    {
        id: 'contemplate',
        src: "/images/content/robots-2022/contemplate.png",
        alt: "",
        width: 1609,
        height: 1185,
        originalPost: "random-robots-2022"
    },
    {
        id: 'encounter',
        src: "/images/content/robots-2022/encounter.png",
        alt: "",
        width: 1158,
        height: 809,
        originalPost: "random-robots-2022"
    },
    {
        id: 'moh-walker',
        src: "/images/content/robots-2022/moh-walker.png",
        alt: "",
        width: 915,
        height: 809,
        originalPost: "random-robots-2022",
        classes: "shrink-60"
    },
    {
        id: 'peb',
        src: "/images/content/robots-2022/peb.png",
        alt: "",
        width: 1441,
        height: 1819,
        originalPost: "random-robots-2022",
        classes: "shrink-80"
    },
    {
        id: 'steel-titan',
        src: "/images/content/robots-2022/steel-titan.png",
        alt: "",
        width: 722,
        height: 809,
        originalPost: "random-robots-2022",
        classes: "shrink-60"
    },
    {
        id: 'sos-r9',
        src: "/images/content/robots-2022/sos-r9.png",
        alt: "Flying robot with a gun arm",
        width: 1769,
        height: 1097,
        originalPost: "random-robots-2022"
    },
    // content
    {
        id: 'sushibot',
        src: "/images/content/sushibot.png",
        alt: "Robotic sushi food cart",
        width: 1327,
        height: 1267,
        originalPost: "sushibot"
    },
    {
        id: 'reclomat',
        src: "/images/content/reclomat.png",
        alt: "Large boxy appliance called a reclomat",
        width: 1307,
        height: 1154,
        originalPost: "reclomat"
    },
    {
        id: 'botanist-rev',
        src: "/images/content/botanist-rev.png",
        alt: "Botanist robot treating a corn plant",
        width: 2201,
        height: 1796,
        originalPost: "patient-potato"
    },
    {
        id: 'forgotten-draco',
        src: "/images/content/forgotten-draco.png",
        alt: "Mining robot blasting away in a cave",
        width: 2945,
        height: 2076,
        originalPost: "forgotten-draco"
    },
    {
        id: 'datasphere',
        src: "/images/content/datasphere-2023-2.jpg",
        alt: "Infographic about the datasphere",
        width: 2632,
        height: 1761,
        originalPost: "datasphere"
    },
    {
        id: 'smasher',
        src: "/images/content/smasher.png",
        alt: "A broken keyboard",
        width: 1193,
        height: 929,
        originalPost: "smasher"
    },
    {
        id: 'raz-26-tremor',
        src: "/images/content/raz-26-tremor.png",
        alt: "VTOL gunship employed by the Union on Venus",
        width: 2109,
        height: 1955,
        originalPost: "raz-26-tremor"
    },
    {
        id: 'northern-alliance-thundercat',
        src: "/images/content/northern-alliance-thundercat.png",
        alt: "High-altitude fighter rocketship",
        width: 1758,
        height: 1031,
        originalPost: "northern-alliance-thundercat"
    },
    {
        id: 'longhorn-starfire',
        src: "/images/content/longhorn-starfire.png",
        alt: "High-speed screamer spacecraft",
        width: 1821,
        height: 1010,
        originalPost: "longhorn-starfire"
    },
    {
        id: 'northern-alliance-zoro',
        src: "/images/content/northern-alliance-zoro.png",
        alt: "Coalition helicopter gunship flying over a desert",
        width: 2388,
        height: 1668,
        originalPost: "northern-alliance-zoro"
    },
    {
        id: 'agburo-locust',
        src: "/images/content/agburo-locust.png",
        alt: "",
        width: 2388,
        height: 1668,
        originalPost: "terraforming-venus"
    },
    {
        id: 'sanatorium-quick',
        src: "/images/content/sanatorium-quick.png",
        alt: "",
        width: 2388,
        height: 1668,
        originalPost: "venusian-sanatorium"
    },
    {
        id: 'muguang-disk',
        src: "/images/Muguang_Disc.png",
        alt: "",
        width: 1025,
        height: 920,
    },
    {
        id: 'sadie-festival',
        src: "/images/content/sadie-festival.png",
        alt: "",
        width: 1692,
        height: 1336
    },
    {
        id: 'sandblasted-walker',
        src: "/images/content/sandblasted-walker.png",
        alt: "Robot with weapons standing in the desert",
        width: 2388,
        height: 1470,
        classes: "border-orange"
    },
    {
        id: 'powerful-organizations',
        src: "/images/content/powerful-organizations.png",
        alt: "Logos of various factions in the Solar System",
        width: 2560,
        height: 2168,
        classes: "border-uniserve-blue"
    },
    {
        id: 'dragon-wing',
        src: "/images/content/dragon-wing.png",
        alt: "Sleek aircraft designed to take down space launches",
        width: 1635,
        height: 996
    },
    {
        id: 'consensus-2023-rev',
        src: "/images/content/consensus-2023-rev.jpg",
        alt: "A tri-headed robot",
        width: 1666,
        height: 1156,
    },
    // MAPS
    {
        id: 'map-of-venus',
        src: "/images/content/maps/p-venus-2023.png",
        alt: "Map of Venus",
        width: 2500,
        height: 2101,
        classes: "border-orange"
    },
    {
        id: 'map-of-titan',
        src: "/images/content/maps/p-titan-2023.png",
        alt: "Map of Titan",
        width: 2500,
        height: 2127,
        classes: "border-uniserve-blue"
    },
    {
        id: 'map-of-mars',
        src: "/images/content/maps/p-mars-2023.png",
        alt: "Map of Mars",
        width: 2500,
        height: 2127,
        classes: "border-red"
    },
    {
        id: 'ysh-5k',
        src: "/images/content/ysh-5k.png",
        alt: "A Union shuttle",
        width: 1606,
        height: 1178
    },
    {
        id: 'ysh-11B2-K',
        src: "/images/content/ysh-11B2-K.png",
        alt: "A Union cargo spaceplane",
        width: 1500,
        height: 887
    },
    {
        id: 'thinkbot-ad',
        src: "/images/content/thinkbot-ad-6.png",
        alt: "Union thinkbot robot",
        width: 1852,
        height: 2542
    },
    // EXOTIC RESOURCES
    {
        id: 'exotic-resources',
        src: "/images/content/exotic-resources/exotic-resources.png",
        alt: "",
        width: 1735,
        height: 1265,
    },
    {
        id: 'alloy',
        src: "/images/content/exotic-resources/alloy.png",
        alt: "",
        width: 940,
        height: 640,
        classes: "shrink-60"
    },
    {
        id: 'meta',
        src: "/images/content/exotic-resources/meta.png",
        alt: "",
        width: 940,
        height: 640,
        classes: "shrink-60"
    },
    {
        id: 'genetic',
        src: "/images/content/exotic-resources/genetic.png",
        alt: "",
        width: 940,
        height: 640,
        classes: "shrink-60"
    },
    {
        id: 'particle',
        src: "/images/content/exotic-resources/particle.png",
        alt: "",
        width: 940,
        height: 640,
        classes: "shrink-60"
    },
    {
        id: 'platter',
        src: "/images/content/exotic-resources/platter.png",
        alt: "",
        width: 940,
        height: 640,
        classes: "shrink-60"
    },
    {
        id: 'sanguine-haze',
        src: "/images/content/sanguine-haze-final-min.png",
        alt: "Pact android stands guard in front of mastermind",
        width: 2100,
        height: 1700,
        classes: "border-red",
        //caption: "A Hokota J-1108 interfacer stands guard at the base of SANGUINE HAZE, somewhere inside of a complex under the Martian Sands."
    },
    {
        id: 'cobalt',
        src: "/images/content/cobalt-full.jpg",
        alt: "Coalition wood-paneled mastermind with tanky bodyguard",
        width: 2238,
        height: 1700,
        classes: "border-uniserve-blue",
        //caption: `Operator COBALT and their bodyguard, STONEWALL. COBALT doesn't seem to be very fond of STONEWALL, or SANGUINE HAZE, or anyone really. SANGUINE assures us it's just their hard, wood-paneled exterior concealing a heart of gold.`
    },
    {
        id: 'klaus-meister',
        src: "/images/content/klaus-min.png",
        alt: "German robot designed by Klaus holding Kaizen TV",
        width: 1297,
        height: 1463,
        caption: "A Klaus 4096 Meister carries a Kaizen television set."
    },
    {
        id: 'kaizen-robots-ad',
        src: "/images/content/pact-android-min.png",
        alt: "Pair of kaizen robots",
        width: 2265,
        height: 2830
    },
    {
        id: 'kaizen-robots-ad-locked',
        src: "/images/content/pact-android-locked.png",
        alt: "Pair of kaizen robots",
        width: 2265,
        height: 2830
    },
    {
        id: 'ryujin-toshi-setting-out-text',
        src: "/images/content/toshi-text-2-adobe.jpg",
        alt: "Small robot riding a large warbot",
        width: 2615,
        height: 2208,
        caption: "RYUJIN, a caretaker interfacer, mounts TOSHI, a recently-awakened warbot. They are somewhere in the vicinity of a cynosure tower, an interplanetary communication and networking hub."
    },
    {
        id: 'ryujin-toshi-setting-out-notext',
        src: "/images/content/toshi-notext-adobe.jpg",
        alt: "Small robot riding a large warbot",
        width: 2615,
        height: 2208,
        caption: "A version of the image without text."
    },
    {
        id: 'ryujin-avatar',
        src: "/images/content/author-images/ryujin.jpg",
        alt: "",
        width: 1030,
        height: 608
    },
    {
        id: 'toshi-avatar',
        src: "/images/content/author-images/toshi.jpg",
        alt: "",
        width: 1814,
        height: 981
    },
    {
        id: 'union-vehicles-1',
        src: "/images/content/union_vehicles_1.png",
        alt: "",
        width: 2389,
        height: 1835
    },
    {
        id: 'data-storage-devices-locked',
        src: "/images/content/data-storage-devices-locked.jpg",
        alt: "",
        width: 2598,
        height: 2027
    },
    {
        id: 'shocked-emerson',
        src: "/images/content/shocked-emerson.jpg",
        alt: "A pointing robot asking if they should be concerned",
        width: 1896,
        height: 1274,
        caption: "This Emerson 3051D asks a pretty good question."
    },
    {
        id: 'profile-sheet-nohint',
        src: "/images/content/neuromorph-profile-sheet/neuromorph-worksheet-nohint.jpg",
        alt: "Neuromorph profile worksheet without hints.",
        width: 2550,
        height: 3300,
        caption: "The neuromorph profile sheet, WITHOUT hints. Be sure to use the download version as the one displayed here is compressed unless opened."
    },
    {
        id: 'profile-sheet-hint',
        src: "/images/content/neuromorph-profile-sheet/neuromorph-worksheet-hint.jpg",
        alt: "Neuromorph profile worksheet with hints.",
        width: 2550,
        height: 3300,
        caption: "The neuromorph profile sheet, WITH hints. Be sure to use the download version as the one displayed here is compressed unless opened."
    },
    {
        id: 'profile-sheet-thumb',
        src: "/images/content/neuromorph-profile-sheet/neuromorph-worksheet-thumb.jpg",
        alt: "",
        width: 1513,
        height: 1038,
        caption: ""
    },
    {
        id: 'number-beacon-locked',
        src: "/images/content/number-beacon-locked.png",
        alt: "",
        width: 2388,
        height: 1668,
        caption: ""
    },
    {
        id: 'sri-directors',
        src: "/images/content/sri-directors.png",
        alt: "",
        width: 1936,
        height: 1085,
        caption: "",
        classes: "border-red",
    },
    {
        id: 'behemoths-1',
        src: "/images/content/behemoths-1-ps.png",
        alt: "",
        width: 2441,
        height: 1673,
        caption: ""
    },
    {
        id: 'radius',
        src: "/images/content/radius.jpg",
        alt: "",
        width: 3000,
        height: 1688,
        caption: "RADIUS silently meditates within the White Room of Interbeacon space station. They are surrounded by millions of lights, each representing thousands of processes and data clusters across the Solar System. Occasionally, a drone or interfacer comes in to wipe the surfaces, but decades of Cuban cigars depositing ash have left a permanent hue."
    },
    {
        id: 'interbeacon',
        src: "/images/content/interbeacon-final-1.jpg",
        alt: "",
        width: 5000,
        height: 2939,
        caption: "A nuclear-pulsed thumper, patrolling the region around the enormous statite, is dwarfed by the incredible scale of Interbeacon. The megastructure hovers about 5 Solar radii over the northern pole of the Sun.",
        classes: "border-red",
    },
    {
        id: 'interbeacon-components',
        src: "/images/content/interbeacon-components.jpg",
        alt: "",
        width: 2500,
        height: 1470,
        classes: "border-red",
    },

    {
        id: 'avatar-globe',
        src: "/images/content/author-images/logo-globe.png",
        alt: "",
        width: 280,
        height: 280,
    },
    {
        id: 'avatar-center',
        src: "/images/content/author-images/logo-center.png",
        alt: "",
        width: 280,
        height: 280,
    },
    {
        id: 'avatar-orbit',
        src: "/images/content/author-images/logo-orbit.png",
        alt: "",
        width: 280,
        height: 280,
    },
    {
        id: 'avatar-tangent',
        src: "/images/content/author-images/logo-tangent.png",
        alt: "",
        width: 280,
        height: 280,
    },
    {
        id: 'avatar-radius',
        src: "/images/content/author-images/logo-radius.png",
        alt: "",
        width: 280,
        height: 280,
    },
    {
        id: 'avatar-sikarius',
        src: "/images/content/author-images/logo-sikarius.png",
        alt: "",
        width: 280,
        height: 280,
    },

    {
        id: 'manipulators-comic',
        src: "/images/content/manipulators-final.jpg",
        alt: "",
        width: 2580,
        height: 2680,
        classes: "border",
        caption: "RYUJIN and TOSHI have a meaningful discussion about manipulators."
    },

    {
        id: 'eye-screens',
        src: "/images/content/eye_screens.jpg",
        alt: "",
        width: 3330,
        height: 2198,
        caption: "Image version with all three bots depicted, no animations."
    },
    {
        id: 'appliance-class-robots-locked',
        src: "/images/content/appliance_class_bots_locked.jpg",
        alt: "",
        width: 2416,
        height: 1360,
        caption: ""
    },
    {
        id: 'alien-life-slugma',
        src: "/images/content/alien-life-slugma.jpg",
        alt: "An infograph about the slugma.",
        width: 2732,
        height: 2189,
        classes: "border-aqua",
        artist: ArtistProkhor
    },
]
