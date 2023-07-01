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
    name: string
    sortType?: SortType
    type: string
    description: string
    specialization?: string
    affiliation: Affiliation
    tags: string[]
}

// You, the visitor.
export const Organizations: Organization[] = [
    {
        id: "bbm",
        name: "Berkeley Business Machines (BBM)",
        sortType: SortType.RobotManufacturer,
        type: "Cybernetics Conglomerate",
        description: 
`The most prolific technology company in the Coalition, BBM specialized in just about everything and made a huge number of advances in the cybernetic sciences. 

Their robots were ubiquitous, but mostly targetted towards businesses and government organizations.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },
    {
        id: "dynatek",
        name: "Dynatek",
        type: "Corporation",
        sortType: SortType.RobotManufacturer,
        specialization: "",
        description: 
`One of the first companies to be born in the Titan tech boom, \`Dynatek\` was an advanced cybernetics company known for its intelligent security robots and mastermind designs. 

*Fun fact*: Dynatek began as the Dynamic Heating Company, but pivoted into cybernetics after a lucrative government contract. Since then, they were a major contractor for the Coalition military. UNISERVE was designed during one of these contracts.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },
    {
        id: "maxwell",
        name: "Maxwell Control Systems",
        type: "Corporation",
        description: 
`Maxwell was a small but important cybernetics corporation, usually producing intelligent systems for government and military organizations.

They would often compete for contracts with Dynatek. They also really liked wood-paneling.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },
    {
        id: "redmond",
        name: "Redmond Cybernetics",
        type: "Corporation",
        description:
`A pioneer in the cybernetics field, Redmond made its reputation with business-facing robotics, computers, and software. As BBM's primary competitor for over a century, Redmond sold itself on their cleaner user-experience and high customizability. 

Redmond is known in household robotics, but they tended to remain business-facing, selling their neuromorphic software to consumer-facing companies.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },
    {
        id: "maple",
        name: "Maple Cybernetic",
        type: "Corporation",
        description: 
        `Maple was a one-of-a-kind brand in the Coalition and indeed across the world. They were pioneers in human-neuromorph interaction, and were well known for their expensive but highly personable machines.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },
    {
        id: "vdl",
        name: "Vega-DeLuna Robotics",
        type: "Corporation",
        description: 
        `The most budget of budget brands that existed, VDL robots were dime-a-dozen and found just about everywhere, especially in landfills. Not that they were unreliable, they were just thrown out rather often.
        
It wasn't well known, but many other companies used standardized VDL parts in the construction of their own robots.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },
    {
        id: "vaughn",
        name: "Vaughn",
        type: "Corporation",
        description:
        `Vaughn was a massive technology conglomerate that produced specialized equipment for a number of industries, but mostly in the medical and transportation fields. If you were a doctor or metro technician, you'd probably see a decent number of Vaughn systems. 
        
Their main competitor was Kaizen Corp.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },
    {
        id: "kelso-elite",
        name: "Kelso Elite by Schafers",
        type: "Brand",
        description:
        `Kelso Elite was a brand used by the Schafers department store chain. Their machines were targetted for the office and household, but would also be used in many public spaces. 
        
They would often be wood-paneled in their design, considered luxurious compared to similar brands.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },
    {
        id: "eniz",
        name: "ENIZ Industrial Robotics",
        type: "Company",
        description:
        `ENIZ was an industrial company, well-known for its massive construction and transportation machines. Their extensive line of cargo haulers could be seen operating anywhere from spaceports to the depths of wilderness.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },
    {
        id: "emerson",
        name: "Emerson",
        type: "Corporation",
        description:
        `While they were best known for their ubiquitous industrial systems, often found in warehouses across the System, Emerson also dabbled in rugged consumer robots.`,
        affiliation: Affiliation.Coalition,
        tags: ["robot manufacturer"]
    },
    {
        id: "hikari",
        name: "Hikari Telecom",
        type: "Syndicate",
        description: "",
        affiliation: Affiliation.Pact,
        tags: []
    },
    {
        id: "kasawi",
        name: "Kasawi Heavy Industries",
        type: "Syndicate",
        description: "",
        affiliation: Affiliation.Pact,
        tags: []
    },
    {
        id: "kaizen",
        name: "Kaizen",
        type: "Syndicate",
        description: "",
        affiliation: Affiliation.Pact,
        tags: []
    },
    {
        id: "hokota",
        name: "Hokota Group",
        type: "Syndicate",
        description: "",
        affiliation: Affiliation.Pact,
        tags: []
    },
    {
        id: "saito",
        name: "Saito Computer",
        type: "Syndicate",
        description: "",
        affiliation: Affiliation.Pact,
        tags: []
    },
    {
        id: "micro",
        name: "Micro Electrics",
        type: "Syndicate",
        description: "",
        affiliation: Affiliation.Pact,
        tags: []
    },
    {
        id: "rosum",
        name: "Rosum Robotika",
        type: "Design Bureau",
        description: "",
        affiliation: Affiliation.Union,
        tags: ["robot manufacturer"]
    },
]