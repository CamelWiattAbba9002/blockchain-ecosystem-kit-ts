export class Web3DappConnector {
  public chainId: number | null = null;
  public isConnected: boolean = false;

  public switchNetwork = async (chainId: number): Promise<boolean> => {
    if (!window.ethereum) return false;
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
      this.chainId = chainId;
      this.isConnected = true;
      return true;
    } catch {
      return false;
    }
  };
}
