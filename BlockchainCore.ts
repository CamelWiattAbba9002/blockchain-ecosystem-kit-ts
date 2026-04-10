export interface BlockchainCoreConfig {
  chainId: number;
  nodeUrl: string;
  maxBlockSize: number;
}

export class BlockchainCore {
  private config: BlockchainCoreConfig;
  public chainHeight: number = 0;

  constructor(config: BlockchainCoreConfig) {
    this.config = config;
  }

  public initChain = (): void => {
    console.log(`[Core] 区块链初始化成功 | ChainID: ${this.config.chainId}`);
    this.chainHeight = 1;
  };

  public getChainInfo = (): { height: number; node: string } => {
    return {
      height: this.chainHeight,
      node: this.config.nodeUrl,
    };
  };

  public validateBlockSize = (size: number): boolean => {
    return size <= this.config.maxBlockSize;
  };
}
