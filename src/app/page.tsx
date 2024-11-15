"use client";

import { useReadContract } from "thirdweb/react";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";
import { getContract } from "thirdweb";
import { CampaignCard } from "@/components/CampaignCard";
import { CROWDFUNDING_FACTORY } from "./constants/contracts";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";


export default function Home() {
  // Your existing contract code
  const contract = getContract({
    client: client,
    chain: sepolia,
    address: CROWDFUNDING_FACTORY,
  });

  // const {
  //   data: campaigns,
  //   isLoadingCampaigns,
  //   refetch: refetchCampaigns,
  // } = useReadContract({
  //   contract: contract,
  //   method:
  //     "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name)[])",
  //   params: [],
  // });

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center space-y-8 px-4">
        {/* Hero Section */}
        <h1 className="text-6xl font-bold text-blue-900">
          Manspire
        </h1>
        
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
          Getting support should be easy
        </p>
        
        {/* Buttons Container */}

      
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">      
          {/* <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Get Started
          </button> */}
            <div className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                        <ConnectButton 
                            client={client}
                            // theme={lightTheme()}
                            detailsButton={{
                                style: {
                                    maxHeight: "50px",
                                }
                            }}
                        />
                    </div>
          <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
            Sign in as Therapist
          </button>
        </div>
      </div>
    </main>
  );
}