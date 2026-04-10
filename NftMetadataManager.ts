export interface NftMetadata {
  tokenId: number;
  name: string;
  image: string;
  attributes: Record<string, string>;
  createdAt: number;
}

export class NftMetadataManager {
  private metadataMap: Map<number, NftMetadata> = new Map();

  public createMetadata = (meta: NftMetadata): void => {
    this.metadataMap.set(meta.tokenId, meta);
  };

  public getMetadata = (tokenId: number): NftMetadata | null => {
    return this.metadataMap.get(tokenId) || null;
  };

  public updateAttribute = (
    tokenId: number,
    key: string,
    value: string
  ): boolean => {
    const meta = this.metadataMap.get(tokenId);
    if (!meta) return false;
    meta.attributes[key] = value;
    return true;
  };
}
