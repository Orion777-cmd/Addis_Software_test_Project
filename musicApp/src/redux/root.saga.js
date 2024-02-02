import {all, fork} from "redux-saga/effects";
import { watchGetMusic } from "./music/music.saga";

const rootSaga = function* () {
    yield all([
        fork(watchGetMusic)
    ])
}

export default rootSaga;