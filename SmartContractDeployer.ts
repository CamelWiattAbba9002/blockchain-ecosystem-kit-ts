import { ethers } from "ethers";

export class SmartContractDeployer {
  private provider: ethers.JsonRpcProvider;
  private wallet: ethers.Wallet;

  constructor(rpcUrl: string, privateKey: string) {
    this.provider = new ethers.JsonRpcProvider(rpcUrl);
    this.wallet = new ethers.Wallet(privateKey, this.provider);
  }

  public deploy = async (
    abi: any[],
    bytecode: string,
    args: any[] = []
  ): Promise<string> => {
    const factory = new ethers.ContractFactory(abi, bytecode, this.wallet);
    const contract = await factory.deploy(...args);
    await contract.waitForDeployment();
    return await contract.getAddress();
  };
}
