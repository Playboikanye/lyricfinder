import { AlertCircle, ExternalLink } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const ApiSetup = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <Alert className="bg-secondary border-border">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>API Setup Required</AlertTitle>
        <AlertDescription className="mt-2 space-y-3">
          <p>
            To display lyrics, you need to integrate with a licensed lyrics API. Here are the recommended options:
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
              <div>
                <p className="font-semibold">Genius API</p>
                <p className="text-sm text-muted-foreground">Most popular, free tier available</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href="https://docs.genius.com/" target="_blank" rel="noopener noreferrer">
                  Docs <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
              <div>
                <p className="font-semibold">Musixmatch API</p>
                <p className="text-sm text-muted-foreground">Official lyrics provider</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href="https://developer.musixmatch.com/" target="_blank" rel="noopener noreferrer">
                  Docs <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
              <div>
                <p className="font-semibold">Lyrics.ovh</p>
                <p className="text-sm text-muted-foreground">Free, smaller database</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href="https://lyricsovh.docs.apiary.io/" target="_blank" rel="noopener noreferrer">
                  Docs <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
};
