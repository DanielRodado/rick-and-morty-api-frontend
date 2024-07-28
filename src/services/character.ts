import type { Character, Response } from "../types/characterApi";
import axios from "./axios";

export async function getAllCharacters() {
    const data = (await axios.get("/character")).data;
    return data as Response;
}

export async function getLimitCharacters(limit: number) {
    const data = await getAllCharacters();
    return data.results.filter((character) => character.id <= limit) as Character[];
}
