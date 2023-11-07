import {
  FieldShape,
  LocationNode,
  LocationType,
  SiteSubtype,
  WorldAffiliation,
} from "@/components/special/SystemMap/data/types"

// Data for generation of objects
export const locationsData: LocationNode = {
  name: "Sol",
  typeText: "Main Sequence Star",
  flavorText: `THERE IS NOTHING ON THE SUN.
    THE SURFACE IS TOO HOT FOR ANYTHING TO EXIST HERE.
    STOP LOOKING AT THE SURFACE OF THE SUN.`,
  type: LocationType.Sun,
  distance: 0,
  radius: 35,
  speed: 0,
  startingAngle: 0,
  color: "#ffc919",
  colorSecondary: "#fff38e",
  isImportant: true,
  children: [
    // NEAR SOL
    {
      name: "Interbeacon",
      typeText: "Huge Telecommunications Statite",
      flavorText: "Glory to the Union, even in death. Home to RADIUS, the Silent Observer.",
      description:
        "Interbeacon was an enormous statite built to syncronize the Aggregate, the Union's interplanetery datanet. Today, it hosts RADIUS, the final remnant of the Union's automated economic planning system. Their voice booms across the skies, visible from all points in the System.",
      type: LocationType.Site,
      subType: SiteSubtype.Beacon,
      worldAffiliation: WorldAffiliation.HumanEra,
      distance: 20,
      startingAngle: 270,
    },
    {
      name: "The Axiom",
      typeText: "Fractal Solar Array",
      flavorText:
        "First, energy to the System. Next, energy to the universe.",
      description: "",
      type: LocationType.Site,
      subType: SiteSubtype.MachineMade,
      worldAffiliation: WorldAffiliation.MachineEra,
      distance: 45,
      startingAngle: 190,
    },
    {
      name: "Yadron",
      typeText: "Solar Research Station",
      flavorText: "Ancient Union outpost for studying the Sun. Decrepit, even in mankind's prime.",
      description:
        "",
      type: LocationType.Site,
      subType: SiteSubtype.Outpost,
      worldAffiliation: WorldAffiliation.HumanEra,
      distance: 30,
      startingAngle: 30,
    },

    // WORLDS
    {
      name: "Mercury",
      typeText: "Lifeless Mining World",
      flavorText: "A rock deep with precious minerals and strange melted cities.",
      type: LocationType.Planet,
      color: "#f47f00",
      colorSecondary: "#ffc75a",
      distance: 125,
      radius: 8,
      speed: -1.6,
      startingAngle: 35,
      children: [
        {
          name: "Inner Eye",
          typeText: "Noetic Research Orbital",
          flavorText:
            "The beginning, the end, and all that came in between. The gargantuan noetic system rests untouched since the Interrupt, amidst a field of stars and signals.",
          description:
            "The Inner Eye was the final orbital-class space station to be built by humans. The noetic altar built into its core, Project WHITE SERAPH, was activated on the same day the Unexpected Interrupt occured: May 5, 2095, the day mankind vanished from the System.",
          type: LocationType.Site,
          subType: SiteSubtype.Orbital,
          worldAffiliation: WorldAffiliation.Anomaly,
          distance: 28,
          startingAngle: 25,
        },
      ],
    },
    {
      name: "Venus",
      type: LocationType.Planet,
      typeText: "Hot Jungle World",
      flavorText:
        "Welcome, comrade! Here, our people work as hard as the machines to build our Communist future- ALERT. ALERT. Hive invasion detected. Seek shelter.",
      description: "",
      color: "#b8ff30",
      colorSecondary: "#ccda2c",
      distance: 165,
      radius: 15,
      speed: -1.17,
      startingAngle: 205,
      isImportant: true,
      children: [
        {
          name: "Tolkiy-Merdem People's Orbital",
          typeText: "Food Processing Orbital City",
          flavorText:
            "First an orbital gulag, then a revolution, finally a nuclear stalemate. Source of all the Union's troubles, until it wasn't.",
          description:
            "Interbeacon was an enormous statite built to syncronize the Aggregate, the Union's interplanetery datanet. Today, it hosts RADIUS, the final remnant of the Union's automated economic planning system. Their voice booms across the skies, visible from all points in the System.",
          type: LocationType.Site,
          subType: SiteSubtype.Orbital,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: 35,
          startingAngle: 150,
        },
        {
          name: "Klios",
          type: LocationType.Moon,
          typeText: "Frozen Moonlet",
          flavorText: "It was always here. Site of numerous server farms cased in ice.",
          description:
            "A tiny moon consisting primarily of frozen carbon dioxide. It was an ideal location for several data centers.",
          color: "#717fff",
          distance: 66,
          radius: 5,
          speed: -3.2,
          startingAngle: 320,
          children: [],
        },
      ],
    },
    {
      name: "Earth",
      typeText: "Temperate Living World",
      type: LocationType.Planet,
      flavorText:
            "Birthplace of humanity, cybernetics, and the esteemed Oakmont QUIKBREW E-90 Coffee Brewer. Virtually inaccessible due to a noetic field.",
          description:
            "",
      color: "#19b1ff",
      colorSecondary: "#25fffc",
      distance: 205,
      radius: 14,
      speed: -1.17,
      startingAngle: 340,
      isImportant: true,
      children: [
        {
          name: "The Seventh Orbital",
          typeText: "Stellar home of the Machine World",
          flavorText:
            "As the century passed, the unfinished orbital grew uncontrollably until it became the fractal labyrinth it is today.",
          description: "",
          type: LocationType.Site,
          subType: SiteSubtype.MachineMade,
          worldAffiliation: WorldAffiliation.MachineEra,
          distance: 35,
          startingAngle: 150,
        },
        
        {
          name: "BROKENDATA",
          typeText: "Reality Field",
          type: LocationType.Field,
          fieldShape: FieldShape.Earth,
          fieldLabelOffset: {x: 0, y: -60},
          distance: 22,
          startingAngle: 25,
          children: [
            {
              name: "Broadcast W-01108",
              typeText: "Transmission of unknown origin",
              description: "",
              type: LocationType.Site,
              subType: SiteSubtype.Beacon,
              worldAffiliation: WorldAffiliation.Anomaly,
              distance: 25,
              startingAngle: 20,
            },
          ]
        },
        {
          name: "Luna",
          type: LocationType.Moon,
          color: "#ffe3c4",
          colorSecondary: "#b1a89e",
          distance: 66,
          radius: 5,
          speed: -3.2,
          startingAngle: 50,
          children: [],
        },
      ],
    },
    {
      name: "Mars",
      type: LocationType.Planet,
      typeText: "Arid Desert World",
      flavorText:
        "Remains true to its namesake, so arrive only on business.",
      color: "#ff241a",
      colorSecondary: "#ff8143",
      distance: 245,
      radius: 11,
      speed: -1.17,
      startingAngle: 74,
      ringWidth: 40,
      isImportant: true,
      children: [
        {
          name: "Tojo Terminus",
          typeText: "Tactical Military Station",
          flavorText: "Mars was the dominion of the Pact, enforced by orbital drop.",
          description: "",
          type: LocationType.Site,
          subType: SiteSubtype.Outpost,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: 21,
          startingAngle: 240,
        },
        {
          name: "Prometheus",
          typeText: "Joint Venture Orbital",
          flavorText:
            "Yet the ark hovers silent, waiting for a nuclear armageddon that may never come.",
          description:
            "Split-design Orbital built by an unprecedented Union & Coalition partnership. Contains the classified Horizon Protocol, a re-population system in the event of nuclear apocalypse. The system has not been triggered.",
          type: LocationType.Site,
          subType: SiteSubtype.Orbital,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: 38,
          startingAngle: 360,
        },
        {
          name: "Hikari Lightwave 901",
          typeText: "Laser Relay Satellite",
          flavorText: "Data courses through the system like coolant through an interfacer's body.",
          description: "",
          type: LocationType.Site,
          subType: SiteSubtype.Beacon,
          distance: 50,
          startingAngle: 130,
        },
      ],
    },
    {
      name: "Asteroid Belt",
      type: LocationType.AsteroidBelt,
      distance: 350,
      radius: 15,
      speed: -1.17,
      startingAngle: 44,
      children: [
        {
          name: "Heavenbreaker Cache 80-IV",
          typeText: "Bundle of Nuclear Missiles",
          flavorText:
            "Sleeping nuclear missiles, waiting for the final order from DAWNLIGHT VIGIL.",
          description: "",
          type: LocationType.Site,
          subType: SiteSubtype.Danger,
          distance: -30,
          startingAngle: 50,
        },
        {
          name: "Slingshot Express",
          typeText: "Cargo Railgun",
          flavorText: "Hundred thousand tons of pure gun... to launch packages.",
          description: "",
          type: LocationType.Site,
          subType: SiteSubtype.Outpost,
          distance: -45,
          startingAngle: 290,
        },
      ],
      classes: "asteroid-belt",
    },
    {
      name: "Jupiter",
      type: LocationType.Planet,
      color: "#b97b44",
      colorSecondary: "#f2dbc0",
      distance: 385,
      radius: 31,
      speed: -1.17,
      startingAngle: 132,
      children: [
        // stations
        {
          name: "Gorsk",
          typeText: "Monolithic People's Orbital",
          flavorText:
            "Hear us, Collector of Melodies...",
          description:
            "The Union's enormous, encapsulated Gorsk provides the System with much of its fusion fuel. Gorsk served a dual purpose as the site of numerous collectivist experiments, including the moneyless program. The mastermind in charge, known as VOLOS to the simulant robot population, has been deluded into believing mankind still exists. The entire system is slowly collapsing into Jupiter.",
          type: LocationType.Site,
          subType: SiteSubtype.Orbital,
          distance: 45,
          startingAngle: 190,
        },
        {
          name: "The Search For Everything",
          typeText: "Self-Replicating Interstellar Vessel",
          flavorText: "This is the first step towards an answer to the great mystery of the Everything... and ultimately, a conclusion to my hunt for the perfect efficiency of the valves at junction 54-889B.",
          description: "",
          worldAffiliation: WorldAffiliation.MachineEra,
          type: LocationType.Site,
          subType: SiteSubtype.Vessel,
          distance: 25,
          startingAngle: 340,
        },
        // moons
        {
          name: "Io",
          typeText: "Volcanic World",
          type: LocationType.Moon,
          color: "#e24608",
          colorSecondary: "#ffba35",
          distance: 86,
          radius: 6,
          speed: -3.2,
          startingAngle: 10,
          isImportant: true,
          children: [],
        },
        {
          name: "Europa",
          typeText: "Tropical Ocean World",
          type: LocationType.Moon,
          color: "#1cffd7",
          colorSecondary: "#a2ffc7",
          distance: 115,
          radius: 7,
          speed: -3.2,
          startingAngle: 259,
          isImportant: true,
          children: [
            {
              name: "Errin Pharmaceutical",
              typeText: "Zero-G Biolaboratory",
              flavorText: "Keep the cages closed at any cost.",
              description: "",
              type: LocationType.Site,
              subType: SiteSubtype.Outpost,
              distance: 30,
              startingAngle: 290,
            },
          ],
        },
        {
          name: "Ganymede",
          type: LocationType.Moon,
          distance: 145,
          radius: 6,
          speed: -3.2,
          startingAngle: 155,
          children: [],
        },
        {
          name: "Callisto",
          typeText: "Dark Oil World",
          type: LocationType.Moon,
          color: "#a48fca",
          colorSecondary: "#af51ff",
          distance: 175,
          radius: 7,
          speed: -3.2,
          startingAngle: 43,
          children: [
            {
              name: "Shimmering Kele",
              typeText: "Anomalous Glass Form",
              flavorText:
                "DO NOT APPROACH US",
              description: "",
              type: LocationType.Site,
              subType: SiteSubtype.PointOfInterest,
              worldAffiliation: WorldAffiliation.MachinesOfGlass,
              distance: 45,
              startingAngle: 190,
            },
          ],
        },
      ],
    },
    {
      name: "Saturn",
      type: LocationType.Planet,
      color: "#f2c080",
      colorSecondary: "#fdf1bd",
      distance: 475,
      radius: 26,
      speed: -1.17,
      startingAngle: 320,
      ringWidth: 110,
      children: [
        // stations
        {
          name: "Goldspire Archival Complex",
          typeText: "ALTITUDE Network Hub",
          flavorText: "You like information, correct? There is much information here. Home of UNISERVE, the Curator.",
          description:
            "",
          type: LocationType.Site,
          subType: SiteSubtype.Beacon,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: 30,
          startingAngle: 310,
        },
        {
          name: "Sanket Star",
          typeText: "Assembled Orbital",
          flavorText:
            "Orbital assembled from multiple private ventures purchased by Coalition's Heavenbreaker. Source of all the System's processed tetradite.",
          description:
            "",
          type: LocationType.Site,
          subType: SiteSubtype.Orbital,
          worldAffiliation: WorldAffiliation.HumanEra,
          distance: 34,
          startingAngle: 140,
        },
        // moons
        {
          name: "Titan",
          type: LocationType.Moon,
          color: "#49f2fd",
          colorSecondary: "#1a9efa",
          distance: 135,
          radius: 8,
          speed: -3.2,
          startingAngle: 40,
          isImportant: true,
          children: [
            {
              name: "Svyatagor Outpost",
              typeText: "Military Observation Station",
              flavorText: "Mars was their dominion.",
              description: "",
              type: LocationType.Site,
              subType: SiteSubtype.Outpost,
              distance: 25,
              startingAngle: 180,
            },
          ],
        },
      ],
    },
    {
      name: "Uranus",
      type: LocationType.Planet,
      color: "#38f3ff",
      colorSecondary: "#bafcfb",
      distance: 575,
      radius: 19,
      speed: -1.17,
      startingAngle: 200,
      children: [],
    },
    {
      name: "Neptune",
      type: LocationType.Planet,
      color: "#087bdd",
      distance: 655,
      radius: 18,
      speed: -1.17,
      startingAngle: 224,
      children: [],
    },
    {
      name: "Pluto",
      type: LocationType.Planet,
      distance: 745,
      radius: 5,
      speed: -1.17,
      startingAngle: 63,
      children: [
        {
          name: "Thousand Eyes",
          typeText: "Sprawling Orbital Complex",
          flavorText: "Only one has ever returned from this place. They felt as though the past was gazing upon them.",
          description: "",
          worldAffiliation: WorldAffiliation.Anomaly,
          type: LocationType.Site,
          subType: SiteSubtype.Danger,
          distance: 25,
          startingAngle: 230,
        },
        {
          name: "Charon",
          type: LocationType.Moon,
          distance: 64,
          radius: 3,
          speed: -3.2,
          startingAngle: 165,
          children: [],
        },
      ],
    },
    {
      name: "Kuiper Belt",
      type: LocationType.AsteroidBelt,
      distance: 1025,
      radius: 50,
      speed: -1.17,
      startingAngle: 0,
      children: [],
    },
    {
      name: "Marduk",
      typeText: "Strange Gas Giant",
      type: LocationType.Planet,
      color: "#ae5395",
      colorSecondary: "#895082",
      distance: 1245,
      radius: 36,
      speed: -1.17,
      startingAngle: 32,
      children: [
        {
          name: "Nibiru",
          typeText: "Umbral Living World",
          type: LocationType.Moon,
          color: "#b003c5",
          colorSecondary: "#9c285e",
          distance: 135,
          radius: 12,
          speed: -3.2,
          startingAngle: 73,
          children: [
            {
              name: "Unusual Marker Stone A0019",
              typeText: "Prehistoric Monument",
              flavorText:
                "It reads - WELCOME TO THE WORLD. WE MADE IT FOR YOU.",
              description:
                "",
              type: LocationType.Site,
              subType: SiteSubtype.PointOfInterest,
              worldAffiliation: WorldAffiliation.Anomaly,
              distance: 35,
              startingAngle: 150,
            },
          ],
        },
      ],
    },

    // NEAR FIELDS
    {
      name: "REONIS",
      typeText: "Particle Storm",
      type: LocationType.Field,
      fieldShape: FieldShape.SunWeather,
      fieldLabelOffset: {x: -725, y: -180},
      fieldClass: "magnetic-storm",
      distance: 100,
      startingAngle: 70
    },

    // DEEP FIELDS
    {
      name: "ATEM",
      typeText: "Reality Field",
      type: LocationType.Field,
      fieldShape: FieldShape.DistantBottomLeft,
      fieldLabelOffset: {x: -25, y: -150},
      distance: 1320,
      startingAngle: 144,
      children: [
        {
          name: "Project HIGH ATEM",
          typeText: "Experimental SRI Vessel",
          flavorText:
            "A nuclear starship growing cold at the fringe of known space. Bears the markings of the Sunset Research Initiative.",
          description:
            "",
          type: LocationType.Site,
          subType: SiteSubtype.Vessel,
          worldAffiliation: WorldAffiliation.Anomaly,
          distance: 150,
          startingAngle: 200,
        },
      ]
    },

    // DEEP SITES
    // Inner system
    {
      name: "ICS Justice For All",
      typeText: "Coalition Thumper",
      flavorText:
        "Nuclear-pulsed vessel of incredible might on its way to deliver empty passenger spaceplanes.",
      description:
        "",
      type: LocationType.Site,
      subType: SiteSubtype.Vessel,
      distance: 225,
      startingAngle: 240,
    },
    // Outer system
    {
      name: "399 Voyager",
      typeText: "Furthest Human Outpost",
      flavorText:
        "A nothingness so pure and black, it'll drive anyone mad.",
      description:
        "",
      type: LocationType.Site,
      subType: SiteSubtype.Outpost,
      distance: 1055,
      startingAngle: 190,
    }

  ],
}
