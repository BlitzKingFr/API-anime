import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAnimeById } from "../services/jikanAPI";

function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAnime() {
      setLoading(true);
      try {
        const data = await fetchAnimeById(id);
        setAnime(data);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      } finally {
        setLoading(false);
      }
    }
    getAnime();
  }, [id]);

  if (loading) return <p className="loading-text">Loading anime details...</p>;

  if (!anime) return <p className="error-text">Anime details not found.</p>;
  return (
    <div className="anime-details">
      <h1>{anime.title}</h1>
      <img src={anime.images?.jpg?.image_url} alt={anime.title} />
      <p><strong>Episodes:</strong> {anime.episodes || "Unknown"}</p>
      <p><strong>Score:</strong> {anime.score || "N/A"}</p>
      <p><strong>Synopsis:</strong> {anime.synopsis || "No synopsis available."}</p>
    </div>
  );
}

export default AnimeDetails;
