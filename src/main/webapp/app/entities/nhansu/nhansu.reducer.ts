import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { INhansu, defaultValue } from 'app/shared/model/nhansu.model';

export const ACTION_TYPES = {
  FETCH_NHANSU_LIST: 'nhansu/FETCH_NHANSU_LIST',
  FETCH_NHANSU: 'nhansu/FETCH_NHANSU',
  CREATE_NHANSU: 'nhansu/CREATE_NHANSU',
  UPDATE_NHANSU: 'nhansu/UPDATE_NHANSU',
  DELETE_NHANSU: 'nhansu/DELETE_NHANSU',
  RESET: 'nhansu/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<INhansu>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type NhansuState = Readonly<typeof initialState>;

// Reducer

export default (state: NhansuState = initialState, action): NhansuState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_NHANSU_LIST):
    case REQUEST(ACTION_TYPES.FETCH_NHANSU):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_NHANSU):
    case REQUEST(ACTION_TYPES.UPDATE_NHANSU):
    case REQUEST(ACTION_TYPES.DELETE_NHANSU):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_NHANSU_LIST):
    case FAILURE(ACTION_TYPES.FETCH_NHANSU):
    case FAILURE(ACTION_TYPES.CREATE_NHANSU):
    case FAILURE(ACTION_TYPES.UPDATE_NHANSU):
    case FAILURE(ACTION_TYPES.DELETE_NHANSU):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_NHANSU_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10)
      };
    case SUCCESS(ACTION_TYPES.FETCH_NHANSU):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_NHANSU):
    case SUCCESS(ACTION_TYPES.UPDATE_NHANSU):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_NHANSU):
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

const apiUrl = 'api/nhansus';

// Actions

export const getEntities: ICrudGetAllAction<INhansu> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_NHANSU_LIST,
    payload: axios.get<INhansu>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<INhansu> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_NHANSU,
    payload: axios.get<INhansu>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<INhansu> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_NHANSU,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<INhansu> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_NHANSU,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<INhansu> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_NHANSU,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
