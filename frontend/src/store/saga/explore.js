import * as actionType from "../actionType/index";
import { all, put, call, takeLatest } from "redux-saga/effects";
import * as api from "../../apis/explore";
import { showLoader, hideLoader, showToaster } from "./common";
import { SOMETHING_WENT_WRONG, WORD_STATUS_UPDATED_SUCCESSFULLY } from "../../constants/toastMessage.const";

function* getWordList(action) {
  try {
    const payload = action.payload;
    yield* showLoader();
    const results = yield call(api.getWordList, payload);
    yield put({
      type: actionType.GET_WORD_LIST_SUCCESS,
      payload: results,
    });
    yield* hideLoader();
  } catch (error) {
    yield* hideLoader();
    yield put({
      type: actionType.GET_WORD_LIST_FAILURE,
      payload: error.response.data,
    });
  }
}

function* handleUpdateWordStatus(action) {
  try {
    const { payload } = action;
    yield* showLoader();
    const results = yield call(api.updateWordStatus, payload);
    yield put({
      type: actionType.UPDATE_WORD_STATUS_BY_ID_SUCCESS,
      payload: results.data,
    });
    yield* hideLoader();
    yield* showToaster({
      status: "success", 
      message: WORD_STATUS_UPDATED_SUCCESSFULLY
    });
  } catch (error) {
    yield* hideLoader();
    yield put({
      type: actionType.UPDATE_WORD_STATUS_BY_ID_FAILURE,
      payload: error.response.data,
    });
    yield* showToaster({
      status: "error", 
      message: SOMETHING_WENT_WRONG
    });
  }
}

function* getWordListWatcher() {
  yield takeLatest(actionType.GET_WORD_LIST, getWordList);
}

function* updateWordStatusWatcher() {
  yield takeLatest(actionType.UPDATE_WORD_STATUS_BY_ID, handleUpdateWordStatus);
}

export function* exploreSaga() {
  yield all([getWordListWatcher(), updateWordStatusWatcher()]);
}
