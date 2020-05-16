import React, { Component, Fragment } from 'react';
import {Route} from 'react-router-dom';
import CustomerComponent from '../../feature/customers/CustomerComponent';
import ReportComponent from '../../feature/reports/ReportComponent';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={CustomerComponent} />
                <Route exact path="/reporte" component={ReportComponent} />
            </Fragment>
        )
    }
}

export default App;