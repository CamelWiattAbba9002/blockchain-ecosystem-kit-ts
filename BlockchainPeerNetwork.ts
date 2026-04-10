export class BlockchainPeerNetwork {
  private peers: Set<string> = new Set();

  public addPeer = (peerId: string): void => {
    this.peers.add(peerId);
  };

  public removePeer = (peerId: string): boolean => {
    return this.peers.delete(peerId);
  };

  public broadcastMessage = (msg: string): string[] => {
    return Array.from(this.peers).map((p) => `[${p}] ${msg}`);
  };

  public getPeerCount = (): number => {
    return this.peers.size;
  };
}
