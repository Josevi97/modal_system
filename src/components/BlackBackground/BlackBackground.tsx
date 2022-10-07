import React from "react";
import styles from './BlackBackground.module.css';

export interface IBlackBackground {
  children: React.ReactNode
}

const BlackBackground = ({ children }: IBlackBackground) => {

  return (
    <div className={styles.background}>
      {
        children
      }
    </div>
  )

}

export default BlackBackground;
