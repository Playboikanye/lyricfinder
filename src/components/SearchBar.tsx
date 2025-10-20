import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string, language: string) => void;
  isLoading?: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query, selectedLanguage);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            type="text"
            placeholder="Search for any song lyrics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-32 h-14 text-lg bg-card border-border focus-visible:ring-primary focus-visible:border-primary transition-all"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            {isLoading ? "Searching..." : "Search"}
          </Button>
        </div>
      </form>

      <div className="flex gap-3 justify-center flex-wrap">
        {["all", "english", "hindi", "malayalam"].map((lang) => (
          <Button
            key={lang}
            variant={selectedLanguage === lang ? "default" : "outline"}
            onClick={() => setSelectedLanguage(lang)}
            className={
              selectedLanguage === lang
                ? "bg-gradient-to-r from-primary to-accent"
                : ""
            }
          >
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );
};
