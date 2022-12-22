import Modal from 'react-bootstrap/Modal';


function modal(props) {


    

  return (
    <Modal
    style={{backdropFilter: 'blur(5px)'}}
     {...props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
    show={props.show} onHide={props.handleClose}>
      <Modal.Header style={{backgroundColor: `#bd5457`}}>
        <div style={{borderRadius: '50px'}}>
        POKEDEX
                </div>
        <Modal.Title>{props.pokeName}</Modal.Title>
      </Modal.Header >
      <Modal.Body style={{backgroundColor: `#bd5457`}}>

        {props.flavor}
        </Modal.Body>
   
    </Modal>
  )
}

export default modal