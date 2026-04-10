export interface CrossChainTx {
  fromChain: string;
  toChain: string;
  amount: number;
  sender: string;
  recipient: string;
}

export class CrossChainBridgeHandler {
  private pendingTxs: CrossChainTx[] = [];

  public createBridgeOrder = (tx: CrossChainTx): string => {
    this.pendingTxs.push(tx);
    return `BRIDGE_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
  };

  public getPendingOrders = (sender: string): CrossChainTx[] => {
    return this.pendingTxs.filter((t) => t.sender === sender);
  };

  public completeBridge = (orderId: string): boolean => {
    const index = this.pendingTxs.findIndex((t) =>
      orderId.includes(t.sender.slice(-4))
    );
    if (index === -1) return false;
    this.pendingTxs.splice(index, 1);
    return true;
  };
}
