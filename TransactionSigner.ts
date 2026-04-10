import { ethers } from "ethers";

export class TransactionSigner {
  private signer: ethers.Wallet;

  constructor(privateKey: string) {
    this.signer = new ethers.Wallet(privateKey);
  }

  public signMessage = async (message: string): Promise<string> => {
    return this.signer.signMessage(message);
  };

  public signTransaction = async (tx: {
    to: string;
    value: string;
    gasLimit: string;
  }): Promise<string> => {
    return this.signer.signTransaction(tx);
  };

  public getAddress = (): string => {
    return this.signer.address;
  };
}
