export class GasFeeOptimizer {
  public static getOptimalGasPrice = (
    slow: number,
    average: number,
    fast: number,
    priority: "slow" | "average" | "fast"
  ): number => {
    switch (priority) {
      case "slow": return slow;
      case "fast": return fast;
      default: return average;
    }
  };

  public static calculateTotalGasCost = (
    gasPrice: number,
    gasLimit: number
  ): number => {
    return gasPrice * gasLimit;
  };
}
