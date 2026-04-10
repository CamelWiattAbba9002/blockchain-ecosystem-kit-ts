import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

export class SolanaRpcClient {
  private connection: Connection;

  constructor(rpc = "https://api.mainnet-beta.solana.com") {
    this.connection = new Connection(rpc);
  }

  public getBalance = async (address: string): Promise<number> => {
    const pk = new PublicKey(address);
    const bal = await this.connection.getBalance(pk);
    return bal / LAMPORTS_PER_SOL;
  };

  public getLatestBlock = async (): Promise<number> => {
    return this.connection.getSlot();
  };
}
