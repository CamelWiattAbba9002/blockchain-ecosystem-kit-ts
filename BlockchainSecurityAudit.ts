export class BlockchainSecurityAudit {
  public static checkReentrancy = (code: string): boolean => {
    return !code.includes("call.value") || code.includes("ReentrancyGuard");
  };

  public static scanOverflow = (code: string): boolean => {
    return code.includes("SafeMath") || code.includes("0.8.0");
  };

  public generateReport = (checks: boolean[]): string => {
    const passed = checks.filter(Boolean).length;
    return `安全审计通过：${passed}/${checks.length} 项`;
  };
}
