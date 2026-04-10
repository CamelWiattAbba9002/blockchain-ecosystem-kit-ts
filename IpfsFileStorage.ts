import { create } from "ipfs-http-client";

export class IpfsFileStorage {
  private ipfs = create({ url: "https://ipfs.infura.io:5001" });

  public uploadFile = async (content: string): Promise<string> => {
    const result = await this.ipfs.add({ content });
    return `ipfs://${result.cid.toString()}`;
  };

  public getFile = async (cid: string): Promise<string> => {
    const stream = this.ipfs.cat(cid.replace("ipfs://", ""));
    let content = "";
    for await (const chunk of stream) {
      content += chunk.toString();
    }
    return content;
  };
}
