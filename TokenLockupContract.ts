export class TokenLockupContract {
  private lockups: Map<string, { amount: bigint; unlockTime: number }> = new Map();

  public lockTokens = (
    address: string,
    amount: bigint,
    unlockTimestamp: number
  ): void => {
    this.lockups.set(address, { amount, unlockTime: unlockTimestamp });
  };

  public canUnlock = (address: string): boolean => {
    const lock = this.lockups.get(address);
    if (!lock) return false;
    return Date.now() >= lock.unlockTime;
  };
}
