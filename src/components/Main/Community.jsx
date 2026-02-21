import { useState } from "react"

import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import {
    Users,
    Send,
    MessageCircle,
    Heart,
} from "lucide-react"

import SelectTopic from '../Main/SelectTopic';

export default function Community({ children }) {

    // TEMP mock data � replace later with API
    const [posts, setPosts] = useState([
        {
            id: 1,
            user: "Rohan",
            text: "Anyone experienced knee pain after running?",
            likes: 4
        },
        {
            id: 2,
            user: "Meera",
            text: "Best diet tips for improving energy?",
            likes: 7
        }
    ])

    const [draft, setDraft] = useState("")
    const [topic, setTopic] = useState("")


    const submitPost = () => {

        if (!draft || !topic) return;

        setPosts((p) => [
            {
                id: Date.now(),
                user: "You",
                topic,
                text: draft,
                likes: 0
            },
            ...p
        ])

        setDraft("")
        setTopic("")

    }


    return (
        <Sheet>

            <SheetTrigger asChild>
                {children}
            </SheetTrigger>

            <SheetContent
                side="right"
                className="flex w-full flex-col p-0 sm:w-[420px]"
            >
                {/* HEADER */}
                <SheetHeader className="border-b p-4">
                    <SheetTitle className="flex items-center gap-2 text-xl">
                        <Users size={20} />
                        Community
                    </SheetTitle>
                </SheetHeader>


                {/* SCROLLABLE FEED AREA */}
                <div className="flex-1 space-y-4 overflow-y-auto p-4">

                    {/* You can inject more components here later */}

                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="space-y-2 rounded-xl border p-3"
                        >
                            <div className="flex justify-between text-sm text-gray-500">
                                <span className="font-semibold">
                                    {post.user}
                                </span>

                                <span className="flex items-center gap-1">
                                    <Heart size={14} />
                                    {post.likes}
                                </span>
                            </div>

                            {post.topic && (
                                <div className="text-xs font-semibold text-blue-600">
                                    {post.topic}
                                </div>
                            )}


                            <p className="text-sm">
                                {post.text}
                            </p>

                            <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-black">
                                <MessageCircle size={14} />
                                Reply
                            </button>
                        </div>
                    ))}

                </div>


                {/* POST INPUT AREA */}
                <div className="space-y-2 border-t p-3">

                    <SelectTopic
                        value={topic}
                        onChange={setTopic}
                    />
                    <Textarea
                        placeholder="What Your Question here..."
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                    />

                    <Button
                        className="w-full bg-black text-white hover:bg-black/80"
                        onClick={submitPost}
                    >
                        <Send size={16} className="mr-2" />
                        Post
                    </Button>

                </div>

            </SheetContent>
        </Sheet>
    )
}