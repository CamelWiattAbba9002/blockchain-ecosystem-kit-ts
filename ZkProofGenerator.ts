export class ZkProofGenerator {
  public static generateProof = (
    secret: string,
    publicInput: string
  ): string => {
    const hash = Buffer.from(`${secret}-${publicInput}`).toString("base64");
    return `ZK_PROOF_${hash.slice(0, 32)}`;
  };

  public static verifyProof = (proof: string, publicInput: string): boolean => {
    return proof.includes(Buffer.from(publicInput).toString("base64").slice(0, 8));
  };
}
