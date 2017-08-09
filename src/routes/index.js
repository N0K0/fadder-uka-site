import CoreLayout from '../layouts/PageLayout/PageLayout'
import Exercise from './Exercise'
import Login from './Login'
import LevelPage from './LevelPage/index'
import StartPage from './StartPage/index'
import TopicPage from './TopicPage/index'
import TaskPage from './TaskPage/index'
import ChoicePage from './ChoicePage/index'
import ExamFilterPage from './ExamFilterPage/index'
import TaskResult from './TaskResultPage/index'
import { browserHistory } from 'react-router'

const createRoutes = (store) => ({
  path        : browserHistory.push('/login'),
  component   : CoreLayout,
  childRoutes : [
    Exercise(store),
    Login(store),
    TopicPage(store),
    LevelPage(store),
    StartPage(store),
    TaskPage(store),
    ChoicePage(store),
    ExamFilterPage(store),
    TaskResult(store)
  ]
})

export default createRoutes
