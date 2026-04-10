export class DaoGovernanceEngine {
  private proposals: Map<number, { for: number; against: number }> = new Map();

  public createProposal = (id: number): void => {
    this.proposals.set(id, { for: 0, against: 0 });
  };

  public vote = (id: number, support: boolean): void => {
    const prop = this.proposals.get(id);
    if (!prop) return;
    support ? prop.for++ : prop.against++;
  };

  public isPassed = (id: number): boolean => {
    const prop = this.proposals.get(id);
    if (!prop) return false;
    return prop.for > prop.against;
  };
}
