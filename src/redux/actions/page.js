import { SET_PAGE_NAME } from "../../constants/actions"

export const setPageNameAction = (payload) => {
  return {
    type: SET_PAGE_NAME,
    payload
  }
}