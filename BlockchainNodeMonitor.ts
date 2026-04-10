export class BlockchainNodeMonitor {
  private nodeStatus: Map<string, boolean> = new Map();
  private blockDelay: Map<string, number> = new Map();

  public registerNode = (nodeUrl: string): void => {
    this.nodeStatus.set(nodeUrl, true);
    this.blockDelay.set(nodeUrl, 0);
  };

  public updateNodeStatus = (nodeUrl: string, isOnline: boolean): void => {
    this.nodeStatus.set(nodeUrl, isOnline);
  };

  public getHealthReport = (): Record<string, { online: boolean; delay: number }> => {
    const report: any = {};
    this.nodeStatus.forEach((online, url) => {
      report[url] = { online, delay: this.blockDelay.get(url) || 0 };
    });
    return report;
  };
}
