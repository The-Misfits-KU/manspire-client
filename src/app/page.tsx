"use client";

import { client } from "./client";
import { Button } from "@/components/ui/button";
import {
  ConnectButton,
  lightTheme,
  MediaRenderer,
  useActiveAccount,
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
import { useReadContract } from "thirdweb/react";

import { prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { useState } from "react";
import { contract } from "./constants/contract";
import { upload } from "thirdweb/storage";

export default function Home() {
  const account = useActiveAccount();
  const { mutate: sendTransaction } = useSendTransaction();

  const [_name, setName] = useState<string>("");
  const [_bio, setBio] = useState<string>("");

  const [creating, setCreating] = useState<boolean>(false);

  const createAccount = () => {
    setCreating(true);
    const transaction = prepareContractCall({
      contract,
      method: "function registerUser(string _name, string _bio)",
      params: [_name, _bio],
    });
    sendTransaction(transaction);
    setCreating(false);
  };
  const [ipfsURL, setIpfsURL] = useState<string>("");

  const { data: user, isPending: isUserPending } = useReadContract({
    contract,
    method:
      "function getUser(address _user) view returns (string, string, uint256, uint256)",
    params: [account?.address as string],
  });

  const [image, selectedImage] = useState<File | null>(null);

  const uploadData = async () => {
    const uri = await upload({
      client, // thirdweb client
      files: [image as File],
    });
    setIpfsURL(uri);
  };
  if (isUserPending) <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="flex flex-col sm:flex-row gap-2 sm:space-x-4">
                <ConnectButton
                  client={client}
                  theme={lightTheme()}
                  detailsButton={{
                    style: {
                      maxHeight: "50px",
                    },
                  }}
                  onConnect={(account) => {
                    console.log(account.getAccount());
                  }}
                />
                {/* upload image button */}
                <Input
                  type="file"
                  onChange={(e) => {
                    if (e.target.files) {
                      selectedImage(e.target.files[0]);
                    }
                  }}
                />
                <Button onClick={uploadData}>Upload</Button>

                {account?.address ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Sign In/Sign Up</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Create Profile</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Elon Musk"
                            className="col-span-3"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="bio" className="text-right">
                            Bio
                          </Label>
                          <Input
                            id="bio"
                            placeholder="CEO of Dogecoin"
                            className="col-span-3"
                            onChange={(e) => setBio(e.target.value)}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          disabled={creating}
                          onClick={createAccount}
                          type="submit"
                        >
                          Create
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ) : null}
              </div>
            </div>
          </div>
        </section>
        <MediaRenderer client={client} src={ipfsURL} />
      </main>
    </div>
  );
}
