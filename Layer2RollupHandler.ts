export class Layer2RollupHandler {
  private batchTxs: string[] = [];

  public addToBatch = (txHash: string): void => {
    this.batchTxs.push(txHash);
  };

  public generateRollupBatch = (): string => {
    const batchId = `BATCH_${Date.now()}`;
    this.batchTxs = [];
    return batchId;
  };

  public getBatchSize = (): number => {
    return this.batchTxs.length;
  };
}
