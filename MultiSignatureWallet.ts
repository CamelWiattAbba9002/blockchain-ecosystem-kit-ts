export class MultiSignatureWallet {
  private owners: string[];
  private requiredSignatures: number;

  constructor(owners: string[], required: number) {
    this.owners = owners;
    this.requiredSignatures = required;
  }

  public isOwner = (address: string): boolean => {
    return this.owners.includes(address);
  };

  public validateSignatureCount = (count: number): boolean => {
    return count >= this.requiredSignatures;
  };
}
