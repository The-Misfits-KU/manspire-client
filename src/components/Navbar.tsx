"use client";
import { client } from "@/app/client";
import Link from "next/link";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import Image from "next/image";
import thirdwebIcon from "@public/thirdweb.svg";
import { Shield } from "lucide-react";

const Navbar = () => {
  const account = useActiveAccount();

  return (
    <div className="flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Shield className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">Manspire</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <ConnectButton
            client={client}
            theme={lightTheme()}
            detailsButton={{
              style: {
                maxHeight: "50px",
              },
            }}
          />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
