import { combineReducers } from 'redux'
import locationReducer from './location'
import { reducer as formReducer } from 'redux-form'
import taskReducer from './TaskDataReducer'
import examReducer from '../routes/ExamFilterPage/reducers/examFilterReducer'
import topicReducer from '../routes/TopicPage/reducers/topicPageOverviewReducer'
import { i18nReducer } from 'react-redux-i18n'

export const makeRootReducer = (asyncReducers) => (
  combineReducers({
    location: locationReducer,
    tasks: taskReducer,
    topic: topicReducer,
    form: formReducer,
    exam: examReducer,
    i18n: i18nReducer,
    ...asyncReducers
  })
)

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
