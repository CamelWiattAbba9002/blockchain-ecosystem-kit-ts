export interface Block {
  height: number;
  hash: string;
  prevHash: string;
  txs: string[];
}

export class BlockSerialization {
  public static serialize = (block: Block): string => {
    return JSON.stringify(block);
  };

  public static deserialize = (data: string): Block => {
    return JSON.parse(data);
  };

  public static getBlockSize = (block: Block): number => {
    return this.serialize(block).length;
  };
}
