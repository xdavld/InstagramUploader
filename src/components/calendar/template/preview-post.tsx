import React, { useEffect } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreVertical, HeartIcon, MessageCircleIcon, SendIcon } from "lucide-react";

interface PreviewPostProps {
  urlProfile: string;
  urlPost: string;
  caption: string;
  userName: string;
  type: string;
}

export function PreviewPost({ urlProfile, urlPost, caption, userName, type }: PreviewPostProps) {
  return (
    <Card className="w-full max-w-sm">
      {/* Header */}
      <CardHeader className="p-4">
        <div className="flex flex-row items-center">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src={urlProfile} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <span>{userName}</span>
        </div>
        <div className="flex items-center gap-2 ml-auto mt-0">
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-4 h-4" />
            <span className="sr-only">More options</span>
          </Button>
        </div>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="p-0">
        {type === "image" ? (
            <img src={urlPost} alt="Post" className="object-cover aspect-square w-full" />
            ) : (
            <video
                className="object-cover aspect-square"
                src={urlPost}
                controls
                loop
            />
        )}
      </CardContent>

      {/* Footer */}
      <CardFooter className="grid gap-2 p-2 pb-4">
        {/* Actions */}
        <div className="flex items-center w-full">
          <Button variant="ghost" size="icon">
            <HeartIcon className="w-4 h-4" />
            <span className="sr-only">Like</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircleIcon className="w-4 h-4" />
            <span className="sr-only">Comment</span>
          </Button>
          <Button variant="ghost" size="icon">
            <SendIcon className="w-4 h-4" />
            <span className="sr-only">Share</span>
          </Button>
          <div className="ml-auto flex items-center gap-1">
            <HeartIcon className="w-4 h-4 fill-primary" />
            <span className="text-sm"></span>
          </div>
        </div>

        {/* Caption */}
        <div className="px-2 text-sm w-full grid gap-1.5">
          <div>
            <span className="font-bold pe-1.5">{userName}</span>
            <span>{caption}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>comments</span>
          </div>
        </div>

        {/* Comment Input */}
        <div className="flex items-center gap-2 px-2">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src={urlProfile} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <Input
            placeholder="Add a comment..."
            className="flex-1 bg-transparent focus:ring-0 focus:border-transparent"
          />
          <Button variant="ghost" size="icon" className="text-primary">
            <HeartIcon className="w-4 h-4" />
            <span className="sr-only">Like</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}