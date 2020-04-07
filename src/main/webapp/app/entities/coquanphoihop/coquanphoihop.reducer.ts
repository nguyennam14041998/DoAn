import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICoquanphoihop, defaultValue } from 'app/shared/model/coquanphoihop.model';

export const ACTION_TYPES = {
  FETCH_COQUANPHOIHOP_LIST: 'coquanphoihop/FETCH_COQUANPHOIHOP_LIST',
  FETCH_COQUANPHOIHOP: 'coquanphoihop/FETCH_COQUANPHOIHOP',
  CREATE_COQUANPHOIHOP: 'coquanphoihop/CREATE_COQUANPHOIHOP',
  UPDATE_COQUANPHOIHOP: 'coquanphoihop/UPDATE_COQUANPHOIHOP',
  DELETE_COQUANPHOIHOP: 'coquanphoihop/DELETE_COQUANPHOIHOP',
  RESET: 'coquanphoihop/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICoquanphoihop>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type CoquanphoihopState = Readonly<typeof initialState>;

// Reducer

export default (state: CoquanphoihopState = initialState, action): CoquanphoihopState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_COQUANPHOIHOP_LIST):
    case REQUEST(ACTION_TYPES.FETCH_COQUANPHOIHOP):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_COQUANPHOIHOP):
    case REQUEST(ACTION_TYPES.UPDATE_COQUANPHOIHOP):
    case REQUEST(ACTION_TYPES.DELETE_COQUANPHOIHOP):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_COQUANPHOIHOP_LIST):
    case FAILURE(ACTION_TYPES.FETCH_COQUANPHOIHOP):
    case FAILURE(ACTION_TYPES.CREATE_COQUANPHOIHOP):
    case FAILURE(ACTION_TYPES.UPDATE_COQUANPHOIHOP):
    case FAILURE(ACTION_TYPES.DELETE_COQUANPHOIHOP):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_COQUANPHOIHOP_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10)
      };
    case SUCCESS(ACTION_TYPES.FETCH_COQUANPHOIHOP):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_COQUANPHOIHOP):
    case SUCCESS(ACTION_TYPES.UPDATE_COQUANPHOIHOP):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_COQUANPHOIHOP):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/coquanphoihops';

// Actions

export const getEntities: ICrudGetAllAction<ICoquanphoihop> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_COQUANPHOIHOP_LIST,
    payload: axios.get<ICoquanphoihop>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<ICoquanphoihop> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_COQUANPHOIHOP,
    payload: axios.get<ICoquanphoihop>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ICoquanphoihop> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_COQUANPHOIHOP,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICoquanphoihop> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_COQUANPHOIHOP,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICoquanphoihop> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_COQUANPHOIHOP,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
