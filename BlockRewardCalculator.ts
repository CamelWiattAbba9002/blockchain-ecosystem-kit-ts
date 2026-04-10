export class BlockRewardCalculator {
  private baseReward: number = 5;
  private halvingInterval: number = 210000;

  public getCurrentReward = (blockHeight: number): number => {
    const halvingTimes = Math.floor(blockHeight / this.halvingInterval);
    return this.baseReward / (2 ** halvingTimes);
  };

  public setHalvingParams = (base: number, interval: number): void => {
    this.baseReward = base;
    this.halvingInterval = interval;
  };
}
