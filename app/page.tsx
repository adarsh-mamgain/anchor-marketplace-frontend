import WalletConnectButton from "../components/WalletConnectButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Solana NFT Marketplace</h1>
      <WalletConnectButton />
      <p className="text-xl">Connect your wallet to get started!</p>
    </main>
  );
}
