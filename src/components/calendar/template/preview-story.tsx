import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreHorizontal, HeartIcon, MessageCircleIcon, SendIcon, Send, X } from "lucide-react";

interface PreviewPostProps {
  urlProfile: string;
  urlPost: string;
  userName: string;
}

export function PreviewStory({ urlProfile, urlPost, userName }: PreviewPostProps) {
  return (
    <Card className="w-full aspect-[9/16] max-w-sm flex flex-col justify-between bg-black text-white">
      {/* Header */}
      <CardHeader className="p-4">
        {/* Progress Bar */}
        <div className="relative w-full h-1 bg-white/30 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-white/60 transition-all duration-500"
            style={{ width: "60%" }} // Dynamische Breite in Prozent
          ></div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src={urlProfile} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <span className="text-white">{userName}</span>
          </div>
          <div className="flex items-center gap-2 ml-auto mt-0">
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="!w-6 !h-6 text-white" />
              <span className="sr-only">More options</span>
            </Button>
            <Button variant="ghost" size="icon">
              <X className="!w-6 !h-6 text-white" />
            </Button>
          </div>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="p-0 flex-grow flex items-center justify-center">
        <img src={urlPost} alt="Post" className="object-cover w-full"></img>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-2 pb-4">
        <div className="flex items-center gap-2 px-2 w-full">
          <Input
            placeholder="Add a comment..."
            className="flex-1 bg-transparent focus:ring-0 focus:border-transparent rounded-full text-white placeholder-white"
          />
          <Button variant="ghost" size="icon" className="text-white">
            <HeartIcon className="!w-6 !h-6" />
            <span className="sr-only">Like</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Send className="!w-6 !h-6" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
