import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (

    <>

    <div id="novaDatabase" class="addNewCard" onClick={handleShow}>
                <i class="bi bi-plus-square-fill"></i>
                <p>Nova Database</p>
      </div>

    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Novo database</Modal.Title>
        </Modal.Header>
            <div className='container'>
            <p class="small mb-0">Crie um novo database para armazenar seus dados            </p>
            </div>
            <div class="container">
            <form
                        class="mr-auto my-2 my-md-0 mw-50">
                        <div class="mb-3 mt-0">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Minha database é..."
                                aria-label="databaseName" aria-describedby="basic-addon2" />
                        </div>
            </form>
            </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Criar Novo Database
          </Button>
        </Modal.Footer>
      </Modal>
    </>
   
  )
}
