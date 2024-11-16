"use client";

import { useReadContract, useActiveAccount } from "thirdweb/react";
import { contract } from "@/app/constants/contract";

export default function FeedPage() {
  const account = useActiveAccount();
  const { data: feed, isPending: isFeedPending } = useReadContract({
    contract,
    method:
      "function getUserFeed(address _user) view returns ((string title, string body, string files, string featuredImage, address userId, uint256 id)[])",
    params: [account?.address as string],
  });

  if (isFeedPending) return <div>Loading...</div>;

  return (
    <div>
      <h1>Feed Page</h1>
      <div>
        {feed &&
          feed.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <img src={post.featuredImage} alt={post.title} />
            </div>
          ))}
      </div>
    </div>
  );
}
