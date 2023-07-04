export enum Affiliation {
    Union = 'Union',
    Coalition = 'Coalition',
    Pact = 'Pact',
    None = ''
}

export enum SortType {
    RobotManufacturer = 'Robot Manufacturer'
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
    tags: string[]
    examples?: string[]
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
`The most prolific technology company in the Coalition, **BBM** specialized in just about everything and made a huge number of advances in the cybernetic sciences. 

Their robots were ubiquitous, but mostly targetted towards businesses and government organizations.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "IBM"
    },
    /*{
        id: "dynatek",
        name: "Dynatek Technologies",
        type: "Defense and Security Contractor",
        sortType: SortType.RobotManufacturer,
        specialization: "",
        description: 
`One of the first companies to be born in the Titan tech boom, \`Dynatek\` was an advanced cybernetics company known for its intelligent security robots and mastermind designs. 

*Fun fact*: Dynatek began as the Dynamic Heating Company, but pivoted into cybernetics after a lucrative government contract. Since then, they were a major contractor for the Coalition military. UNISERVE was designed during one of these contracts.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },*/
    {
        id: "maxwell",
        name: "Maxwell Control Systems",
        image: "/images/logos/maxwell.svg",
        color: "#ff4208",
        type: "Defense & High-Intellect Systems",
        description: 
`**Maxwell** was a small but important cybernetics corporation, usually producing intelligent systems for government and military organizations.

They would often compete for contracts with Dynatek. They also really liked wood-paneling.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "Honeywell"
    },
    {
        id: "redmond",
        image: "/images/logos/redmond.svg",
        color: "#ff4208",
        name: "Redmond Cybernetics",
        type: "Major Technology Corporation",
        description:
`A pioneer in the cybernetics field, **Redmond** made its reputation with business-facing robotics, computers, and software. As BBM's primary competitor for over a century, Redmond sold itself on their cleaner user-experience and high customizability. 

Redmond is known in household robotics, but they tended to remain business-facing, selling their neuromorphic software to consumer-facing companies.

### Aesthetic

Redmond robots are very practical.
`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "Microsoft",
        examples: [""]
    },
    {
        id: "maple",
        name: "Maple Cybernetic",
        image: "/images/logos/maple.png",
        color: "#ffbe00",
        type: "Major Technology Corporation",
        description: 
        `**Maple** was an extremely unique brand famous across the entire System. They were pioneers in human-neuromorph interaction going back to the 1980s, and were well known for their expensive machines.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "Apple"
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
        basedOn: "Braun, Siemens"
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
        basedOn: "Wal-Mart"
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
        `**ENIZ** was an industrial company, well-known for its massive construction and transportation machines. Their extensive line of cargo haulers could be seen operating anywhere from spaceports to the depths of wilderness.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"],
        basedOn: "CAT"
    },
    /*{
        id: "emerson",
        name: "Emerson",
        type: "Industrial and Office Electronics Company",
        description:
        `While they were best known for their ubiquitous industrial systems, often found in warehouses across the System, Emerson also dabbled in rugged consumer robots.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },*/
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
        description: "",
        affiliation: Affiliation.Pact,
        tags: [],
        basedOn: "Kawasaki, Komatsu"
    },
    {
        id: "kaizen",
        name: "Kaizen Computing Solutions",
        color: "#be0707",
        image: "/images/logos/kaizen.svg",
        type: "High-Intellect & Medical Electronics",
        description: "",
        affiliation: Affiliation.Pact,
        tags: [],
        basedOn: "Toshiba"
    },
    {
        id: "hokota",
        name: "Hokota Group",
        color: "#e21428",
        image: "/images/logos/hokota.png",
        type: "Industrial Syndicate",
        description: "",
        affiliation: Affiliation.Pact,
        tags: [],
        basedOn: "Honda, Hitachi"
    },
    {
        id: "saito",
        name: "Saito Computer",
        image: "/images/logos/saito.png",
        color: "#095aff",
        type: "Affordable Consumer Electronics Company",
        description: "",
        affiliation: Affiliation.Pact,
        tags: [],
        basedOn: "Casio, Sony"
    },
    {
        id: "micro",
        name: "Micro Electrics",
        image: "/images/logos/micro.png",
        color: "#cd022b",
        type: "Consumer and business electronics company",
        description: "",
        affiliation: Affiliation.Pact,
        tags: [],
        basedOn: "Sharp"
    },
    {
        id: "raz",
        name: "RAZ",
        image: "/images/logos/raz.png",
        color: "#e81c2c",
        type: "Consumer and business electronics company",
        description: "",
        affiliation: Affiliation.Union,
        tags: [],
        basedOn: "MAZ"
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