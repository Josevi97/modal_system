import { Link } from "react-router-dom";
import { IModalData } from "../../components/Modal/Modal";
import { useModalContext } from "../../contexts/modal.context";

const AboutView = () => {

  const { actions } = useModalContext();

  const handleClick = (modal: IModalData) => actions.show(modal);

  const mainModal: IModalData = {
    header: <h1>About</h1>,
    content: <div>Holaaaaaa!</div>,
    footer: <button onClick={() => handleClick(secondaryModal)}>Testing</button>
  }

  const secondaryModal: IModalData = {
    content: <div>Esto es una prueba y para poder comprobarlo bien deberia de comprobarse mediante el uso de un Lorem</div>,
    footer: (
      <div>
        <button onClick={actions.back}>Back</button>
        <button onClick={() => handleClick(terciaryModal)}>Next</button>
      </div>
    )
  }

  const terciaryModal: IModalData = {
    content: <div>XD</div>,
    footer: <button onClick={actions.back}>Back</button>
  }

  return (
    <div className="aboutView">
      <h1>About view</h1>
      <Link to='/'>Go home</Link>

      <hr />
      <button onClick={() => handleClick(mainModal)}>Mostrar modal de acerca</button>
    </div>
  )

}

export default AboutView;
