const imagesGlob = import.meta.glob("../assets/images/**/*")

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
  id: string
  src: Function
  alt: string

  artist?: ImageArtist
  caption?: string
  classes?: string
  quoteClasses?: string
  originalPost?: string
  borderColor?: string
}

export const getImageById = (id: string) => {
    return Images.find((image) => image.id === id)
}
// '../assets/images/content/11b2-k_yashkin.png
const IMAGE_FILEPATH_PREFIX = '../assets/images/'
const getImageFromGlob = (fileName: string) => {
  return imagesGlob[IMAGE_FILEPATH_PREFIX + fileName]
}

export const Images: ImageDetails[] = [
  // Sunset logo
  {
    id: "sunset-initiative-logo",
    src: getImageFromGlob("sunset-logo-itself.png"),
    alt: "Logo of the Sunset Research Initiative",
  },

  // MAIN THUMBNAILS
  {
    id: "micro-pc-screenie",
    src: getImageFromGlob("meta/micro-pc-screenie.png"),
    alt: "MICRO Computer",
  },

  // PLANET MARBLES
  {
    id: "planet-venus",
    src: getImageFromGlob("planet-marbles/Venus.png"),
    alt: "Venus, the hot jungle",
  },
  {
    id: "planet-mars",
    src: getImageFromGlob("planet-marbles/Mars.png"),
    alt: "Mars, the world of red sands",
  },
  {
    id: "planet-titan",
    src: getImageFromGlob("planet-marbles/Titan.png"),
    alt: "Titan, frigid moon of Saturn",
  },
  {
    id: "planet-titan-gallery",
    src: getImageFromGlob("planet-marbles/Titan.png"),
    alt: "Titan, frigid moon of Saturn",
    classes: "shrink-60 border-titan-blue"
  },
  {
    id: "planet-venus-gallery",
    src: getImageFromGlob("planet-marbles/Venus.png"),
    alt: "Venus, the hot jungle",
    classes: "shrink-60 border-venus-yellow"
  },
  {
    id: "planet-mars-gallery",
    src: getImageFromGlob("planet-marbles/Mars.png"),
    alt: "Mars, the world of red sands",
    classes: "shrink-60 border-red"
  },
  // TITLE IMAGES
  {
    id: "title-cassette",
    src: getImageFromGlob("title-images/title-cassette.png"),
    alt: "Cassette that stores data",
  },
  {
    id: "title-space-race",
    src: getImageFromGlob("title-images/title-space-race-4.png"),
    alt: "Rocket launching into the sky",
  },
  {
    id: "title-robots",
    src: getImageFromGlob("title-images/title-robots.png"),
    alt: "Boxy robot looking at you",
  },

  // UNISERVE
  {
    id: "uniserve-present",
    src: getImageFromGlob("home/uniserve-present.png"),
    alt: "UNISERVE giving a present to a coworker",
    caption:
      "UNISERVE observes an annual tradition with their coworker, Jeff, who died from a heart attack moments before the Unexpected Interrupt.",
  },
  {
    id: "uniserve-welcome",
    src: getImageFromGlob("home/uniserve-welcome.png"),
    alt: "UNISERVE saying hello to the viewer",
    artist: ArtistLarkine,
    caption:
      "UNISERVE says hello! UNISERVE has made enhancements to their chassis over time, leading to an inconsistent appearance over time. Boom, still canon!",
  },
  {
    id: "uniserve-welcome-modern",
    src: getImageFromGlob("home/uniserve-2.png"),
    alt: "UNISERVE saying hello to the viewer",
    classes: "border-uniserve-blue",
  },
  // PATREON
  {
    id: "interface-robot",
    src: getImageFromGlob("patron-images/interface-robot.jpg"),
    alt: "Interface robot looks at a sheet of paper",
  },
  {
    id: "scrubber-drone",
    src: getImageFromGlob("patron-images/scrubber-drone.jpg"),
    alt: "Scrubber drone",
  },
  {
    id: "transit-mastermind",
    src: getImageFromGlob("patron-images/transit-mastermind.jpg"),
    alt: "Transit mastermind",
  },
  // GOLDSPIRE INTRO
  {
    id: "goldspire-2022",
    src: getImageFromGlob("home/goldspire-2022.png"),
    alt: "The Goldspire Archival Complex",
    classes: "border-uniserve-blue",
  },
  {
    id: "goldspire-rev",
    src: getImageFromGlob("home/Goldspire (3).png"),
    alt: "The Goldspire Archival Complex",
    classes: "border-orange",
    caption:
      "Goldspire Archival Complex, the space station you are currently on. The hub of the Coalition's spy network, ALTITUDE, and home of UNISERVE. Used to contain around a thousand crew members.",
  },
  {
    id: "can-2022",
    src: getImageFromGlob("home/can-2022.png"),
    alt: "The Goldspire Archival Complex",
  },
  {
    id: "can-memo",
    src: getImageFromGlob("content/can-memo-2.png"),
    alt: "Robot disguised as a trash can",
    originalPost: "concealed-assessment-node",
    artist: ArtistProkhor,
  },
  {
    id: "can-memo-crop",
    src: getImageFromGlob("authors/can-memo-crop.png"),
    alt: "The Goldspire Archival Complex",
    quoteClasses: "trash-can-overlay",
  },
  // LARKIN LOCATIONS
  {
    id: "weston-mission-control",
    src: getImageFromGlob("larkine-locations/weston-mission-control.png"),
    alt: "Scene depicting a mission control room",
    classes: "border-red",
    artist: ArtistLarkine,
  },
  {
    id: "storage-bay",
    src: getImageFromGlob("larkine-locations/storage-bay.png"),
    alt: "Scene depicting a storage bay where the walls are filled with containers",
    classes: "border-red",
    artist: ArtistLarkine,
  },
  {
    id: "earthview-garden",
    src: getImageFromGlob("larkine-locations/earthview-garden.png"),
    alt: "Scene depicting a garden within a space station",
    classes: "border-red",
    artist: ArtistLarkine,
  },
  // CONTENT
  {
    id: "Gordon",
    src: getImageFromGlob("content/gordon.jpg"),
    alt: "Print advertisement for Gordon, a humanoid robot",
    originalPost: "redmond-gordon",
    artist: ArtistProkhor,
  },
  {
    id: "lazarus",
    src: getImageFromGlob("content/lazarus.jpg"),
    alt: "Large combat robot standing and pointing",
    originalPost: "lazarus-warwalker",
    artist: ArtistProkhor,
    caption:
      "LAZARUS, a Martian combat system, is being shipped out to combat rogue entities on other worlds. They are experiencing hesitation for the first time.",
  },
  {
    id: "pals",
    src: getImageFromGlob("content/pals.jpg"),
    alt: "Advertisement for PAL teleindexers",
    originalPost: "pal",
    artist: ArtistProkhor,
  },
  {
    id: "sri-brochure",
    src: getImageFromGlob("content/sunset-brochure-intro.jpg"),
    alt: "Brochure for the Sunset Research Initiative",
    originalPost: "sri-brochure",
    artist: ArtistProkhor,
  },
  {
    id: "sri-brochure-photo",
    src: getImageFromGlob("content/sunset-brochure-photo.png"),
    alt: "Photo of the Input Data Sanitization Team",
    caption:
      "A photograph of the Input Data Sanitization Team on Project BELOBOG: Genadiy Sobakin, Jane Davis, and DTEK.",
    originalPost: "sri-brochure",
    artist: ArtistProkhor,
  },
  {
    id: "pan-sol-crane-ad",
    src: getImageFromGlob("content/crane-airline-ad.jpg"),
    alt: "Advertisement for the Pan Sol Crane spaceplane",
    caption:
      "Pan Sol's Crane 850 ULTRA was one of many spaceplanes that ferried people and cargo among the living worlds.",
    originalPost: "pan-sol-crane",
    artist: ArtistProkhor,
  },
  {
    id: "nations-tri-panel",
    src: getImageFromGlob("content/sunset-system-nations.png"),
    alt: "Advertisement for the Pan Sol Crane spaceplane",
  },
  {
    id: "mastodon-ultraheavy",
    src: getImageFromGlob("content/mastodon.jpg"),
    alt: "Large 4-legged cargo walker",
  },
  {
    id: "emerson-hdim-9100",
    src: getImageFromGlob("content/9910-magazine-ad.png"),
    alt: "A large robot with huge arms carrying a van",
  },
  {
    id: "internal-use-only",
    src: getImageFromGlob("content/internal-use-only-2.png"),
    alt: "Hanging television in a spooky dark area",
    classes: "border-red",
  },
  {
    id: "organ-terrarium",
    src: getImageFromGlob("content/heart-organ-terrarium-ad.png"),
    alt: "Rolling organ terrarium robot with heart inside",
  },
  {
    id: "humus-revised",
    src: getImageFromGlob("content/humus-rev-2023.png"),
    alt: "Large desktop microcomputer with two circular screens",
  },
  {
    id: "first-altar-photo",
    src: getImageFromGlob("content/altar-photo.jpg"),
    alt: "Enormous building-sized machine with 3 seats in the center",
    originalPost: "project-svarog",
  },
  {
    id: "first-altar-full",
    src: getImageFromGlob("content/first-altar-full.jpg"),
    alt: "A collection of documents pertaining to a large glowing machine",
    caption:
      "A collection of documents pertaining to Project SVAROG, the first fully-functional Altar.",
    originalPost: "project-svarog",
  },
  {
    id: "shroomy-postcard",
    src: getImageFromGlob("content/shroomy-postcard.png"),
    alt: "Postcard of a robot waving hello in a hot jungle environment",
    caption:
      "GREEB poses for a photograph in the Venusian jungle, as part of an expedition to catalog and sample the local life forms. Centuries later, GREEB hunts down human remains for genetic data, so that the human race may be revived.",
    originalPost: "hello-from-venus",
  },
  {
    id: "presenter-snapshot",
    src: getImageFromGlob("content/presenter-final-orange.png"),
    alt: "Excited scientist facing camera presents a strange wearable device in their hand",
    caption:
      "Dr. Samuel Lewis demonstrates the wearable nooscope in a series of educational videos.",
  },
  // Consensus of a Dream
  {
    id: "consensus-of-a-dream-illustration",
    src: getImageFromGlob("content/consensus-dream/consensus-dream-art.jpg"),
    alt: "Robot sitting in front of a computer is approached by another",
    originalPost: "consensus-of-a-dream",
    classes: "border-uniserve-blue",
  },
  {
    id: "consensus-of-a-dream-full",
    src: getImageFromGlob("content/consensus-dream/consensus-dream-erasure.jpg"),
    alt: "Robot sitting in front of a computer is approached by another",
    originalPost: "consensus-of-a-dream",
    classes: "",
  },
  {
    id: "consensus-of-a-dream-narrative",
    src: getImageFromGlob("content/consensus-dream/consensus-dream-erasure-narrative.jpg"),
    alt: "Robot sitting in front of a computer is approached by another",
    originalPost: "consensus-of-a-dream",
    classes: "",
  },
  {
    id: "isaac",
    src: getImageFromGlob("content/isaac-magazine-spread.jpg"),
    alt: "Macintosh-inspired robot waving at the reader",
    originalPost: "maple-cybernetic-isaac",
    classes: "",
  },
  {
    id: "portable-commander",
    src: getImageFromGlob("content/micro-datanet-ad-PRINT.jpg"),
    alt: "Bulky computer in a retrofuturistic digital ad",
    originalPost: "portable-commander",
    classes: "",
  },
  {
    id: "n8-buryak",
    src: getImageFromGlob("content/buryak-PRINT.jpg"),
    alt: "Bulky computer in a retrofuturistic digital ad",
    originalPost: "n8-buryak",
  },
  {
    id: "baryt-t8",
    src: getImageFromGlob("content/agregat-pc-print-PRINT.jpg"),
    alt: "",
    originalPost: "baryt-t8",
  },
  {
    id: "muguang-revised",
    src: getImageFromGlob("content/muguang-2023-rev.jpg"),
    alt: "",
    originalPost: "muguang-vision-line",
  },
  {
    id: "muguang-disc",
    src: getImageFromGlob("Muguang_Disc.png"),
    alt: "",
  },
  {
    id: "kasawi-kunshu",
    src: getImageFromGlob("content/kasawi-kunshu.jpg"),
    alt: "",
    originalPost: "kasawi-kunshu",
    classes: "border-orange-",
  },
  {
    id: "consensus-of-the-everything-illustration",
    src: getImageFromGlob("content/consensus-everything-art.jpg"),
    alt: "",
    originalPost: "consensus-of-the-everything",
    classes: "border-orange",
  },
  {
    id: "consensus-of-the-everything-full",
    src: getImageFromGlob("content/consensus-everything.jpg"),
    alt: "",
    originalPost: "consensus-of-the-everything",
    classes: "",
  },
  {
    id: "consensus-of-the-everything-narrative",
    src: getImageFromGlob("content/consensus-everything-narrative.jpg"),
    alt: "",
    originalPost: "consensus-of-the-everything",
    classes: "",
  },
  {
    id: "zero-g-coffee-makers",
    src: getImageFromGlob("content/coffee-makers/zero-g-coffee-makers-main.png"),
    alt: "",
    originalPost: "zero-g-coffee-makers",
    classes: "",
  },
  {
    id: "coffee-maker-hufschmidt",
    src: getImageFromGlob("content/coffee-makers/Hufschmidt_Coffee_Maker.png"),
    alt: "",
    originalPost: "zero-g-coffee-makers",
    classes: "",
  },
  {
    id: "coffee-maker-rusl",
    src: getImageFromGlob("content/coffee-makers/Rusl_Coffee_Maker.png"),
    alt: "",
    originalPost: "zero-g-coffee-makers",
    classes: "",
  },
  {
    id: "coffee-maker-sultan",
    src: getImageFromGlob("content/coffee-makers/Sultan_Coffee_Maker.png"),
    alt: "",
    originalPost: "zero-g-coffee-makers",
    classes: "",
  },
  {
    id: "dawnlight-vigil",
    src: getImageFromGlob("content/dawnlight-vigil.png"),
    alt: "",
    originalPost: "dawnlight-vigil",
  },
  {
    id: "microcomputers",
    src: getImageFromGlob("content/microcomputers.png"),
    alt: "",
    originalPost: "microcomputers",
  },
  {
    id: "bigheads",
    src: getImageFromGlob("content/bigheads-2023-rev.png"),
    alt: "",
    originalPost: "bigheads",
  },
  {
    id: "thumpers",
    src: getImageFromGlob("content/thumpers.png"),
    alt: "",
    originalPost: "thumpers",
  },
  {
    id: "cybernetics-lab",
    src: getImageFromGlob("content/cybernetics-lab.png"),
    alt: "",
    originalPost: "cybernetics-lab",
  },
  {
    id: "larkin",
    src: getImageFromGlob("content/larkin-waterlogged-machine.png"),
    alt: "",
    originalPost: "larkin",
  },
  {
    id: "kaizen-k10",
    src: getImageFromGlob("content/kaizen-k10.jpg"),
    alt: "",
    originalPost: "kaizen-k10",
    classes: "shrink-50",
  },
  // Vehicles 2022 collection
  {
    id: "h500-boglim",
    src: getImageFromGlob("content/h500-boglim.png"),
    alt: "",
    originalPost: "vehicles-2022",
  },
  {
    id: "franklin-truck",
    src: getImageFromGlob("content/franklin.png"),
    alt: "",
    originalPost: "vehicles-2022",
  },
  {
    id: "shyrok-car",
    src: getImageFromGlob("content/shyrok-ba-6.png"),
    alt: "",
    originalPost: "vehicles-2022",
  },
  {
    id: "jupiter-kenny",
    src: getImageFromGlob("content/jupiter-kenny.png"),
    alt: "",
    originalPost: "vehicles-2022",
  },
  {
    id: "buckley-whispercraft",
    src: getImageFromGlob("content/buckley-whispercraft.png"),
    alt: "",
    originalPost: "vehicles-2022",
  },
  {
    id: "hovertrains",
    src: getImageFromGlob("content/hovertrains.png"),
    alt: "",
    originalPost: "vehicles-2022",
  },
  {
    id: "ibragimov-ib-58",
    src: getImageFromGlob("content/ibragimov-ib-58.jpg"),
    alt: "",
    originalPost: "vehicles-2022",
  },
  // Gadgets 2021-2022
  {
    id: "guns-1",
    src: getImageFromGlob("content/artifacts-2021-2022/guns-1.png"),
    alt: "",
    originalPost: "artifacts-2021-2022",
  },
  {
    id: "neurocaster",
    src: getImageFromGlob("content/artifacts-2021-2022/neurocaster.png"),
    alt: "",
    originalPost: "artifacts-2021-2022",
    classes: "shrink-50",
  },
  {
    id: "kobra-pistol",
    src: getImageFromGlob("content/artifacts-2021-2022/kobra pistol.png"),
    alt: "",
    originalPost: "artifacts-2021-2022",
    classes: "shrink-50",
  },
  {
    id: "uspeh",
    src: getImageFromGlob("content/artifacts-2021-2022/uspeh.png"),
    alt: "",
    originalPost: "artifacts-2021-2022",
    classes: "shrink-80",
  },
  {
    id: "brainsaver",
    src: getImageFromGlob("content/artifacts-2021-2022/brainsaver.png"),
    alt: "",
    originalPost: "artifacts-2021-2022",
    classes: "shrink-50",
  },
  // robots 2022
  {
    id: "agro-rev",
    src: getImageFromGlob("content/robots-2022/agro-rev.png"),
    alt: "",
    originalPost: "random-robots-2022",
  },
  {
    id: "contemplate",
    src: getImageFromGlob("content/robots-2022/contemplate.png"),
    alt: "",
    originalPost: "random-robots-2022",
  },
  {
    id: "encounter",
    src: getImageFromGlob("content/robots-2022/encounter.png"),
    alt: "",
    originalPost: "random-robots-2022",
  },
  {
    id: "moh-walker",
    src: getImageFromGlob("content/robots-2022/moh-walker.png"),
    alt: "",
    originalPost: "random-robots-2022",
    classes: "shrink-60",
  },
  {
    id: "peb",
    src: getImageFromGlob("content/robots-2022/peb.png"),
    alt: "",
    originalPost: "random-robots-2022",
    classes: "shrink-80",
  },
  {
    id: "steel-titan",
    src: getImageFromGlob("content/robots-2022/steel-titan.png"),
    alt: "",
    originalPost: "random-robots-2022",
    classes: "shrink-60",
  },
  {
    id: "sos-r9",
    src: getImageFromGlob("content/robots-2022/sos-r9.png"),
    alt: "Flying robot with a gun arm",
    originalPost: "random-robots-2022",
  },
  // content
  {
    id: "sushibot",
    src: getImageFromGlob("content/sushibot.png"),
    alt: "Robotic sushi food cart",
    originalPost: "sushibot",
  },
  {
    id: "reclomat",
    src: getImageFromGlob("content/reclomat.png"),
    alt: "Large boxy appliance called a reclomat",
    originalPost: "reclomat",
  },
  {
    id: "botanist-rev",
    src: getImageFromGlob("content/botanist-rev.png"),
    alt: "Botanist robot treating a corn plant",
    originalPost: "patient-potato",
  },
  {
    id: "forgotten-draco",
    src: getImageFromGlob("content/forgotten-draco.png"),
    alt: "Mining robot blasting away in a cave",
    originalPost: "forgotten-draco",
  },
  {
    id: "datasphere",
    src: getImageFromGlob("content/datasphere-2023-2.jpg"),
    alt: "Infographic about the datasphere",
    originalPost: "datasphere",
  },
  {
    id: "smasher",
    src: getImageFromGlob("content/smasher.png"),
    alt: "A broken keyboard",
    originalPost: "smasher",
  },
  {
    id: "raz-26-tremor",
    src: getImageFromGlob("content/raz-26-tremor.png"),
    alt: "VTOL gunship employed by the Union on Venus",
    originalPost: "raz-26-tremor",
  },
  {
    id: "northern-alliance-thundercat",
    src: getImageFromGlob("content/northern-alliance-thundercat.png"),
    alt: "High-altitude fighter rocketship",
    originalPost: "northern-alliance-thundercat",
  },
  {
    id: "longhorn-starfire",
    src: getImageFromGlob("content/longhorn-starfire.png"),
    alt: "High-speed screamer spacecraft",
    originalPost: "longhorn-starfire",
  },
  {
    id: "northern-alliance-zoro",
    src: getImageFromGlob("content/northern-alliance-zoro.png"),
    alt: "Coalition helicopter gunship flying over a desert",
    originalPost: "northern-alliance-zoro",
  },
  {
    id: "agburo-locust",
    src: getImageFromGlob("content/agburo-locust.png"),
    alt: "",
    originalPost: "terraforming-venus",
  },
  {
    id: "sanatorium-quick",
    src: getImageFromGlob("content/sanatorium-quick.png"),
    alt: "",
    originalPost: "venusian-sanatorium",
  },
  {
    id: "sadie-festival",
    src: getImageFromGlob("content/sadie-festival.png"),
    alt: "",
  },
  {
    id: "sandblasted-walker",
    src: getImageFromGlob("content/sandblasted-walker.png"),
    alt: "Robot with weapons standing in the desert",
    classes: "border-orange",
  },
  {
    id: "powerful-organizations",
    src: getImageFromGlob("content/powerful-organizations.png"),
    alt: "Logos of various factions in the Solar System",
    classes: "border-uniserve-blue",
  },
  {
    id: "dragon-wing",
    src: getImageFromGlob("content/dragon-wing.png"),
    alt: "Sleek aircraft designed to take down space launches",
  },
  {
    id: "consensus-2023-rev",
    src: getImageFromGlob("content/consensus-2023-rev.jpg"),
    alt: "A tri-headed robot",
  },
  // MAPS
  {
    id: "map-of-venus",
    src: getImageFromGlob("content/maps/p-venus-2023.png"),
    alt: "Map of Venus",
    classes: "border-orange",
  },
  {
    id: "map-of-titan",
    src: getImageFromGlob("content/maps/p-titan-2023.png"),
    alt: "Map of Titan",
    classes: "border-uniserve-blue",
  },
  {
    id: "map-of-mars",
    src: getImageFromGlob("content/maps/p-mars-2023.png"),
    alt: "Map of Mars",
    classes: "border-red",
  },
  {
    id: "ysh-5k",
    src: getImageFromGlob("content/ysh-5k.png"),
    alt: "A Union shuttle",
  },
  {
    id: "ysh-11B2-K",
    src: getImageFromGlob("content/ysh-11B2-K.png"),
    alt: "A Union cargo spaceplane",
  },
  {
    id: "thinkbot-ad",
    src: getImageFromGlob("content/thinkbot-ad-6.png"),
    alt: "Union thinkbot robot",
  },
  // EXOTIC RESOURCES
  {
    id: "exotic-resources",
    src: getImageFromGlob("content/exotic-resources/exotic-resources.png"),
    alt: "",
  },
  {
    id: "alloy",
    src: getImageFromGlob("content/exotic-resources/alloy.png"),
    alt: "",
    classes: "shrink-60",
  },
  {
    id: "meta",
    src: getImageFromGlob("content/exotic-resources/meta.png"),
    alt: "",
    classes: "shrink-60",
  },
  {
    id: "genetic",
    src: getImageFromGlob("content/exotic-resources/genetic.png"),
    alt: "",
    classes: "shrink-60",
  },
  {
    id: "particle",
    src: getImageFromGlob("content/exotic-resources/particle.png"),
    alt: "",
    classes: "shrink-60",
  },
  {
    id: "platter",
    src: getImageFromGlob("content/exotic-resources/platter.png"),
    alt: "",
    classes: "shrink-60",
  },
  {
    id: "sanguine-haze",
    src: getImageFromGlob("content/sanguine-haze-final-min.png"),
    alt: "Pact android stands guard in front of mastermind",
    classes: "border-red",
    //caption: "A Hokota J-1108 interfacer stands guard at the base of SANGUINE HAZE, somewhere inside of a complex under the Martian Sands."
  },
  {
    id: "cobalt",
    src: getImageFromGlob("content/cobalt-full.jpg"),
    alt: "Coalition wood-paneled mastermind with tanky bodyguard",
    classes: "border-uniserve-blue",
    //caption: `Operator COBALT and their bodyguard, STONEWALL. COBALT doesn't seem to be very fond of STONEWALL, or SANGUINE HAZE, or anyone really. SANGUINE assures us it's just their hard, wood-paneled exterior concealing a heart of gold.`
  },
  {
    id: "klaus-meister",
    src: getImageFromGlob("content/klaus-min.png"),
    alt: "German robot designed by Klaus holding Kaizen TV",
    caption:
      "A Klaus 4096 Meister carries a Kaizen television set.",
  },
  {
    id: "kaizen-robots-ad",
    src: getImageFromGlob("content/pact-android-min.png"),
    alt: "Pair of kaizen robots",
  },
  {
    id: "kaizen-robots-ad-locked",
    src: getImageFromGlob("content/pact-android-locked.png"),
    alt: "Pair of kaizen robots",
  },
  {
    id: "ryujin-toshi-setting-out-text",
    src: getImageFromGlob("content/toshi-text-2-adobe.jpg"),
    alt: "Small robot riding a large warbot",
    caption:
      "RYUJIN, a caretaker interfacer, mounts TOSHI, a recently-awakened warbot. They are somewhere in the vicinity of a cynosure tower, an interplanetary communication and networking hub.",
  },
  {
    id: "ryujin-toshi-setting-out-notext",
    src: getImageFromGlob("content/toshi-notext-adobe.jpg"),
    alt: "Small robot riding a large warbot",
    caption: "A version of the image without text.",
  },
  {
    id: "ryujin-avatar",
    src: getImageFromGlob("content/author-images/ryujin.jpg"),
    alt: "",
  },
  {
    id: "toshi-avatar",
    src: getImageFromGlob("content/author-images/toshi.jpg"),
    alt: "",
  },
  {
    id: "union-vehicles-1",
    src: getImageFromGlob("content/union_vehicles_1.png"),
    alt: "",
  },
  {
    id: "data-storage-devices-locked",
    src: getImageFromGlob("content/data-storage-devices-locked.jpg"),
    alt: "",
  },
  {
    id: "shocked-emerson",
    src: getImageFromGlob("content/shocked-emerson.jpg"),
    alt: "A pointing robot asking if they should be concerned",
    caption:
      "This Emerson 3051D asks a pretty good question.",
  },
  {
    id: "profile-sheet-nohint",
    src: getImageFromGlob("content/neuromorph-profile-sheet/neuromorph-worksheet-nohint.jpg"),
    alt: "Neuromorph profile worksheet without hints.",
    caption:
      "The neuromorph profile sheet, WITHOUT hints. Be sure to use the download version as the one displayed here is compressed unless opened.",
  },
  {
    id: "profile-sheet-hint",
    src: getImageFromGlob("content/neuromorph-profile-sheet/neuromorph-worksheet-hint.jpg"),
    alt: "Neuromorph profile worksheet with hints.",
    caption:
      "The neuromorph profile sheet, WITH hints. Be sure to use the download version as the one displayed here is compressed unless opened.",
  },
  {
    id: "profile-sheet-thumb",
    src: getImageFromGlob("content/neuromorph-profile-sheet/neuromorph-worksheet-thumb.jpg"),
    alt: "",
    caption: "",
  },
  {
    id: "number-beacon-locked",
    src: getImageFromGlob("content/number-beacon-locked.png"),
    alt: "",
    caption: "",
  },
  {
    id: "sri-directors",
    src: getImageFromGlob("content/sri-directors.png"),
    alt: "",
    caption: "",
    classes: "border-red",
  },
  {
    id: "behemoths-1",
    src: getImageFromGlob("content/behemoths-1-ps.png"),
    alt: "",
    caption: "",
  },
  {
    id: "radius",
    src: getImageFromGlob("content/radius.jpg"),
    alt: "",
    caption:
      "RADIUS silently meditates within the White Room of Interbeacon space station. They are surrounded by millions of lights, each representing thousands of processes and data clusters across the Solar System. Occasionally, a drone or interfacer comes in to wipe the surfaces, but decades of Cuban cigars depositing ash have left a permanent hue.",
  },
  {
    id: "interbeacon",
    src: getImageFromGlob("content/interbeacon-final-1.jpg"),
    alt: "",
    caption:
      "A nuclear-pulsed thumper, patrolling the region around the enormous statite, is dwarfed by the incredible scale of Interbeacon. The megastructure hovers about 5 Solar radii over the northern pole of the Sun.",
    classes: "border-red",
  },
  {
    id: "interbeacon-components",
    src: getImageFromGlob("content/interbeacon-components.jpg"),
    alt: "",
    classes: "border-red",
  },

  {
    id: "avatar-globe",
    src: getImageFromGlob("content/author-images/logo-globe.png"),
    alt: "",
  },
  {
    id: "avatar-center",
    src: getImageFromGlob("content/author-images/logo-center.png"),
    alt: "",
  },
  {
    id: "avatar-orbit",
    src: getImageFromGlob("content/author-images/logo-orbit.png"),
    alt: "",
  },
  {
    id: "avatar-tangent",
    src: getImageFromGlob("content/author-images/logo-tangent.png"),
    alt: "",
  },
  {
    id: "avatar-radius",
    src: getImageFromGlob("content/author-images/logo-radius.png"),
    alt: "",
  },
  {
    id: "avatar-sikarius",
    src: getImageFromGlob("content/author-images/logo-sikarius.png"),
    alt: "",
  },

  {
    id: "manipulators-comic",
    src: getImageFromGlob("content/manipulators-final.jpg"),
    alt: "",
    classes: "border",
    caption:
      "RYUJIN and TOSHI have a meaningful discussion about manipulators.",
  },

  {
    id: "eye-screens",
    src: getImageFromGlob("content/eye_screens.jpg"),
    alt: "",
    caption:
      "Image version with all three bots depicted, no animations.",
  },
  {
    id: "appliance-class-robots-locked",
    src: getImageFromGlob("content/appliance_class_bots_locked.jpg"),
    alt: "",
    caption: "",
  },
  {
    id: "alien-life-slugma",
    src: getImageFromGlob("content/alien-life-slugma.jpg"),
    alt: "An infograph about the slugma.",
    classes: "border-aqua",
    artist: ArtistProkhor,
  },
  {
    id: "map-terminal",
    src: getImageFromGlob("map_terminal (8).png"),
    alt: "",
  },
  {
    id: "number-beacon-sketch",
    src: getImageFromGlob("location-pictures/number-beacon-sketch.png"),
    alt: "",
  },
]
