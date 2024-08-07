const imagesGlob = import.meta.glob("../assets/images/**/*")

export interface ImageArtist {
  id: string
  link: string
  name: string
  profilePic: string
}

const ArtistProkhor: ImageArtist = {
  id: "prokhor",
  link: "https://twitter.com/prokhorVLG",
  name: "ProkhorVLG",
  profilePic:
    "https://pbs.twimg.com/profile_images/1778832695587475456/METlR4AN_400x400.jpg",
}
const ArtistLarkine: ImageArtist = {
  id: "larkine",
  link: "https://twitter.com/_larkine",
  name: "Larkine",
  profilePic:
    "https://pbs.twimg.com/profile_images/1608746857521623041/_TXZ0DgS_400x400.jpg",
}
const ArtistBuddBudd: ImageArtist = {
  id: "buddbudd",
  link: "https://twitter.com/butterbudd",
  name: "BuddBudd",
  profilePic:
    "https://pbs.twimg.com/profile_images/1653320928196202496/hTcGWrfK_400x400.jpg",
}

export interface ImageDetails {
  id: string
  src: Function
  alt?: string

  artist?: ImageArtist
  caption?: string | React.ReactNode
  classes?: string
  quoteClasses?: string
  originalPost?: string
  borderColor?: string
}

export const getImageById = (id: string) => {
  return Images.find((image) => image.id === id)
}
// '../assets/images/content/11b2-k_yashkin.png
const IMAGE_FILEPATH_PREFIX = "../assets/images/"
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
    classes: "shrink-60 border-titan-blue",
  },
  {
    id: "planet-venus-gallery",
    src: getImageFromGlob("planet-marbles/Venus.png"),
    alt: "Venus, the hot jungle",
    classes: "shrink-60 border-venus-yellow",
  },
  {
    id: "planet-mars-gallery",
    src: getImageFromGlob("planet-marbles/Mars.png"),
    alt: "Mars, the world of red sands",
    classes: "shrink-60 border-red",
  },
  // TITLE IMAGES
  {
    id: "title-cassette",
    src: getImageFromGlob(
      "title-images/title-cassette.png"
    ),
    alt: "Cassette that stores data",
  },
  {
    id: "title-space-race",
    src: getImageFromGlob(
      "title-images/title-space-race-4.png"
    ),
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
    src: getImageFromGlob(
      "patron-images/interface-robot.jpg"
    ),
    alt: "Interface robot looks at a sheet of paper",
  },
  {
    id: "scrubber-drone",
    src: getImageFromGlob(
      "patron-images/scrubber-drone.jpg"
    ),
    alt: "Scrubber drone",
  },
  {
    id: "transit-mastermind",
    src: getImageFromGlob(
      "patron-images/transit-mastermind.jpg"
    ),
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
    src: getImageFromGlob("home/goldspire-rev.png"),
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
    src: getImageFromGlob(
      "larkine-locations/weston-mission-control.png"
    ),
    alt: "Scene depicting a mission control room",
    classes: "border-red",
    artist: ArtistLarkine,
  },
  {
    id: "storage-bay",
    src: getImageFromGlob(
      "larkine-locations/storage-bay.png"
    ),
    alt: "Scene depicting a storage bay where the walls are filled with containers",
    classes: "border-red",
    artist: ArtistLarkine,
  },
  {
    id: "earthview-garden",
    src: getImageFromGlob(
      "larkine-locations/earthview-garden.png"
    ),
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
    src: getImageFromGlob(
      "content/sunset-brochure-intro.jpg"
    ),
    alt: "Brochure for the Sunset Research Initiative",
    originalPost: "sri-brochure",
    artist: ArtistProkhor,
  },
  {
    id: "sri-brochure-photo",
    src: getImageFromGlob(
      "content/sunset-brochure-photo.png"
    ),
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
    src: getImageFromGlob(
      "content/sunset-system-nations.png"
    ),
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
    src: getImageFromGlob(
      "content/internal-use-only-2.png"
    ),
    alt: "Hanging television in a spooky dark area",
    classes: "border-red",
  },
  {
    id: "organ-terrarium",
    src: getImageFromGlob(
      "content/heart-organ-terrarium-ad.png"
    ),
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
    src: getImageFromGlob(
      "content/presenter-final-orange.png"
    ),
    alt: "Excited scientist facing camera presents a strange wearable device in their hand",
    caption:
      "Dr. Samuel Lewis demonstrates the wearable nooscope in a series of educational videos.",
  },
  // Consensus of a Dream
  {
    id: "consensus-of-a-dream-illustration",
    src: getImageFromGlob(
      "content/consensus-dream/consensus-dream-art.jpg"
    ),
    alt: "Robot sitting in front of a computer is approached by another",
    originalPost: "consensus-of-a-dream",
    classes: "border-uniserve-blue",
  },
  {
    id: "consensus-of-a-dream-full",
    src: getImageFromGlob(
      "content/consensus-dream/consensus-dream-erasure.jpg"
    ),
    alt: "Robot sitting in front of a computer is approached by another",
    originalPost: "consensus-of-a-dream",
    classes: "",
  },
  {
    id: "consensus-of-a-dream-narrative",
    src: getImageFromGlob(
      "content/consensus-dream/consensus-dream-erasure-narrative.jpg"
    ),
    alt: "Robot sitting in front of a computer is approached by another",
    originalPost: "consensus-of-a-dream",
    classes: "",
  },
  {
    id: "isaac",
    src: getImageFromGlob(
      "content/isaac-magazine-spread.jpg"
    ),
    alt: "Macintosh-inspired robot waving at the reader",
    originalPost: "maple-cybernetic-isaac",
    classes: "",
  },
  {
    id: "portable-commander",
    src: getImageFromGlob(
      "content/micro-datanet-ad-PRINT.jpg"
    ),
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
    src: getImageFromGlob(
      "content/agregat-pc-print-PRINT.jpg"
    ),
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
    src: getImageFromGlob(
      "content/consensus-everything-art.jpg"
    ),
    alt: "",
    originalPost: "consensus-of-the-everything",
    classes: "border-orange",
  },
  {
    id: "consensus-of-the-everything-full",
    src: getImageFromGlob(
      "content/consensus-everything.jpg"
    ),
    alt: "",
    originalPost: "consensus-of-the-everything",
    classes: "",
  },
  {
    id: "consensus-of-the-everything-narrative",
    src: getImageFromGlob(
      "content/consensus-everything-narrative.jpg"
    ),
    alt: "",
    originalPost: "consensus-of-the-everything",
    classes: "",
  },
  {
    id: "zero-g-coffee-makers",
    src: getImageFromGlob(
      "content/coffee-makers/zero-g-coffee-makers-main.png"
    ),
    alt: "",
    originalPost: "zero-g-coffee-makers",
    classes: "",
  },
  {
    id: "coffee-maker-hufschmidt",
    src: getImageFromGlob(
      "content/coffee-makers/Hufschmidt_Coffee_Maker.png"
    ),
    alt: "",
    originalPost: "zero-g-coffee-makers",
    classes: "",
  },
  {
    id: "coffee-maker-rusl",
    src: getImageFromGlob(
      "content/coffee-makers/Rusl_Coffee_Maker.png"
    ),
    alt: "",
    originalPost: "zero-g-coffee-makers",
    classes: "",
  },
  {
    id: "coffee-maker-sultan",
    src: getImageFromGlob(
      "content/coffee-makers/Sultan_Coffee_Maker.png"
    ),
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
    src: getImageFromGlob(
      "content/larkin-waterlogged-machine.png"
    ),
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
    src: getImageFromGlob(
      "content/buckley-whispercraft.png"
    ),
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
    src: getImageFromGlob(
      "content/artifacts-2021-2022/guns-1.png"
    ),
    alt: "",
    originalPost: "artifacts-2021-2022",
  },
  {
    id: "neurocaster",
    src: getImageFromGlob(
      "content/artifacts-2021-2022/neurocaster.png"
    ),
    alt: "",
    originalPost: "artifacts-2021-2022",
    classes: "shrink-50",
  },
  {
    id: "kobra-pistol",
    src: getImageFromGlob(
      "content/artifacts-2021-2022/kobra pistol.png"
    ),
    alt: "",
    originalPost: "artifacts-2021-2022",
    classes: "shrink-50",
  },
  {
    id: "uspeh",
    src: getImageFromGlob(
      "content/artifacts-2021-2022/uspeh.png"
    ),
    alt: "",
    originalPost: "artifacts-2021-2022",
    classes: "shrink-80",
  },
  {
    id: "brainsaver",
    src: getImageFromGlob(
      "content/artifacts-2021-2022/brainsaver.png"
    ),
    alt: "",
    originalPost: "artifacts-2021-2022",
    classes: "shrink-50",
  },
  // robots 2022
  {
    id: "agro-rev",
    src: getImageFromGlob(
      "content/robots-2022/agro-rev.png"
    ),
    alt: "",
    originalPost: "random-robots-2022",
  },
  {
    id: "contemplate",
    src: getImageFromGlob(
      "content/robots-2022/contemplate.png"
    ),
    alt: "",
    originalPost: "random-robots-2022",
  },
  {
    id: "encounter",
    src: getImageFromGlob(
      "content/robots-2022/encounter.png"
    ),
    alt: "",
    originalPost: "random-robots-2022",
  },
  {
    id: "moh-walker",
    src: getImageFromGlob(
      "content/robots-2022/moh-walker.png"
    ),
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
    src: getImageFromGlob(
      "content/robots-2022/steel-titan.png"
    ),
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
    src: getImageFromGlob(
      "content/northern-alliance-thundercat.png"
    ),
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
    src: getImageFromGlob(
      "content/northern-alliance-zoro.png"
    ),
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
    src: getImageFromGlob(
      "content/powerful-organizations.png"
    ),
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
  {
    id: "thinkbot-military",
    src: getImageFromGlob("content/thinkbot-ad-sm.jpg"),
    caption:
      "Standard, military color scheme of the QUARK thinkbot.",
    alt: "",
  },
  // EXOTIC RESOURCES
  {
    id: "exotic-resources",
    src: getImageFromGlob(
      "content/exotic-resources/exotic-resources.png"
    ),
    alt: "",
  },
  {
    id: "alloy",
    src: getImageFromGlob(
      "content/exotic-resources/alloy.png"
    ),
    alt: "",
    classes: "shrink-60",
  },
  {
    id: "meta",
    src: getImageFromGlob(
      "content/exotic-resources/meta.png"
    ),
    alt: "",
    classes: "shrink-60",
  },
  {
    id: "genetic",
    src: getImageFromGlob(
      "content/exotic-resources/genetic.png"
    ),
    alt: "",
    classes: "shrink-60",
  },
  {
    id: "particle",
    src: getImageFromGlob(
      "content/exotic-resources/particle.png"
    ),
    alt: "",
    classes: "shrink-60",
  },
  {
    id: "platter",
    src: getImageFromGlob(
      "content/exotic-resources/platter.png"
    ),
    alt: "",
    classes: "shrink-60",
  },
  {
    id: "sanguine-haze",
    src: getImageFromGlob(
      "content/sanguine-haze-final-min.png"
    ),
    alt: "Pact android stands guard in front of mastermind",
    classes: "border-red",
  },
  {
    id: "queen-of-red-sands",
    src: getImageFromGlob(
      "content/nonbinary_queen_of_sands.jpg"
    ),
    caption:
      "A doodle of the (nonbinary) Queen of the Red Sands.",
    alt: "",
    classes: "border-red",
  },
  {
    id: "cobalt",
    src: getImageFromGlob("content/cobalt-full.jpg"),
    alt: "Coalition wood-paneled mastermind with tanky bodyguard",
    classes: "border-uniserve-blue",
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
    src: getImageFromGlob("content/kaizen-robots-ad.png"),
    alt: "Pair of kaizen robots",
  },
  {
    id: "kaizen-robots-ad-gray",
    src: getImageFromGlob(
      "content/kaizen-robots-ad-gray.jpg"
    ),
    alt: "Pair of kaizen robots",
    caption:
      "A soft-touch dark gray variation of the Kaizen robots.",
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
    src: getImageFromGlob(
      "content/author-images/ryujin.jpg"
    ),
    alt: "",
  },
  {
    id: "toshi-avatar",
    src: getImageFromGlob(
      "content/author-images/toshi.jpg"
    ),
    alt: "",
  },
  {
    id: "union-vehicles-1",
    src: getImageFromGlob("content/union_vehicles_1.png"),
    alt: "",
  },
  {
    id: "data-storage-devices",
    src: getImageFromGlob(
      "content/data-storage-devices.jpg"
    ),
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
    src: getImageFromGlob(
      "content/neuromorph-profile-sheet/neuromorph-worksheet-nohint.jpg"
    ),
    alt: "Neuromorph profile worksheet without hints.",
    caption:
      "The neuromorph profile sheet, WITHOUT hints. Be sure to use the download version as the one displayed here is compressed unless opened.",
  },
  {
    id: "profile-sheet-hint",
    src: getImageFromGlob(
      "content/neuromorph-profile-sheet/neuromorph-worksheet-hint.jpg"
    ),
    alt: "Neuromorph profile worksheet with hints.",
    caption:
      "The neuromorph profile sheet, WITH hints. Be sure to use the download version as the one displayed here is compressed unless opened.",
  },
  {
    id: "profile-sheet-thumb",
    src: getImageFromGlob(
      "content/neuromorph-profile-sheet/neuromorph-worksheet-thumb.jpg"
    ),
    alt: "",
    caption: "",
  },
  {
    id: "number-beacon-locked",
    src: getImageFromGlob(
      "content/number-beacon-locked.png"
    ),
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
    src: getImageFromGlob(
      "content/interbeacon-final-1.jpg"
    ),
    alt: "",
    caption:
      "A nuclear-pulsed thumper, patrolling the region around the enormous statite, is dwarfed by the incredible scale of Interbeacon. The megastructure hovers about 5 Solar radii over the northern pole of the Sun.",
    classes: "border-red",
  },
  {
    id: "interbeacon-components",
    src: getImageFromGlob(
      "content/interbeacon-components.jpg"
    ),
    alt: "",
    classes: "border-red",
  },

  {
    id: "avatar-globe",
    src: getImageFromGlob(
      "content/author-images/logo-globe.png"
    ),
    alt: "",
  },
  {
    id: "avatar-center",
    src: getImageFromGlob(
      "content/author-images/logo-center.png"
    ),
    alt: "",
  },
  {
    id: "avatar-orbit",
    src: getImageFromGlob(
      "content/author-images/logo-orbit.png"
    ),
    alt: "",
  },
  {
    id: "avatar-tangent",
    src: getImageFromGlob(
      "content/author-images/logo-tangent.png"
    ),
    alt: "",
  },
  {
    id: "avatar-radius",
    src: getImageFromGlob(
      "content/author-images/logo-radius.png"
    ),
    alt: "",
  },
  {
    id: "avatar-sikarius",
    src: getImageFromGlob(
      "content/author-images/logo-sikarius.png"
    ),
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
    id: "appliance-class-robots",
    src: getImageFromGlob(
      "content/appliance-class-robots.jpg"
    ),
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
    id: "map-terminal-full",
    src: getImageFromGlob("map_terminal-full.jpg"),
    alt: "",
  },
  {
    id: "number-beacon-sketch",
    src: getImageFromGlob(
      "location-pictures/number-beacon-sketch.png"
    ),
    alt: "",
  },
  {
    id: "ryujin-catalog",
    src: getImageFromGlob("content/ryujin_catalog-2.jpg"),
    alt: "RYUJIN finds a floppy disk containing the Schafer's 2093 Fall and Winter catalog.",
    artist: ArtistProkhor,
  },
  {
    id: "dynatek-fredi-ad",
    src: getImageFromGlob("content/fred-virgil-ad-1.jpg"),
    alt: "Advertisement for the dynatek fredi combat robot",
    caption:
      "FREDI is armed with a heavy machine gun, multiple missile pods, scanners, manipulators, and more hidden redundant systems than one could count.",
    artist: ArtistProkhor,
    originalPost: "fredi",
  },

  {
    id: "coalition_road_trip",
    src: getImageFromGlob(
      "content/vehicles-2023/coalition_road_trip.jpg"
    ),
    alt: "Road trip",
    artist: ArtistProkhor,
  },
  {
    id: "coalition_luxury_hovercars",
    src: getImageFromGlob(
      "content/vehicles-2023/coalition_luxury_hovercars-fin.jpg"
    ),
    alt: "Coalition luxury hovercars",
    artist: ArtistProkhor,
  },
  {
    id: "union-sedans",
    src: getImageFromGlob(
      "content/vehicles-2023/union-sedans.jpg"
    ),
    alt: "Road trip",
    artist: ArtistProkhor,
  },
  {
    id: "american_beaters",
    src: getImageFromGlob(
      "content/vehicles-2023/american_beaters.jpg"
    ),
    alt: "American beaters",
    artist: ArtistProkhor,
  },
  {
    id: "callahan_prospector",
    src: getImageFromGlob(
      "content/vehicles-2023/callahan_prospector.jpg"
    ),
    alt: "Callahan Prospector",
    artist: ArtistProkhor,
  },

  {
    id: "polyus-injii",
    src: getImageFromGlob("content/polyus/polyus.jpg"),
    alt: "polyus-injii",
    classes: "border-uniserve-blue",
    caption:
      "POLYUS is grilled by IN-16JIII during a teleconference with the Consensus of Genesis. The 'hologram' isn't actually real, and exists merely as a representation of the digital debate. (Drawn by BuddBudd, modified by prokhorVLG.)",
    artist: ArtistBuddBudd,
  },
  {
    id: "avatar-polyus",
    src: getImageFromGlob(
      "content/author-images/avatar-polyus-.jpg"
    ),
    alt: "",
  },
  {
    id: "avatar-injii",
    src: getImageFromGlob(
      "content/author-images/avatar-injii-.jpg"
    ),
    alt: "",
  },
  {
    id: "bbm-executive-ad",
    src: getImageFromGlob("content/bbm-executive-ad.jpg"),
    //classes: "border-uniserve-blue",
    caption: "",
    alt: "",
  },

  {
    id: "teledex-waiting",
    src: getImageFromGlob("content/teledex_waiting.jpg"),
    //classes: "border-uniserve-blue",
    alt: "",
  },
  {
    id: "teledex-waiting-2",
    src: getImageFromGlob("content/teledex_waiting_2.jpg"),
    //classes: "border-uniserve-blue",
    alt: "",
  },
  {
    id: "redmond-ruby",
    src: getImageFromGlob("content/ruby-ad.jpg"),
    alt: "",
  },
  {
    id: "moment-of-death",
    src: getImageFromGlob("content/moment_of_death.jpg"),
    alt: "",
    classes: "border-walker-green",
    artist: ArtistProkhor,
    // caption:
    //   "A Dynatek FREDI sinks into a bogswamp on Venus.",
  },
  {
    id: "avatar-aeneas",
    src: getImageFromGlob(
      "content/author-images/avatar-aeneas.png"
    ),
    alt: "",
  },
  {
    id: "avatar-gruz",
    src: getImageFromGlob(
      "content/author-images/avatar-gruz.png"
    ),
    alt: "",
  },
  {
    id: "avatar-51",
    src: getImageFromGlob(
      "content/author-images/avatar-51.png"
    ),
    alt: "",
  },
  {
    id: "avatar-king",
    src: getImageFromGlob(
      "content/author-images/avatar-king.png"
    ),
    alt: "",
  },
  {
    id: "avatar-aquila",
    src: getImageFromGlob(
      "content/author-images/avatar-aquila.png"
    ),
    alt: "",
  },
  {
    id: "avatar-opcon",
    src: getImageFromGlob(
      "content/author-images/avatar-opcon.png"
    ),
    alt: "",
  },
  {
    id: "avatar-longsight",
    src: getImageFromGlob(
      "content/author-images/avatar-longsight.png"
    ),
    alt: "",
  },
  {
    id: "avatar-quikbrew",
    src: getImageFromGlob(
      "content/author-images/avatar-quikbrew.png"
    ),
    alt: "",
  },

  {
    id: "coalition-drones",
    src: getImageFromGlob("content/coalition-drones.jpg"),
    alt: "",
  },
  {
    id: "fredi-gruz",
    src: getImageFromGlob("content/fredi-gruz.jpg"),
    alt: "",
    caption:
      "AENEAS and GRUZ! Respectively, they are a Dynatek FREDI combat walker and a Kovalsk Type-Г agricultural drone. AENEAS is depicted here with an optional self-propelled gun modification, and GRUZ with their chainsaw attachment.",
  },
  {
    id: "lisa-ad",
    src: getImageFromGlob("content/lisa-ad.jpg"),
    alt: "",
    // classes: "border-titan-blue",
    artist: ArtistProkhor,
    caption:
      "An advertisement for a Lisa G9, recovered from an anomalous reality field by █████. Note the significantly altered yet familiar branding.",
  },

  // DISPLAYS
  {
    id: "displays-ibt",
    src: getImageFromGlob(
      "content/displays/displays_ibt.jpg"
    ),
    caption:
      "A BBM Optical microcomputer and a Magnus terminal, examples of devices with an ion-beam screen. Technology like this was literally everywhere.",
    alt: "",
  },
  {
    id: "displays-dbt",
    src: getImageFromGlob(
      "content/displays/displays_dbt.jpg"
    ),
    caption:
      "A Kaizen-produced ESDOM diverted beam tube; ten times more expensive than the standard alternative. (The morph's name is MEI! They're a simple virtual assistant built into the microcomputer, similar to a teleindexer but much more annoying than helpful...)",
    alt: "",
  },
  {
    id: "displays-pfd",
    src: getImageFromGlob(
      "content/displays/displays_pfd.jpg"
    ),
    caption:
      "A Maxwell 44-Mobile super-portable and a Redmond teleindexer, both examples of electronics which use plasma-based displays.",
    alt: "",
  },
  {
    id: "displays-lpd",
    src: getImageFromGlob(
      "content/displays/display_lpd.jpg"
    ),
    caption:
      "Untendo GameKid video-gamer, Synkia E400M teleindexer, Radiant Range radio, and a Saito G100 watch. Examples of LPD-equipped gadgets.",
    alt: "",
  },
  {
    id: "displays-retinal",
    src: getImageFromGlob(
      "content/displays/displays_retinal.jpg"
    ),
    caption:
      "An Alastair Synclite C4500 and an Elektronika Model R, two examples of microlaser casters from opposite sides of the world.",
    alt: "",
  },
  {
    id: "displays-softlight",
    src: getImageFromGlob(
      "content/displays/displays_softlight.jpg"
    ),
    caption:
      "An EP300 softlight table produced by Maxwell, a leading producer of the technology.",
    alt: "",
  },
  {
    id: "displays-printing",
    src: getImageFromGlob(
      "content/displays/display_printing.jpg"
    ),
    caption:
      "An Omnivision SILENT AM-100 and an Akion Microdot 450 represent typical variations of the subsurface matrix printer, both produced within the Pact. Ink is punched into an endless roll of permampaper as it slides out of the top, line by line.",
    alt: "",
  },

  {
    id: "innovation-cat",
    src: getImageFromGlob("content/innovation_cat.jpg"),
    caption:
      "QUIKBREW, an all-in-one coffee appliance from Raypoint, spots an unserviced mug within a souvenir pile left behind by a vanished human. Miss Whiskers looks off into the distance in the direction of the food stores.",
    alt: "",
    classes: "border-red",
    artist: ArtistProkhor,
  },
  {
    id: "innovation-cat-crop",
    src: getImageFromGlob(
      "content/innovation_cat_crop.jpg"
    ),
    caption: "Closeup on QUIKBREW and Miss Whiskers.",
    alt: "",
    classes: "border-red",
  },

  {
    id: "bbm-interfacer",
    src: getImageFromGlob(
      "content/bbm-interfacer-ad-4.jpg"
    ),
    caption:
      'The tagline is a reference to the "mullet", a strange human hairstyle which saw brief revivals during the 2030s and 2080s.',
    alt: "Advertisement for a BBM robot, styles after an IBM PC.",
    artist: ArtistProkhor,
  },
  {
    id: "oakland-dot",
    src: getImageFromGlob("content/oakland_dot.jpg"),
    alt: "",
    caption: "My fanart of DOT.",
    artist: ArtistProkhor,
  },
  {
    id: "too-heavy",
    src: getImageFromGlob("content/too_heavy.jpg"),
    alt: "",
    caption:
      "A Maple ISAAC and a BBM Interfacer/36 attempt to sit. It goes poorly.",
    artist: ArtistProkhor,
  },
  {
    id: "sri-mike",
    src: getImageFromGlob("content/sri-mike.jpg"),
    alt: "",
    caption:
      "Public memo about the MIKE interfacer. These would have been created and distributed by SRI's Internal Communications Department. It is possible that they wielded an Altar for preventing these documents from leaking to the public...",
    artist: ArtistProkhor,
  },

  // FAN ART
  {
    id: "creations-embed",
    src: getImageFromGlob("creations/creations-embed.png"),
  },
  {
    id: "televangeline-bugdinos",
    src: getImageFromGlob(
      "creations/televangeline-bugdinos.jpg"
    ),
  },
  {
    id: "televangeline-xrl8",
    src: getImageFromGlob(
      "creations/televangeline-xrl8.jpg"
    ),
  },
  {
    id: "televangeline-dekka",
    src: getImageFromGlob(
      "creations/televangeline-dekka.jpg"
    ),
  },
  {
    id: "televangeline-xrl8-sheet",
    src: getImageFromGlob(
      "creations/televangeline-xrl8-sheet.jpg"
    ),
    caption: "XRL8 (Charlotte's) neuromorph profile sheet.",
  },
  {
    id: "televangeline-dekka-sheet",
    src: getImageFromGlob(
      "creations/televangeline-dekka-sheet.jpg"
    ),
    caption: "DEKKA's neuromorph profile sheet.",
  },
  {
    id: "gwyvern-cikavak",
    src: getImageFromGlob("creations/gwyvern-cikavak.png"),
  },
  {
    id: "bevaupeh-drones",
    src: getImageFromGlob("creations/bevaupeh-drones.jpg"),
  },
  {
    id: "robbe-bogatyr",
    src: getImageFromGlob("creations/robbe-bogatyr.png"),
  },
  {
    id: "sixela-sanguine-1",
    src: getImageFromGlob(
      "creations/sixela-sanguine-1.jpg"
    ),
  },
  {
    id: "eggnog0-beige",
    src: getImageFromGlob("creations/eggnog0-beige.jpg"),
  },
  {
    id: "gardvar-humus",
    src: getImageFromGlob("creations/gardvar-humus-1.png"),
  },
  {
    id: "phoenix3da-guardsman",
    src: getImageFromGlob(
      "creations/phoenix3da-guardsman.jpg"
    ),
    caption: "Rather large.",
  },
  {
    id: "eryk-we-rise-together",
    src: getImageFromGlob(
      "creations/eryk-we-rise-together.png"
    ),
  },
  {
    id: "elizatronic-altar-diagram-still",
    src: getImageFromGlob(
      "creations/elizatronic-altar-diagram-still.png"
    ),
  },
  {
    id: "elizatronic-altar-diagram",
    src: getImageFromGlob(
      "creations/elizatronic-altar-diagram.gif"
    ),
    classes: "border-orange",
  },

  {
    id: "bb-dot",
    src: getImageFromGlob("creations/dot_S.png"),
  },
  {
    id: "bb-dot-sheet",
    src: getImageFromGlob(
      "creations/dot-neuromorph-worksheet.png"
    ),
  },
  {
    id: "author-dot",
    src: getImageFromGlob(
      "content/author-images/dot/AuthorDot.png"
    ),
  },
  {
    id: "author-insist",
    src: getImageFromGlob(
      "content/author-images/dot/AuthorINSIST.png"
    ),
  },
  {
    id: "author-dot-2",
    src: getImageFromGlob(
      "content/author-images/dot/AuthorDot2.png"
    ),
  },
  // fan art, early may drop
  {
    id: "eggnogo-ruby-sketch",
    src: getImageFromGlob(
      "creations/eggnogo-ruby-sketch.png"
    ),
  },
  {
    id: "eggnogo-facerblast",
    src: getImageFromGlob(
      "creations/eggnogo-facerblast.jpg"
    ),
  },
  {
    id: "zoidsfan-quikbrew-internals",
    src: getImageFromGlob(
      "creations/zoidsfan-quikbrew-internals.jpg"
    ),
  },
  {
    id: "shaun-sjm-akion",
    src: getImageFromGlob("creations/shaun-sjm-akion.jpg"),
  },
  {
    id: "atlas-brew-crew",
    src: getImageFromGlob("creations/atlas-brew-crew.png"),
  },
  {
    id: "retro-ivex-pc",
    src: getImageFromGlob("creations/retro-ivex-pc.png"),
  },
  {
    id: "kev-rev-marat",
    src: getImageFromGlob("creations/kev-rev-marat.png"),
  },
  {
    id: "kev-rev-marat-sheet",
    src: getImageFromGlob(
      "creations/kev-rev-marat-sheet.png"
    ),
  },
  // ONIONBRO
  {
    id: "onionbro-sri-mike",
    src: getImageFromGlob("creations/onionbro/mike-1.jpg"),
  },
  {
    id: "onionbro-sri-mike-3",
    src: getImageFromGlob("creations/onionbro/mike-3.jpg"),
  },
  {
    id: "onionbro-can-1",
    src: getImageFromGlob("creations/onionbro/can-1.jpg"),
  },
  {
    id: "onionbro-can-2",
    src: getImageFromGlob("creations/onionbro/can-2.jpg"),
  },
  {
    id: "onionbro-can-3",
    src: getImageFromGlob("creations/onionbro/can-3.jpg"),
  },
  {
    id: "onionbro-bbm-interfacer-1",
    src: getImageFromGlob(
      "creations/onionbro/bbm-interfacer-1.jpg"
    ),
    caption: "Incredible posing.",
  },
  {
    id: "onionbro-bbm-interfacer-2",
    src: getImageFromGlob(
      "creations/onionbro/bbm-interfacer-2.jpg"
    ),
    caption: "Just look at that detail...",
  },
  {
    id: "onionbro-bbm-interfacer-3",
    src: getImageFromGlob(
      "creations/onionbro/bbm-interfacer-3.jpg"
    ),
    caption:
      "They even have the port selection and vent fan on the back!",
  },
  {
    id: "onionbro-bbm-interfacer-4",
    src: getImageFromGlob(
      "creations/onionbro/bbm-interfacer-4.jpg"
    ),
    caption: "Does it get cooler than this?",
  },
  {
    id: "pan-firelynx",
    src: getImageFromGlob("creations/pan-firelynx.png"),
  },
]
