import {
  APPLY_FILTERS,
  DIFFICULTY_SELECTED,
  EXAM_SELECTED,
  ITEMS_FETCH_OK,
  TOPIC_SELECTED
} from '../routes/constants'
import {
  CLEAR_TASKS
} from '../routes/SummaryView/constants'

const initialState = {
  tasks_total: [],
  tasks_filtered: [],
  topic_filter: null,
  level_filter: null,
  exam_filter: null,
  fetch_error: false,
  fetch_running: false,
}

export default function taskReducer (state = initialState, action) {
  switch (action.type) {
    case CLEAR_TASKS:
      return ({ ...state, ...initialState })
    case ITEMS_FETCH_OK:
      return { ...state, tasks_total: action.tasks }
    case TOPIC_SELECTED:
      return { ...state, topic_filter: action.topic }
    case DIFFICULTY_SELECTED:
      return { ...state, level_filter: action.level }
    case EXAM_SELECTED:
      return { ...state, exam_filter: action.exam }
    case APPLY_FILTERS: {
      const levelFiltered = (state.level_filter === null)
        ? state.tasks_total : state.tasks_total.filter(task => task.difficulty === state.level_filter)

      const topicFiltered = (state.topic_filter === null)
        ? levelFiltered : levelFiltered.filter(task => task.topicId === state.topic_filter)

      const allFiltered = (state.exam_filter === null)
        ? topicFiltered : topicFiltered.filter(task => task.examId === state.exam_filter)

      return {
        ...state,
        tasks_filtered: allFiltered
      }
    }

    default: {
      return { ...state }
    }
  }
}
