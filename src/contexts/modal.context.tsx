import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import { Outlet } from "react-router-dom";
import BlackBackground from "../components/BlackBackground/BlackBackground";
import Modal, { IModalData } from "../components/Modal/Modal";
import { IModalContext, IModalState, ModalAction } from "./modal.types";

const poppingConstant: number = 0;

const initialState: IModalState = {
  visible: false,
  popping: false,
  current: {
    content: undefined,
  },
  previous: {
    current: {
      content: undefined
    },
  }
}

const reducer = (state: IModalState, action: ModalAction): IModalState => {
  switch (action.type) {
    case 'show': return { visible: true, popping: false, current: action.payload!, previous: { current: state.current, previous: state.previous } };
    case 'hide': return initialState;
    case 'back': return { ...state, popping: false, current: state.previous.current, previous: state.previous.previous! }
    case 'pop': return { ...state, popping: true }
    default: throw Error('Invalid modal action type context');
  }
}

const ModalContext = createContext<IModalContext>({
  state: initialState,
  actions: {
    show(data) {},
    hide() {},
    back() {},
  }
});

const ModalProvider = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const modalTimeout = useRef<ReturnType<typeof setTimeout>>();

  const show = (data: IModalData) => {
    clearTimeout(modalTimeout.current);

    if (state.current) {
      pop();

      modalTimeout.current = setTimeout(() => {
        dispatch({ type: 'show', payload: data })
      }, poppingConstant);
    }
    else dispatch({ type: 'show', payload: data })
  }

  const hide = () => dispatch({ type: 'hide' });

  const back = () => {
    clearTimeout(modalTimeout.current);

    if (state.previous) {
      pop();

      modalTimeout.current = setTimeout(() => {
        dispatch({ type: 'back' })
      }, poppingConstant);
    }
    else hide();
  }

  const pop = () => dispatch({ type: 'pop' });

  const context: IModalContext = {
    state: state,
    actions: {
      show,
      hide,
      back,
    }
  }

  useEffect(() => {
    clearTimeout(modalTimeout.current);
  }, []);

  return (
    <ModalContext.Provider value={context}>
      {
        state.visible &&
          <BlackBackground>
            <Modal popping={state.popping} />
          </BlackBackground>
      }

      <Outlet />
    </ModalContext.Provider>
  )

}

export const useModalContext = () => useContext(ModalContext);

export default ModalProvider;
