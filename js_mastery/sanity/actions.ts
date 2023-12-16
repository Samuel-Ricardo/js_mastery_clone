import { groq } from "next-sanity";
import { readClient } from "./lib/client";

interface GetResoucesParams {
    query: string;
    category: string;
    page: string;
}

export const getResourcesPlaylist = async() => {
    try {
        const resources = await readClient.fetch(
            groq`*[_type == "resourcePlaylist"] {
                _id,
                title,
                resources[0...6]->{
                title,
                _id,
                downloadLink,
                "image": poster.asset->url,
                views,
                category
                }    
            }`
        );
        
        return resources;
    } catch(error) {  console.log(error) }
}

