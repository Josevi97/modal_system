import { IModalData } from "../components/Modal/Modal"

export interface IModalHistory {
  current: IModalData,
  previous?: IModalHistory
}

export interface IModalState {
  visible: boolean,
  popping: boolean,
  current: IModalData,
  previous: IModalHistory
}

export type ModalActionPayload =
  | IModalData

export type ModalActionType = 'show' | 'hide' | 'back' | 'pop';

export interface ModalAction {
  type: ModalActionType,
  payload?: ModalActionPayload
}

export interface IModalActions {
  show: (data: IModalData) => void,
  hide: () => void,
  back: () => void,
}

export interface IModalContext {
  state: IModalState
  actions: IModalActions
}
