import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {saveCustomerId} from './customerActions';

const actions = {
    saveCustomerId
}

class CustomerComponent extends Component {
    render() {
        return (
            <Fragment>
                <h1>Datos del cliente</h1>
                <br/><br/>
                <div>
                    <input onClick={() => this.props.saveCustomerId(9)} type="button" value="Guardar id del cliente" />
                    <br/>
                    <input onClick={() => this.props.history.push('/reporte')} type="button" value="Ver reporte" />
                </div>
            </Fragment>
            
        )
    }
}

export default connect(null, actions)(CustomerComponent);