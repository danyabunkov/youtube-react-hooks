import { INITIALIZE, ADD_TITLE,TOOGLE,REMOVE,REQUEST_FETCH_ADD,REQUEST_FETCH_ADD_ITEM } from './action-types'

export const initializeList = (todos) =>({
type:INITIALIZE,
todos:todos,  
})

export const addTitle = (obj) =>({
  type:ADD_TITLE,
  obj:obj,
})

export const toogleTodo = (id) =>({
  type:TOOGLE,
  id:id,
})

export const removeTodo = (id) =>({
  type:REMOVE,
  id:id,
})

export const requestFetchAdd = () => ({
 type: REQUEST_FETCH_ADD,
});
export const requestFetchAddItem = (title) => ({
  type: REQUEST_FETCH_ADD_ITEM,
  title:title
 });


export default {
  initializeList,
  addTitle,
  toogleTodo,
  removeTodo,
  requestFetchAdd,
  requestFetchAddItem
};


