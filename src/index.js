import warning from 'warning'
import { createAction, handleAction } from 'redux-actions'
import Provider from './components/Provider'
import IntlProvider from './components/IntlProvider'

export Provider
export IntlProvider
export const UPDATE = '@@intl/UPDATE'
export const updateIntl = createAction(UPDATE)

const initialState = {
  locale: 'en',
  messages: {}
}

export const intlReducer = handleAction(UPDATE, {
  next(state, action) {
    return action.payload
  }
}, initialState)
