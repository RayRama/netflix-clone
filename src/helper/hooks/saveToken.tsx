import * as SecureStore from "expo-secure-store";
export async function saveToken(token: string) {
  try {
    await SecureStore.setItemAsync("token", token);
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(error);
  }
}
