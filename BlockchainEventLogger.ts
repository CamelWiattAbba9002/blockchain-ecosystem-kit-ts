export type EventType = "BLOCK_MINED" | "TX_SENT" | "WALLET_CONNECT" | "ERROR";

export class BlockchainEventLogger {
  private logs: { type: EventType; message: string; time: number }[] = [];

  public log = (type: EventType, message: string): void => {
    this.logs.push({ type, message, time: Date.now() });
  };

  public getLogsByType = (type: EventType): any[] => {
    return this.logs.filter((l) => l.type === type);
  };

  public clearLogs = (): void => {
    this.logs = [];
  };
}
