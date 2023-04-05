export interface ImageDetails {
    id: ImageId,
    src: string,
    aspectRatio: `${number}:${number}`
    width?: number
    height: number
}

export enum ImageId {
    Gordon = 'Gordon'
}

export const Images: ImageDetails[] = [
    {
        id: ImageId.Gordon,
        src: "/images/content/gordon.jpg",
        aspectRatio: "25:9",
        width: 3000,
        height: 4144
    }
]

/*
export const GordonImage = {
    id: "gordon",
    src: "/images/content/gordon.jpg",
    aspectRatio="25:9"
  }
export const LazarusImage = {
    id: "lazarus",
    src: "/images/content/lazarus.jpg",
    aspectRatio="25:9"
  }*/