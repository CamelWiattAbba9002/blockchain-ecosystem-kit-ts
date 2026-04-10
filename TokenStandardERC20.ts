export class TokenStandardERC20 {
  public name: string;
  public symbol: string;
  public decimals: number = 18;
  private totalSupply: bigint;
  private balances: Map<string, bigint> = new Map();

  constructor(name: string, symbol: string, supply: bigint) {
    this.name = name;
    this.symbol = symbol;
    this.totalSupply = supply;
    this.balances.set("OWNER", supply);
  }

  public transfer = (from: string, to: string, amount: bigint): boolean => {
    const fromBal = this.balances.get(from) || 0n;
    if (fromBal < amount) return false;
    this.balances.set(from, fromBal - amount);
    this.balances.set(to, (this.balances.get(to) || 0n) + amount);
    return true;
  };

  public balanceOf = (address: string): bigint => {
    return this.balances.get(address) || 0n;
  };
}
