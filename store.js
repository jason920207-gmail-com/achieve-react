import {createStore,combineReducers,applyMiddleware} from 'redux';
import {tasksReducer} from './component/tasksSlice';

const reducers={
    tasks:tasksReducer
};
export const store=createStore(combineReducers(reducers));
