import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import "../css/mainadmin.css";

const MainAdminLocal = () => {

  return (
    <div className="container-mains">
      <div className="div-content-admin">
        <h1>Admin Local</h1>
        <div className="content-form-admin">
          <Form className="form-admin" >
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Nombre Local</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el título"
                name="nombre"
              ></Form.Control>
            </Form.Group>
            <FormGroup className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Direccion</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la descripción"
                name="direccion"
              ></Form.Control>
            </FormGroup>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Imagen de Portada</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la imagen de portada"
                name="imagen"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Mail del Local</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese mail del Local"
                name="mail"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="form-group-admin">
              <Form.Label className="mb-3">
                <h5>Propietario del Local</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la Nombre del Propietario"
                name="propietario"
              ></Form.Control>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button className="m-3" type="submit">
                Agregar Productos
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MainAdminLocal;
