import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {saveCustomerId} from './customerActions';

const actions = {
    saveCustomerId
}

class CustomerComponent extends Component {
    render() {

        const handleSaveCustomerId = () => {
            let customerId = document.getElementById("customerId").value;
            
            try{
                this.props.saveCustomerId(customerId);
                alert("Se guardo correctamente el id del cliente");
            }catch(error){
                alert("Ocurrio un error: " + error);
                console.log(error);
            }
            
        }

        return (
            <Fragment>
                <h1>Datos del cliente</h1>
                <br/><br/>
                <div>
                    <input id="customerId" type="text" placeholder="Id del cliente" />
                    <input onClick={() => handleSaveCustomerId()} type="button" value="Guardar id del cliente" />
                    <br/><br/><br/>
                    <input onClick={() => this.props.history.push('/reporte')} type="button" value="Ver datos del cliente" />
                </div>
            </Fragment>
            
        )
    }
}

export default connect(null, actions)(CustomerComponent);