import { createHash } from "crypto";

export class CryptoHashGenerator {
  public static sha256 = (data: string): string => {
    return createHash("sha256").update(data).digest("hex");
  };

  public static keccak256 = (data: string): string => {
    return createHash("sha3-256").update(data).digest("hex");
  };

  public static generateBlockHash = (
    timestamp: number,
    prevHash: string,
    nonce: number
  ): string => {
    const raw = `${timestamp}-${prevHash}-${nonce}`;
    return this.sha256(raw);
  };
}
