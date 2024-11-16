"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contract } from "@/app/constants/contract";
import { MediaRenderer } from "thirdweb/react";
import {
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSendTransaction } from "thirdweb/react";
import { useState } from "react";
import { prepareContractCall } from "thirdweb";

export default function ProfilePage() {
  const account = useActiveAccount();
  const { data: user, isPending: isUserPending } = useReadContract({
    contract,
    method:
      "function getUser(address _user) view returns ((address wallet, string name, string bio, address[] followers, address[] following))",
    params: [account?.address as string],
  });
  const { mutate: sendTransaction } = useSendTransaction();
  const [_title, setTitle] = useState<string>("");
  const [_body, setBody] = useState<string>("");
  const [_featuredImage, setFeaturedImage] = useState<string>("");
  const [_files, setFiles] = useState<string>("");

  const createPost = () => {
    const transaction = prepareContractCall({
      contract,
      method:
        "function createPost(string _title, string _body, string _files, string _featuredImage)",
      params: [_title, _body, _files, _featuredImage],
    });
    console.log({
      title: _title,
      body: _body,
      files: _files,
      featuredImage: _featuredImage,
    });
    console.log(transaction);
    sendTransaction(transaction);
  };

  const { data: posts, isPending: isPostsPending } = useReadContract({
    contract,
    method:
      "function getPostByUser(address _user) view returns ((string title, string body, string files, string featuredImage, address userId, uint256 id)[])",
    params: [account?.address as string],
  });

  if (isUserPending && isPostsPending) <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Card className="max-w-2xl mx-auto shadow-md">
        <CardContent className="p-6">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">{user?.name}</h1>
            <p className="text-gray-600 mb-4">{user?.bio}</p>

            <div className="flex flex-row justify-between">
              <p>
                Followers: <span>{user?.followers.length}</span>
              </p>
              <p>
                Following: <span>{user?.following.length}</span>
              </p>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Create Post</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create Post</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-y-4">
                <div className=" items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="How to start innovating"
                    className="col-span-3"
                  />
                </div>
                <div>
                  <Label htmlFor="body" className="text-right">
                    Body
                  </Label>
                  <Textarea
                    id="body"
                    onChange={(e) => {
                      setBody(e.target.value);
                    }}
                    placeholder="Start thinking with first principle..."
                    cols={20}
                    rows={15}
                  />
                </div>
                {/* upload featuredImage */}
                <div>
                  <Label htmlFor="featuredImage" className="text-right">
                    Featured Image
                  </Label>
                  <Input
                    id="featuredImage"
                    onChange={(e) => console.log(e.target.value)}
                    type="file"
                  />
                </div>
                {/* upload files */}
                <div>
                  <Label htmlFor="file" className="text-right">
                    Files (optional)
                  </Label>
                  <Input
                    id="file"
                    onChange={(e) => console.log(e.target.value)}
                    type="file"
                  />
                </div>
              </div>

              <DialogFooter>
                <Button onClick={createPost} type="submit">
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="mt-8">
            {JSON.stringify(posts)}
            <h2 className="font-semibold text-2xl mb-4">Posts</h2>
            {posts?.map((post: any) => (
              <div
                key={post.id}
                className="mb-4 border border-gray-300 shadow-md p-4 rounded-lg"
              >
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p>{post.body}</p>
                {post.featuredImage && (
                  <MediaRenderer src={post.featuredImage} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
