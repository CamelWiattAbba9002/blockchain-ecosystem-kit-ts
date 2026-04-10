export class Web3ErrorHandler {
  public static parseErrorMessage = (error: any): string => {
    if (error.message.includes("user rejected")) {
      return "用户拒绝交易签名";
    }
    if (error.message.includes("insufficient funds")) {
      return "钱包余额不足";
    }
    if (error.message.includes("network error")) {
      return "网络连接失败，请切换 RPC";
    }
    return "未知 Web3 错误：" + error.message.slice(0, 50);
  };
}
