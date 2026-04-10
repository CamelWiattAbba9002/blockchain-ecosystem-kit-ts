export class ChainIdValidator {
  private validChains = new Set([1, 5, 137, 80001, 56, 97, 43114, 43113]);

  public isValid = (chainId: number): boolean => {
    return this.validChains.has(chainId);
  };

  public getChainName = (chainId: number): string => {
    const map: Record<number, string> = {
      1: "Ethereum",
      5: "Goerli",
      137: "Polygon",
      56: "BSC",
    };
    return map[chainId] || "Unknown";
  };
}
