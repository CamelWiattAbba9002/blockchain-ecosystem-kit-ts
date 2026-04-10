export class MetaverseLandContract {
  private landOwnership: Map<number, string> = new Map();
  private landMetadata: Map<number, { x: number; y: number; size: number }> = new Map();

  public mintLand = (tokenId: number, owner: string, x: number, y: number): void => {
    this.landOwnership.set(tokenId, owner);
    this.landMetadata.set(tokenId, { x, y, size: 10 });
  };

  public transferLand = (tokenId: number, newOwner: string): boolean => {
    if (!this.landOwnership.has(tokenId)) return false;
    this.landOwnership.set(tokenId, newOwner);
    return true;
  };
}
