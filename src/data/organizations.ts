export enum Affiliation {
    Union = 'Union',
    Coalition = 'Coalition',
    Pact = 'Pact',
    None = ''
}

export enum SortType {
    RobotManufacturer = 'Robot Manufacturer'
}

export enum RobotExampleType {
    Link,
    ImageURL
}

export interface RobotExample {
    name: string
    description?: string
    type: RobotExampleType
    target: string
}
export interface Organization {
    id: string
    image?: string
    color?: string
    name: string
    sortType?: SortType
    type: string
    description: string
    specialization?: string
    affiliation: Affiliation
    basedOn?: string
    tags?: string[]
    examples?: RobotExample[]
}

// You, the visitor.
export const Organizations: Organization[] = [
    {
        id: "bbm",
        image: "/images/logos/bbm.svg",
        name: "Berkeley Business Machines",
        color: "#1b88f5",
        sortType: SortType.RobotManufacturer,
        type: "Major Technology Corporation",
        description: 
`The most prolific technology company in the West since the mid-20th century, **BBM** pioneered just about everything in the electronic realm, from personal computing and mainframe engineering to advanced cybernetic and neuromorphic matrices. Since the creation of their business robot brand in the 1980s, the corporation skyrocketed to ubiquitous status, becoming a staple in every office.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "IBM",
        examples: [
            {
                type: RobotExampleType.Link,
                name: "MARVIN",
                target: "/",
                description: "Home page banner, central position depicts BBM interfacer."
            },
            {
                type: RobotExampleType.Link,
                name: "MARVIN",
                target: "/credits",
                description: "'Interfacer' Patreon tier depicts BBM interfacer."
            }
        ]
    },
    {
        id: "dynatek",
        name: "Dynatek Technologies",
        color: '#ff2d36',
        type: "Defense Industry Corporation",
        image: "/images/logos/dynatek.png",
        sortType: SortType.RobotManufacturer,
        basedOn: "Raytheon",
        specialization: "",
        description: 
`One of the first corporations to be born in the Titan technology boom of the 21st century, **Dynatek** would become known for its highly-intelligent combat robots and masterminds used mainly by the Coalition's Heavenbreaker Initiative. They are the definition of "military-industrial complex". 

Dynatek started as an HVAC installation company known as the *Dynamic Heating Company*, but pivoted into robotics after being offered a lucrative government contract.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },
    {
        id: "maxwell",
        name: "Maxwell Control Systems",
        image: "/images/logos/maxwell.svg",
        color: "#ff4208",
        type: "Defense & High-Intellect Systems",
        description: 
`**Maxwell** was a large and important cybernetics corporation, often producing experimental systems for government and military organizations. Notoriously, they designed intelligent weaponry: guided missiles, automated gunships, warhead controllers, and more. Less notoriously, they created some of the first Western neuromorphs based on Soviet designs for the military, although they did little to make it a commercial success.

Maxwell produced products in most other industries, such as standardized intelligent parts for autohomes, vehicles, and construction. They often competed for government contracts with their primary direct rival Dynatek. Their designers were also fond of wood-paneling.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "Honeywell, Xerox",
        examples: [{
            name: "Operator COBALT and STONEWALL",
            type: RobotExampleType.Link,
            target: "/posts/two-lords-cobalt",
            description: "A mastermind and their walker bodyguard."
        }]
    },
    {
        id: "redmond",
        image: "/images/logos/redmond.svg",
        color: "#ff4208",
        name: "Redmond Cybernetics",
        type: "Major Technology Corporation",
        description:
`A pioneer in the cybernetics field, **Redmond** made its reputation with business-facing robotics, computers, and software in the 1990s. As BBM's primary competitor for over a century, Redmond sold itself on their cleaner user-experience and high customizability.

Redmond was known in household robotics, but they tended to remain business-facing, preferring to sell their software such as Moto Operating System to consumer-facing companies.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "Microsoft",
        examples: [{
            name: "GORDON",
            type: RobotExampleType.Link,
            target: "/posts/redmond-gordon",
            description: "Advertisement depicts a Redmond interfacer."
        }]
    },
    {
        id: "maple",
        name: "Maple Cybernetic",
        image: "/images/logos/maple.png",
        color: "#ffc251",
        type: "Major Technology Corporation",
        description: 
        `**Maple** was a unique corporation famous across the entire System for their user-friendly electronics and invention of the teleindexer, a mobile neuromorphic tablet. It was often considered to be the most valuable brand in existence, although BBM rivaled that claim. They were pioneers in human-neuromorph interaction going back to their roots in the 1980s with ISAAC, the first robot that could hold a natural conversation. 
        
Maple's products were notorious for being underpowered and expensive, but somehow, that didn't stop people from buying them.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "Apple",
        examples: [
            {
                type: RobotExampleType.Link,
                name: "ISAAC",
                target: "/posts/maple-cybernetic-isaac",
                description: "Advertisement depicts a Maple interfacer."
            },
            {
                type: RobotExampleType.Link,
                name: "PAL",
                target: "/posts/pal",
                description: "Advertisement depicts a Maple teleindexer tablet."
            }
        ]
    },
    {
        id: "klaus",
        name: "Klaus GmbH",
        color: "#ff4e17",
        image: "/images/logos/klaus.svg",
        type: "High-tech multinational",
        description: 
        `They called it precision German engineering. **Klaus**' robots were widely considered to be some of the highest quality and most advanced cybernetics in the System. Their user experience tended to be dated relative to their other Western counterparts, but the designs were robust.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "Braun, Siemens",
        examples: [
            {
                type: RobotExampleType.Link,
                name: "4096 Meister",
                target: "/posts/klaus-meister",
                description: "Image depicts a Klaus interfacer."
            }
        ]
    },
    {
        id: "vdl",
        name: "Vega-DeLuna Robotics",
        image: "/images/logos/vdl.png",
        color: "#9a453d",
        type: "Budget Robotics Brand",
        description: 
        `A notorious budget brand, **VDL** robots were dime-a-dozen and found just about everywhere, especially in landfills. Not that they were unreliable, they were just thrown out rather often.
        
It wasn't well known, but many other companies used standardized VDL parts in the construction of their own robots.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "Wal-Mart",
        examples: [
            {
                type: RobotExampleType.Link,
                name: "DTEK",
                target: "/posts/sri-brochure",
                description: "Brochure depicts a VDL interfacer."
            }
        ]
    },
    /*{
        id: "vaughn",
        name: "Vaughn",
        type: "Medical & Transit Tech Conglomerate",
        description:
        `Vaughn was a massive technology conglomerate that produced specialized equipment for a number of industries, but mostly in the medical and transportation fields. If you were a doctor or metro technician, you'd probably see a decent number of Vaughn systems. 
        
Their main competitor was Kaizen Corp.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },*/
    {
        id: "kelso-elite",
        name: "Kelso Elite by Schafers",
        image: "/images/logos/kelso.svg",
        color: "#4777da",
        type: "High-End Brand",
        description:
        `**Kelso Elite** was a brand created by the Schafers department store chain. Their machines were targetted for the office and household, but would also be used in many public spaces.
        
Kelso products often incorporated wood-paneling in their design, considered luxurious compared to similar brands.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "Kenmore (Sears)"
    },
    {
        id: "eniz",
        name: "ENIZ Industrial",
        image: "/images/logos/eniz.png",
        color: "#ffce00",
        type: "Industrial Robotics Company",
        description:
        `**ENIZ** was an industrial and logistics company, well-known for its massive construction and transportation machines. Their extensive line of cargo haulers could be seen operating anywhere from spaceports to the depths of wilderness.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "CAT",
        examples: [
            {
                type: RobotExampleType.Link,
                name: "Mastodon Ultraheavy",
                target: "/posts/mastodon-ultraheavy",
                description: "Advertisement depicts an ENIZ cargo walker."
            }
        ]
    },
    {
        id: "emerson",
        name: "Emerson Powered Industrial Solutions",
        type: "Industrial Robotics Company",
        image: "/images/logos/emerson.svg",
        color: "#74931f",
        basedOn: "John Deere",
        description:
        `While they were best known for their ubiquitous industrial systems, ranging from agricultural combines to warehouse stackers, **Emerson** also dabbled in rugged consumer robots. 
        
Around the time of the Unexpected Interrupt, the corporation was attempting to break through to the consumer market with offerings such as the Emerson 3051D, a rugged interfacer based on the classic BBM design.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },
    {
        id: "insite",
        name: "Integrated Silicon Technologies",
        color: "#1ea2ff",
        image: "/images/logos/insite.svg",
        type: "Neuromorphic Components Manufacturer",
        description:
        `**Insite** was the Coalition's leading manufacturer of advanced neuromorphic and computing components. They rarely designed their own machines, instead opting to design parts for robots and computers created by other businesses and tech-savvy consumers. 

Insite would design the occasional robot or mastermind as a testbed or demonstrator for a new technology, which are some of the rarest models in existence.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "Intel"
    },
    /*{
        id: "hikari",
        name: "Hikari Telecom",
        type: "Syndicate",
        description: "",
        affiliation: Affiliation.Pact,
        tags: []
    },*/
    {
        id: "kasawi",
        name: "Kasawi Heavy Industries",
        color: "#ff9b44",
        image: "/images/logos/kasawi.svg",
        type: "Industrial Syndicate",
        description: `**Kasawi Heavy Industries** was a massively influential corporation originating in Japan. As the state's designated industrial syndicate, they were often contracted to manufacture robots, space infrastructure, and much else for the Pact government and other syndicates. Their machines were the most common designs in the battlefields of Nobody's War in the late 21st century.`,
        affiliation: Affiliation.Pact,
        tags: [],
        basedOn: "Kawasaki, Komatsu",
        examples: [
            {
                type: RobotExampleType.Link,
                name: "Kasawi Type 750 Warmaster",
                target: "/posts/lazarus-warwalker",
                description: "Report depicts a Kasawi combat walker."
            },
            {
                type: RobotExampleType.Link,
                name: "Kasawi Kunshu",
                target: "/posts/kasawi-kunshu",
                description: "Advertisement depicts a Kasawi economy car."
            }
        ]
    },
    {
        id: "kaizen",
        name: "Kaizen Computing Solutions",
        color: "#be0707",
        image: "/images/logos/kaizen.svg",
        type: "High-Intellect & Medical Electronics",
        description: `Starting life as an electrics company in the late 19th century, **Kaizen** was responsible for a wide variety of developments long before they ever began to explore neuromorphics. They were one of the first Japanese corporations to jump into robotics when neuromorphs entered the field in the mid-1970s.
        
Kaizen was best known for their advanced, feature-rich neuromorphs and domination over the medical technology field, often finding themselves in fierce competition with the Western-based Vaughn Corporation.`,
        affiliation: Affiliation.Pact,
        tags: [],
        basedOn: "Toshiba",
        examples: [{
            name: "K3200 Satellite & T250",
            type: RobotExampleType.Link,
            target: "https://www.patreon.com/posts/kaizen-k3200-85662582",
            description: "Advertisement includes an interfacer with a perched drone."
        }]
    },
    {
        id: "hokota",
        name: "Hokota Group",
        color: "#e21428",
        image: "/images/logos/hokota.png",
        type: "Industrial Syndicate",
        description: `The **Hokota Group** was a multinational conglomerate which began sometime after World War 2 as an automotive designer and manufacturer. The company soon expanded into aeronautics and other powered equipment, setting the stage for a rapid entry into nuclear-powered aircraft and robotics by the 1970s and 1980s. They were the world's largest manufacturer of antigravity-enabled technologies, using the nyxium found on Mars.
        
Hokota stood out against its competitors with its culture of extreme risk-taking and innovation. The company hosted a number of competitions in fields ranging from sports racing to neuromorphic battle, and was well known for displaying dozens of prototypes in an annual conference.`,
        affiliation: Affiliation.Pact,
        tags: [],
        basedOn: "Honda, Hitachi",
        examples: [{
            name: "SANGUINE HAZE & J-1108",
            type: RobotExampleType.Link,
            target: "/posts/two-lords-sanguine",
            description: "A mastermind and an interfacer standing guard."
        }]
    },
    {
        id: "saito",
        name: "Saito Computer",
        image: "/images/logos/saito.png",
        color: "#095aff",
        type: "Affordable Consumer Electronics Company",
        description: `**Saito Computer** was an innovator in display technology before branching out into other consumer electronics. They were known best for their affordable and reliable electronics, such as the intelligent Saito Watch, a teleindexer for the wrist created in the 2030s. Saito was also a great innovator in the video game space, being one of the largest producers of laser-based virtual reality in the late 21st century.
        
They are considered a direct competitor to Micro.`,
        affiliation: Affiliation.Pact,
        tags: [],
        basedOn: "Casio, Sony",
        examples: [{
            name: "MAX Videocassette Player",
            type: RobotExampleType.Link,
            target: "/posts/internal-use-only",
            description: "A Saito-made audiovisual system."
        }]
    },
    {
        id: "micro",
        name: "Micro Electrics",
        image: "/images/logos/micro.png",
        color: "#cd022b",
        type: "Consumer and business electronics company",
        description: `**Micro Electrics Corporation** was a general consumer products manufacturer, deriving its name from the microfilm, one of their first commercial products. They began with producing radios, cameras, television sets, and calculators before expanding further into all electronics and eventually neuromorphics in the 1980s. Their products are typically considered low-cost and reliable, and are found all over the System.
        
They are considered a direct competitor to Saito.`,
        affiliation: Affiliation.Pact,
        tags: [],
        basedOn: "Sharp",
        examples: [{
            name: "TZ-90B Portable Commander PC",
            type: RobotExampleType.Link,
            target: "/posts/portable-commander",
            description: "On-line advertisement for a MICRO specialty microcomputer."
        }]
    },
    {
        id: "raz",
        name: "RAZ",
        image: "/images/logos/raz.png",
        color: "#e81c2c",
        type: "State-Owned Industrial Association",
        description: `Formed by state order during World War 2, the **Ratamkan Automobile Plant** was created to mass-produce military vehicles for the Soviet Union. After the war, RAZ became the nation's largest automotive manufacturer, encompassing at least a dozen manufacturing facilities and an in-house engineering design team. 

In the early 1980s, RAZ's plants were assigned to design and construct many of the nation's neuromorphic robots, especially those with an industrial purpose. They were well known for their production of hardy Venusian vehicles and robots.`,
        affiliation: Affiliation.Union,
        tags: [],
        basedOn: "MAZ",
        examples: [{
            name: "RAZ-G1105 (gene harvester)",
            type: RobotExampleType.Link,
            target: "/posts/hello-from-venus",
        }]
    },
    /*{
        id: "rosum",
        name: "Rosum Robotika",
        type: "Design Bureau",
        description: "",
        affiliation: Affiliation.Union,
        tags: ["robot manufacturer"]
    },*/
]