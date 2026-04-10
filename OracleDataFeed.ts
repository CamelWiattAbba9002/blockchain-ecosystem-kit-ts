export class OracleDataFeed {
  private priceMap: Map<string, number> = new Map();

  public updatePrice = (symbol: string, price: number): void => {
    this.priceMap.set(symbol, price);
  };

  public getPrice = (symbol: string): number | null => {
    return this.priceMap.get(symbol) || null;
  };

  public getPriceChange = (symbol: string, oldPrice: number): number => {
    const current = this.getPrice(symbol);
    if (!current) return 0;
    return Number(((current - oldPrice) / oldPrice * 100).toFixed(2));
  };
}
