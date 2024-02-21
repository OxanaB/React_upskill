import { ErrorDto } from '../../dto/ErrorDto';
import { Company } from '../../interfaces/CompanyModel';
import {
  CompanyAction,
  DELETE_COMPANY,
  FETCH_COMPANY,
  SET_COMPANY,
  FETCH_FOLLOW,
  FETCHED_FOLLOW,
} from '../actions/GetCompanyActions';

export interface CompanyState {
  company: Company | null;
  isLoading: boolean;
  isFetching: boolean;
  isFollowLoad: boolean;
  errorMessage: ErrorDto | null;
}

const initialState: CompanyState = {
  company: null,
  isLoading: false,
  isFetching: false,
  isFollowLoad: false,
  errorMessage: null,
};

export const companyReducer = (
  state = initialState,
  action: CompanyAction,
): CompanyState => {
  switch (action.type) {
    case FETCH_COMPANY:
      return { ...state, isLoading: true };
    case SET_COMPANY:
      return {
        ...state,
        isLoading: false,
        isFetching: true,
        errorMessage: null,
        company: action.payload,
      };
    case FETCH_FOLLOW:
      return { ...state, isFollowLoad: true };
    case FETCHED_FOLLOW:
      return { ...state, isFollowLoad: false };
    case DELETE_COMPANY:
      return initialState;
    default:
      return state;
  }
};
