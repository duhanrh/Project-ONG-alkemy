import { alertService } from '../../Services/alertService';
import { ACTION_FAILED, GET_SLIDE_HOME, GET_SLIDE_BACKOFFICE, CREATE_SLIDE, DELETE_SLIDE, GET_SINGLE_SLIDE_BACKOFFICE, CLEAR_SINGLE_SLIDE, EDIT_SLIDE } from './types';

const initialState = {
  slides: [],
  singleSlide: [],
};
const slidesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SLIDE_HOME:
      return {
        ...state,
        slides: action.payload,
      };

    case GET_SLIDE_BACKOFFICE:
      return {
        ...state,
        slides: action.payload,
      };

    case GET_SINGLE_SLIDE_BACKOFFICE:
      return {
        ...state,
        singleSlide: action.payload,
      };

    case CLEAR_SINGLE_SLIDE:
      return {
        ...state,
        singleSlide: action.payload,
      };

    case CREATE_SLIDE:
      return {
        ...state,
        slides: [...state.slides, action.payload],
      };
    case EDIT_SLIDE:
      return {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.id) {
            return action.payload;
          }
          return slide;
        }),
      };

    case DELETE_SLIDE: {
      return {
        ...state,
        slides: state.slides.filter(slide => slide.id !== action.payload),
      };
    }

    case ACTION_FAILED: {
      const TYPE = 'error';
      return alertService(TYPE, action.payload);
    }

    default:
      return state;
  }
};
export default slidesReducer;
