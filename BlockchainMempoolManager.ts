export interface MempoolTx {
  hash: string;
  from: string;
  gasPrice: number;
}

export class BlockchainMempoolManager {
  private txPool: MempoolTx[] = [];

  public addTransaction = (tx: MempoolTx): void => {
    this.txPool.push(tx);
    this.txPool.sort((a, b) => b.gasPrice - a.gasPrice);
  };

  public getTopTransactions = (count: number): MempoolTx[] => {
    return this.txPool.slice(0, count);
  };

  public clearProcessed = (hashes: string[]): void => {
    this.txPool = this.txPool.filter(tx => !hashes.includes(tx.hash));
  };
}
