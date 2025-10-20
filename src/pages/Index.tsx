import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { LyricsCard } from "@/components/LyricsCard";
import { ApiSetup } from "@/components/ApiSetup";
import { Music2 } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [lyrics, setLyrics] = useState<{
    title: string;
    artist: string;
    lyrics: string;
    language?: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string, language: string) => {
    setIsLoading(true);
    setLyrics(null);

    // Simulate API call - Replace this with actual API integration
    setTimeout(() => {
      toast.info("Please integrate with a lyrics API to fetch actual lyrics");
      
      // Demo data
      setLyrics({
        title: query,
        artist: "Demo Artist",
        lyrics: `This is a demo.\n\nTo get actual lyrics, you need to:\n1. Sign up for a lyrics API (Genius, Musixmatch, or Lyrics.ovh)\n2. Add your API key\n3. Implement the API call\n\nThe UI is ready for integration!`,
        language: language !== "all" ? language : "English",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-12 space-y-4 animate-in fade-in-50 slide-in-from-top-4 duration-700">
            <div className="inline-block p-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg mb-4">
              <Music2 className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              LyricsFinder
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Search for lyrics from any song in English, Hindi, Malayalam, and more
            </p>
          </div>

          <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-150">
            <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-16">
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-16 space-y-4">
            <div className="h-16 w-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-muted-foreground">Searching for lyrics...</p>
          </div>
        )}

        {lyrics && !isLoading && (
          <div className="mt-8">
            <LyricsCard
              title={lyrics.title}
              artist={lyrics.artist}
              lyrics={lyrics.lyrics}
              language={lyrics.language}
            />
          </div>
        )}

        {!lyrics && !isLoading && <ApiSetup />}
      </div>
    </div>
  );
};

export default Index;
