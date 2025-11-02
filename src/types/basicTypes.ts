export type PlayerRace =
  | "Human"
  | "Dwarf"
  | "Halfling"
  | "High Elf"
  | "Wood Elf"
  | "Gnome"
  | "Ogre";

export const PlayerRaceEnum = {
  1: "Human",
  2: "Dwarf",
  3: "Halfling",
  4: "High Elf",
  5: "Wood Elf",
  6: "Gnome",
  7: "Ogre",
} as const;

export interface Characteristic {
  base: number; // Base value from species (e.g., 2d10+20 for Human WS)
  advances: number; // Advances from XP (e.g., +5 for WS)
}

// export type CharacteristicKey = keyof CharacteristicsComponent;
export type CharacteristicKey =
  | "WS"
  | "BS"
  | "S"
  | "T"
  | "I"
  | "AGI"
  | "DEX"
  | "INT"
  | "WP"
  | "FEL";
export type SkillType = "Basic" | "Advanced";
