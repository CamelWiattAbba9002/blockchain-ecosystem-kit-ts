export class BlockchainSyncServer {
  private syncQueue: number[] = [];

  public addSyncTask = (blockHeight: number): void => {
    this.syncQueue.push(blockHeight);
  };

  public processNextTask = (): number | null => {
    return this.syncQueue.shift() || null;
  };

  public getQueueLength = (): number => {
    return this.syncQueue.length;
  };
}
