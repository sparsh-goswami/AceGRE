import * as apiConst from "../constants/api.consts";
import api from './index';

export const login = async (payload) => {
  try {
    const result = await api.postData(apiConst.AUTH_LOGIN, payload);
    return result.data;
  }
  catch (error) {
    throw error;
  }
};

export const register = async (payload) => {
  try {
    const result = await api.postData(apiConst.AUTH_REGISTER, payload);
    return result.data;
  } catch (error) {
    throw error;
  }
};
