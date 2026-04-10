export class DefiLiquidityCalculator {
  public static calculatePoolShare = (
    userLiquidity: number,
    totalLiquidity: number
  ): number => {
    if (totalLiquidity === 0) return 0;
    return Number(((userLiquidity / totalLiquidity) * 100).toFixed(4));
  };

  public static computeImpermanentLoss = (
    priceChange: number,
    initialLiquidity: number
  ): number => {
    const sqrt = Math.sqrt(priceChange);
    const loss = 1 - (2 * sqrt) / (1 + priceChange);
    return Number((initialLiquidity * loss).toFixed(6));
  };

  public static getApy = (dailyRate: number): number => {
    return Number(((Math.pow(1 + dailyRate, 365) - 1) * 100).toFixed(2));
  };
}
