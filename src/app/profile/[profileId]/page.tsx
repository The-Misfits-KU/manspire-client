"use client";

import { useParams } from "next/navigation";
import {
  useReadContract,
  useActiveAccount,
  useSendTransaction,
} from "thirdweb/react";
import { prepareContractCall } from "thirdweb";

import { contract } from "@/app/constants/contract";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useStorageUpload, MediaRenderer } from "@thirdweb-dev/react";

export default function UserProfilePage() {
  const { profileId } = useParams();
  const account = useActiveAccount();
  const { data: user, isPending: isUserPending } = useReadContract({
    contract,
    method:
      "function getUser(address _user) view returns ((address wallet, string name, string bio, address[] followers, address[] following))",
    params: [profileId as string],
  });

  const { mutate: sendTransaction } = useSendTransaction();

  const followProfile = () => {
    const transaction = prepareContractCall({
      contract,
      method: "function followUser(address _userToFollow)",
      params: [profileId as string],
    });
    sendTransaction(transaction);
  };

  const { mutateAsync: upload } = useStorageUpload();

  // const uploadData = () => {
  //   // Get any data that you want to upload
  //   const dataToUpload = "Hello World";

  //   // And upload the data with the upload function
  //   const uris = await upload({ data: dataToUpload });
  // };

  return (
    <div className="w-full mx-auto max-w-7xl px-4 mt-16 sm:px-6 lg:px-8">
      <div className="w-full grid grid-cols-3 gap-4">
        <Card className="max-w-2xl mx-auto shadow-md">
          <CardContent className="p-6">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">{user?.name}</h1>
              <p className="text-gray-600 mb-4">{user?.bio}</p>
              <div>
                <MediaRenderer src="ipfs://QmamvVM5kvsYjQJYs7x8LXKYGFkwtGvuRvqZsuzvpHmQq9/0" />
              </div>

              <div className="flex flex-row justify-between">
                <p>
                  Followers: <span>{user?.followers.length}</span>
                </p>
                <p>
                  Following: <span>{user?.following.length}</span>
                </p>
              </div>
            </div>
            {account?.address !== profileId && (
              <Button
                variant={
                  // @ts-ignore
                  user?.followers.includes(account?.address)
                    ? "outline"
                    : "default"
                }
                onClick={followProfile}
              >
                {/* @ts-ignore */}
                {user?.followers.includes(account?.address)
                  ? "Unfollow"
                  : "Follow"}
              </Button>
            )}
            <div>
              <h2 className="font-semibold text-2xl">Posts</h2>
              <div>Post</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
