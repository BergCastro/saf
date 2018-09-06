import React, { Component, Fragment } from "react";

import Content from "../common/template/content"
import ContentHeader from "../common/template/contentHeader"
import ValueBox from "../common/widget/valueBox"
import Row from "../common/layout/row"
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const props = this.props
    return (
      <Fragment>
        <ContentHeader title="Dashboard" />
        <Content>           
            
              <Row>
                <ValueBox
                  cols="12 6"
                  color="green"
                  valor={22}
                  label="Testes Físicos realizados"
                  icon='clipboard'
                  textLink='Detalhes'
                />
                <ValueBox
                  cols="12 6"
                  color="green"
                  valor={1200}
                  label="Avaliados"
                  icon='person'
                  textLink='Detalhes'
                />
                
              </Row>
           
        </Content>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  efetivoGeral: state.dashboard.efetivoGeral
})

export default connect(mapStateToProps, null)(Dashboard)
