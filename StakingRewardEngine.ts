export class StakingRewardEngine {
  private annualRate: number = 0.08;

  public setRewardRate = (rate: number): void => {
    this.annualRate = rate;
  };

  public calculateDailyReward = (stakedAmount: number): number => {
    return Number((stakedAmount * this.annualRate / 365).toFixed(8));
  };

  public calculateTotalReward = (
    amount: number,
    days: number
  ): number => {
    return Number((this.calculateDailyReward(amount) * days).toFixed(6));
  };
}
