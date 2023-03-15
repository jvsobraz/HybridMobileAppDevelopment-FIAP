import AsyncStorage from "@react-native-async-storage/async-storage";

const inserirString = async (key, value, callback = null) => {
  try {
    await AsyncStorage.setItem(key, value, callback);
  } catch (e) {
    throw new Error("Erro ao inserir os dados!");
  }
};

const inserirObjeto = async (key, value, callback = null) => {
  try {
    const json = JSON.stringify(value);
    await AsyncStorage.setItem(key, json, callback);
  } catch (e) {
    throw new Error("Erro ao inserir os dados!");
  }
};

const obterString = async (key, callback = null) => {
  try {
    return await AsyncStorage.getItem(key, callback);
  } catch (e) {
    throw new Error("Erro ao obter os dados!");
  }
};

const obterObjeto = async (key, callback = null) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw new Error("Erro ao obter os dados!");
  }
};

const todasChaves = async (callback = null) => {
  try {
    return await AsyncStorage.getAllKeys(callback);
  } catch (e) {
    throw new Error("Erro ao obter os dados!");
  }
};

const remover = async (key, callback = null) => {
  try {
    await AsyncStorage.removeItem(key, callback);
  } catch (e) {
    throw new Error("Erro ao remover os dados!");
  }
};

const limpar = async (callback = null) => {
  try {
    await AsyncStorage.clear(callback);
  } catch (e) {
    throw new Error("Erro ao limpar os dados!");
  }
};
