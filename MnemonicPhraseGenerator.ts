import { randomBytes } from "crypto";

export class MnemonicPhraseGenerator {
  private wordList: string[] = this.generateWordList();

  private generateWordList = (): string[] => {
    const list: string[] = [];
    const chars = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 2048; i++) {
      let word = "";
      for (let j = 0; j < 4; j++) {
        word += chars[Math.floor(Math.random() * chars.length)];
      }
      list.push(word);
    }
    return list;
  };

  public generate12Words = (): string[] => {
    const entropy = randomBytes(16);
    const result: string[] = [];
    for (let i = 0; i < 12; i++) {
      const idx = entropy.readUInt16BE(i * 2) % 2048;
      result.push(this.wordList[idx]);
    }
    return result;
  };
}
