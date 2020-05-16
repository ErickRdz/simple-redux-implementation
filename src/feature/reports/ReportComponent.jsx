import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';

const mapState = (state) =>  ({
    customerId: state.customers.customerId
})

class ReportComponent extends Component {
    render() {
        return (
            <Fragment>
                <h1>
                    Pagina de reporte
                </h1>
                <br/>
                <br/>
                <div>
                    <p>Id del cliente: {this.props.customerId}</p>
                    <input onClick={() => this.props.history.push('/')} type="button" value="Volver a pagina de clientes"/>
                </div>
            </Fragment>
        )
    }
}

export default connect(mapState)(ReportComponent);