import React from 'react';
import { useModalContext } from '../../contexts/modal.context';
import styles from './Modal.module.css';

export interface IModal {
  header?: React.ReactNode,
  content: React.ReactNode,
  footer?: React.ReactNode
}

const Modal = () => {

  const { state, actions } = useModalContext();

  const mountComponent = (condition: React.ReactNode, component: React.ReactNode) => {
    return (
      <div>
        {
          condition && <br />
        }
        {
          component
        }
      </div>
    );
  }

  if (state.popping) return <></>

  return (
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        <button onClick={actions.hide}>X</button>
      </div>
      <div className={styles.modalContent}>
        {
          state.current.header
        }
        {
          mountComponent(state.current.header, state.current.content)
        }
        {
          mountComponent(state.current.footer, state.current.footer)
        }
      </div>
    </div>
  )

}

export default Modal;
