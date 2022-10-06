import { IModal } from "../components/Modal/Modal"

export interface IModalHistory {
  current: IModal,
  previous?: IModalHistory
}

export interface IModalState {
  visible: boolean,
  popping: boolean,
  current: IModal,
  previous: IModalHistory
}

export type ModalActionPayload =
  | IModal

export type ModalActionType = 'show' | 'hide' | 'back' | 'pop';

export interface ModalAction {
  type: ModalActionType,
  payload?: ModalActionPayload
}

export interface IModalActions {
  show: (data: IModal) => void,
  hide: () => void,
  back: () => void,
}

export interface IModalContext {
  state: IModalState
  actions: IModalActions
}
