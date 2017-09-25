import initialState from './initialState';

export default function showReducer(state = initialState, action) {

  switch(action.type){

    case 'LOAD_POST' :
      return {
        ...state,listPost : [... state.listPost , ... action.listPost ],
  };
    case 'LOAD_COMMENT':
      return{
        ...state,listComment : [... action.listComment ],
      };

    case 'LOAD_LIKE' :
      return {
        ...state, like : action.like
      };
    case 'IS_ADD_COMMENT':
      return{
        ...state,isAdding : !state.isAdding
      };
    case 'LOAD_PAGE_ID' :
      return{
        ...state,page_id: state.page_id + 1
      };
    default:
      return state ;
  }
}
