export class BlockchainStateSync {
  private localHeight: number = 0;
  private remoteHeight: number = 0;

  public setLocalHeight = (h: number): void => {
    this.localHeight = h;
  };

  public setRemoteHeight = (h: number): void => {
    this.remoteHeight = h;
  };

  public needSync = (): boolean => {
    return this.remoteHeight > this.localHeight;
  };

  public getSyncRange = (): [number, number] => {
    return [this.localHeight + 1, this.remoteHeight];
  };
}
