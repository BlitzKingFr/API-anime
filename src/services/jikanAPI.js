const url = "https://api.jikan.moe/v4";

export async function fetchAnimeByName(name) {
  try {
    const response = await fetch(`${url}/anime?q=${encodeURI(name)}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return[];
  }
}
