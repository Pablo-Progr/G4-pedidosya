import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import "../css/mainadmin.css";

const MainLocalCrud = () => {


  return (
    <div className="container-mains">
      <div className="container text-center div-content-admin">
        <h1>Listado de Restaurantes</h1>
        <Table responsive className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Imagen</th>
              <th>Dirección</th>
              <th>Propietario</th>
              <th>Mail</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
              <tr >
                <td></td>
                <td></td>
                <td>
                  <img
                    alt="Imagen"
                    style={{ width: "60px" }}
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button
                    className="btn btn-warning m-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-danger m-2"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MainLocalCrud;
