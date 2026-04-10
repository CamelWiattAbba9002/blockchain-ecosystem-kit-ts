export interface BlockRawData {
  number: number;
  hash: string;
  transactions: string[];
  timestamp: number;
}

export class BlockchainDataParser {
  public static parseBlock = (raw: string): BlockRawData => {
    const data = JSON.parse(raw);
    return {
      number: data.height,
      hash: data.block_hash,
      transactions: data.tx_list || [],
      timestamp: data.time,
    };
  };

  public static filterTransferTxs = (txs: string[]): string[] => {
    return txs.filter((tx) => tx.includes("transfer"));
  };

  public static formatTimestamp = (ts: number): string => {
    return new Date(ts * 1000).toLocaleString();
  };
}
