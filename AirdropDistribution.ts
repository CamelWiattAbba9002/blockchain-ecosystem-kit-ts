export class AirdropDistribution {
  private recipients: Map<string, number> = new Map();

  public addRecipient = (address: string, amount: number): void => {
    this.recipients.set(address, amount);
  };

  public getTotalAirdropAmount = (): number => {
    return Array.from(this.recipients.values()).reduce((a, b) => a + b, 0);
  };

  public generateDistributionList = (): Record<string, number> => {
    return Object.fromEntries(this.recipients);
  };
}
