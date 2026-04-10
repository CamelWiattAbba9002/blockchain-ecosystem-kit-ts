export class UniswapV3SwapSimulator {
  public static simulateSwap = (
    inputAmount: number,
    price: number,
    fee: number
  ): number => {
    const feeAmount = inputAmount * fee;
    return (inputAmount - feeAmount) * price;
  };

  public static calculatePriceImpact = (
    input: number,
    liquidity: number
  ): number => {
    return Number(((input / liquidity) * 100).toFixed(4));
  };
}
