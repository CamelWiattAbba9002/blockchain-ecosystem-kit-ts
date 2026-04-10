import { ethers } from "ethers";

export class Web3WalletConnector {
  private provider: ethers.BrowserProvider | null = null;
  public address: string = "";

  public connectMetaMask = async (): Promise<boolean> => {
    if (!window.ethereum) {
      throw new Error("未检测到 MetaMask 钱包");
    }
    this.provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await this.provider.send("eth_requestAccounts", []);
    this.address = accounts[0];
    return true;
  };

  public getBalance = async (): Promise<string> => {
    if (!this.provider) throw new Error("钱包未连接");
    const balance = await this.provider.getBalance(this.address);
    return ethers.formatEther(balance);
  };

  public disconnect = (): void => {
    this.provider = null;
    this.address = "";
  };
}
