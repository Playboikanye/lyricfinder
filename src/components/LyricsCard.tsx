import { Music, Copy, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface LyricsCardProps {
  title: string;
  artist: string;
  lyrics: string;
  language?: string;
}

export const LyricsCard = ({ title, artist, lyrics, language }: LyricsCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(lyrics);
    setCopied(true);
    toast.success("Lyrics copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in-50 slide-in-from-bottom-4">
      <CardHeader className="border-b border-border pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
              <Music className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-2xl mb-1">{title}</CardTitle>
              <p className="text-muted-foreground">{artist}</p>
              {language && (
                <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                  {language}
                </span>
              )}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopy}
            className="hover:bg-secondary"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="whitespace-pre-wrap text-foreground leading-relaxed">
          {lyrics}
        </div>
      </CardContent>
    </Card>
  );
};
