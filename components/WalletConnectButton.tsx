"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WalletConnectButton = () => {
  const { publicKey } = useWallet();

  return (
    <div>
      {publicKey ? (
        <p>
          Connected: {publicKey.toBase58().slice(0, 4)}...
          {publicKey.toBase58().slice(-4)}
        </p>
      ) : (
        <WalletMultiButton />
      )}
    </div>
  );
};

export default WalletConnectButton;
