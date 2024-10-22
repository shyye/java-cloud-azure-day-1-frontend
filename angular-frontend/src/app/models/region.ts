import { Building } from "./building";
import { Character } from "./character";

export interface Region {
    id: number;
    name: string;
    buildings: Building[];
    residents: Character[];
}