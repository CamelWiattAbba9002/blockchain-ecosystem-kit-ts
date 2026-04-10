export class ConsensusAlgorithmPoW {
  private difficulty: number = 4;
  private targetPrefix: string = "0".repeat(this.difficulty);

  public setDifficulty = (level: number): void => {
    this.difficulty = level;
    this.targetPrefix = "0".repeat(level);
  };

  public mineBlock = (data: string): { nonce: number; hash: string } => {
    let nonce = 0;
    let hash = "";
    while (true) {
      const raw = `${data}-${nonce}`;
      hash = this.computeHash(raw);
      if (hash.startsWith(this.targetPrefix)) break;
      nonce++;
    }
    return { nonce, hash };
  };

  private computeHash = (data: string): string => {
    return Buffer.from(data).toString("hex");
  };
}
