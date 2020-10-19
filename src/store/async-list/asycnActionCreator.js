import asyncListActionConstants from "./asyncListActionConstants";
import axios from 'axios'

const startFetching = () => {
  return {
    type: asyncListActionConstants.START_FETCHING,
  }
}

const getDataSuccess = (data) => {
  return {
    type: asyncListActionConstants.FETCH_DATA_SUCCESS,
    payload: data
  }
}

const getDataFail = () => {
  return {
    type: asyncListActionConstants.FETCH_DATA_FAIL,
  }
}

const getList = (params) => {
  return function (dispatch) {
    dispatch(startFetching());
    axios.post('/getList', params).then(data => {
      dispatch(getDataSuccess(data))
    }).catch(() => {
      dispatch(getDataFail())
    })
  }
}