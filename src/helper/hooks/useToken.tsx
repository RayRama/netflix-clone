import * as SecureStore from "expo-secure-store";
export async function useToken() {
  try {
    const token = await SecureStore.getItemAsync("token");
    return Promise.resolve(token);
  } catch (err) {
    return Promise.reject(err);
  }
}
