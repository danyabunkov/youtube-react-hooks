import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_FETCH_ADD, REQUEST_FETCH_ADD_ITEM } from "../redux/action-types";
import { initializeList,addTitle } from "../redux/action";
import { fetch,fetchPost } from "./utils";

function* fetchSagaAsyncAdd() {
  try {
    const todos = yield call(fetch);
    yield put(initializeList(todos));
  } catch (e) {
    console.log(e);
  }
}

function* fetchSagaAsyncAddItem({title}) {
  try {
    console.log(title)
    const todos = yield call(fetchPost,title);
    yield put(addTitle(todos));
  } catch (e) {
    console.log(e);
  }
}

export default function* actionWatcher() {
  yield takeLatest(REQUEST_FETCH_ADD, fetchSagaAsyncAdd);
  yield takeLatest(REQUEST_FETCH_ADD_ITEM, fetchSagaAsyncAddItem);

}
