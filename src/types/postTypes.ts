import type { CollectionEntry } from "astro:content"

export enum PostType {
  Lore = "lore",
  Introduction = "introduction",
  Game = "game",
  Announcement = "announcement",
  Secret = "secret",
  Database = "database",
  Creation = "creation",
}

// export type PostType =
//   | "lore"
//   | "introduction"
//   | "game"
//   | "announcement"
//   | "secret"
//   | "database"
//   | "creation"

export interface ProcessedPost {
  post:
    | CollectionEntry<"lore">
    | CollectionEntry<"introduction">
    | CollectionEntry<"announcement">
    | CollectionEntry<"secret">
    | CollectionEntry<"database">
    | CollectionEntry<"introduction">
    | CollectionEntry<"creation">
  searchData: string
  processedThumbImage: any
}
