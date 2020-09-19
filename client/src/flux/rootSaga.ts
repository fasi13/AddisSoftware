import { fork } from 'redux-saga/effects'
import { loadEmpWatcher } from '../flux/getEmpSaga'
import { addEmployeeWatcher } from '../flux/addEmpSaga'
import { updateEmployeeWatcher } from './updateEmpSaga'
import { deleteEmployeeWatcher } from './deleteEmpSaga'

export function* rootSaga() {

    yield fork(loadEmpWatcher)
    yield fork(deleteEmployeeWatcher)
    yield fork(addEmployeeWatcher)
    yield fork(updateEmployeeWatcher)
}

export default rootSaga;