import { groq } from "next-sanity";


export const allProducts = groq`*[_type == "product"]`;
export const latest = groq`*[_type == "product"][0..3]`;
export const gearUp = groq`*[_type == "product"][4..7]`;