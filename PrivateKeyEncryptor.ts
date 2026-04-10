import { createCipheriv, randomBytes } from "crypto";

export class PrivateKeyEncryptor {
  public static encrypt = (key: string, password: string): string => {
    const iv = randomBytes(12);
    const cipher = createCipheriv("aes-256-gcm", password.slice(0, 32), iv);
    let encrypted = cipher.update(key, "utf8", "hex");
    encrypted += cipher.final("hex");
    return `${iv.toString("hex")}:${encrypted}`;
  };
}
