"use client";

import { useReadContract } from "thirdweb/react";
import { client } from "./client";
import { Button } from "@/components/ui/button";
import { sepolia } from "thirdweb/chains";
import { getContract } from "thirdweb";
import { CampaignCard } from "@/components/CampaignCard";
import { CROWDFUNDING_FACTORY } from "./constants/contracts";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import { Shield, Users, MessageCircle, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

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
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Your Safe Space for Mental Health Support
                </h1>
                <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-muted-foreground">
                  Anonymous, confidential, and supportive. Get the help you
                  need, when you need it, without compromising your privacy.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:space-x-4">
                <ConnectButton
                  client={client}
                  theme={lightTheme()}
                  detailsButton={{
                    style: {
                      maxHeight: "50px",
                    },
                  }}
                />
                <Button className="w-full sm:w-auto p-6" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-12">
              Why Choose SafeSpace?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: Shield,
                  title: "100% Anonymous",
                  description:
                    "Your identity is protected. No personal information required.",
                },
                {
                  icon: Users,
                  title: "Peer Support",
                  description:
                    "Connect with others who understand what you're going through.",
                },
                {
                  icon: MessageCircle,
                  title: "24/7 Availability",
                  description:
                    "Access support anytime, anywhere. We're always here for you.",
                },
                {
                  icon: Heart,
                  title: "Professional Help",
                  description:
                    "Optional access to licensed therapists when you need it most.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-3 p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors"
                >
                  <feature.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-center text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                  Start Your Journey to Better Mental Health
                </h2>
                <p className="mx-auto max-w-[700px] text-base sm:text-lg text-muted-foreground">
                  Join our community today and take the first step towards a
                  healthier, happier you. It's free, confidential, and could
                  change your life.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-3">
                <p className="text-xs text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <Link
                    className="underline underline-offset-2 hover:text-primary"
                    href="#"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2023 Manspire. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
