/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Hpap7EiOGHj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="overflow-hidden rounded-lg bg-background shadow-md">
          <div className="flex items-center border-b p-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Link href="#" className="text-sm font-medium" prefetch={false}>
                acme_inc
              </Link>
            </div>
            <div className="ml-auto">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <MoveHorizontalIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="aspect-square">
            <img
              src="/placeholder.svg"
              alt="Post Image"
              width={600}
              height={600}
              className="h-full w-full object-cover"
              style={{ aspectRatio: "600/600", objectFit: "cover" }}
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="h-4 w-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="h-4 w-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <SendIcon className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <BookmarkIcon className="h-4 w-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium" prefetch={false}>
                acme_inc
              </Link>
              This is a sample caption for the post.
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-background shadow-md">
          <div className="flex items-center border-b p-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Link href="#" className="text-sm font-medium" prefetch={false}>
                acme_inc
              </Link>
            </div>
            <div className="ml-auto">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <MoveHorizontalIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="aspect-square">
            <img
              src="/placeholder.svg"
              alt="Post Image"
              width={600}
              height={600}
              className="h-full w-full object-cover"
              style={{ aspectRatio: "600/600", objectFit: "cover" }}
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="h-4 w-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="h-4 w-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <SendIcon className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <BookmarkIcon className="h-4 w-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium" prefetch={false}>
                acme_inc
              </Link>
              This is a sample caption for the post.
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-background shadow-md">
          <div className="flex items-center border-b p-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Link href="#" className="text-sm font-medium" prefetch={false}>
                acme_inc
              </Link>
            </div>
            <div className="ml-auto">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <MoveHorizontalIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="aspect-square">
            <img
              src="/placeholder.svg"
              alt="Post Image"
              width={600}
              height={600}
              className="h-full w-full object-cover"
              style={{ aspectRatio: "600/600", objectFit: "cover" }}
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="h-4 w-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="h-4 w-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <SendIcon className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <BookmarkIcon className="h-4 w-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium" prefetch={false}>
                acme_inc
              </Link>
              This is a sample caption for the post.
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-background shadow-md">
          <div className="flex items-center border-b p-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Link href="#" className="text-sm font-medium" prefetch={false}>
                acme_inc
              </Link>
            </div>
            <div className="ml-auto">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <MoveHorizontalIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="aspect-square">
            <img
              src="/placeholder.svg"
              alt="Post Image"
              width={600}
              height={600}
              className="h-full w-full object-cover"
              style={{ aspectRatio: "600/600", objectFit: "cover" }}
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="h-4 w-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="h-4 w-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <SendIcon className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <BookmarkIcon className="h-4 w-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium" prefetch={false}>
                acme_inc
              </Link>
              This is a sample caption for the post.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BookmarkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
