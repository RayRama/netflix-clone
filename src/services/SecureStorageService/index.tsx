import * as SecureStore from "expo-secure-store";

interface IStorageService {
  setItem: (key: string, value: string) => Promise<void>;
  getItem: (key: string) => Promise<string | null>;
  deleteItem: (key: string) => Promise<void>;
}

export class SecureStorageService implements IStorageService {
  public async setItem(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  }

  public async getItem(key: string) {
    return await SecureStore.getItemAsync(key);
  }

  public async deleteItem(key: string) {
    await SecureStore.deleteItemAsync(key);
  }
}
