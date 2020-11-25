import React, { Component } from 'react'
import { Button, Badge, Card, Form, Col, DropdownButton, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap'
import axios from 'axios'
import * as moment from 'moment'
import Flatpickr from 'react-flatpickr'
import '../../vendor/libs/react-flatpickr/react-flatpickr.scss'

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import '../../vendor/libs/react-bootstrap-table2/react-bootstrap-table2.scss'

const { SearchBar } = Search

class justfitDashboard extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Justfit - Usuários')

    this.onLatestActivityFilterValueChange = this.onLatestActivityFilterValueChange.bind(this)

    this.state = {
      // Filters
      filterVerified: 'Any',
      filterRole: 'Any',
      filterStatus: 'Any',
      filterLatestActivity: [null, null],

      data: []
    }

    // Load data
    this.loadData('/json/pages_users_list.json').then(data => {
      this.setState({ data })
    })
  }

  async loadData(url) {
    const response = await axios.get(process.env.PUBLIC_URL + url)
    return response.data
  }

  onLatestActivityFilterValueChange(dates) {
    const filterLatestActivity = []
    filterLatestActivity[0] = dates && dates[0] ? moment(dates[0]).format('MM/DD/YYYY') : null
    filterLatestActivity[1] = dates && dates[1] ? moment(dates[1]).format('MM/DD/YYYY') : null
    this.setState({ filterLatestActivity })
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10
    const isIEMode = typeof document['documentMode'] === 'number'
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    const columns = [ 
      {
        text: 'Nome do Aluno',
        dataField: 'name',
        sort: true,
        classes: 'align-middle'
      },
      
    //   {
    //   text: 'Account',
    //   dataField: 'account',
    //   sort: true,
    //   classes: 'align-middle',
    //   formatter: (cell, row) => <a href="#d" onClick={this.prevent}>{row.account}</a>
    // },
    
    {
      text: 'Matrícula Nº',
      dataField: 'id',
      sort: true,
      classes: 'align-middle'
    },

    {
      text: 'CPF',
      dataField: 'cpf',
      sort: true,
      classes: 'align-middle'
    },  {
      text: 'Sexo',
      dataField: 'sexo',
      sort: true,
      classes: 'align-middle'
    }, {
      text: 'Endereço',
      dataField: 'endereco',
      sort: true,
      classes: 'align-middle',
 
    },

    {
      text: 'Telefone',
      dataField: 'telefone',
      sort: true,
      classes: 'align-middle',
      
    }, 
    {
      text: 'Data Inicial',
      dataField: 'data_inicial',
      sort: true,
      classes: 'align-middle',
      
    }, 
    
    
    {
      text: 'Status',
      dataField: 'status',
      sort: true,
      classes: 'align-middle',
      formatter: (cell, row) => <React.Fragment>
        {row.status === 1 && <Badge variant="outline-success">Ativo</Badge>}
        {row.status === 2 && <Badge variant="outline-danger">Inativo</Badge>}
      </React.Fragment>
    },]

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          Lista de Alunos
        </h4>

        {/* Filters */}
        {/* <div className="ui-bordered px-4 pt-4 mb-4">
          <Form.Row className="align-items-center">
            <Col md className="mb-4">
              <Form.Label>Verified</Form.Label>
              <Form.Control as="select" className="custom-select" value={this.state.filterVerified} onChange={e => this.setState({ filterVerified: e.target.value })}>
                <option value="Any">Any</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Control>
            </Col>
            <Col md className="mb-4">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" className="custom-select" value={this.state.filterRole} onChange={e => this.setState({ filterRole: e.target.value })}>
                <option value="Any">Any</option>
                <option value="User">User</option>
                <option value="Author">Author</option>
                <option value="Staff">Staff</option>
                <option value="Admin">Admin</option>
              </Form.Control>
            </Col>
            <Col md className="mb-4">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" className="custom-select" value={this.state.filterStatus} onChange={e => this.setState({ filterStatus: e.target.value })}>
                <option value="Any">Any</option>
                <option value="Active">Active</option>
                <option value="Banned">Banned</option>
                <option value="Deleted">Deleted</option>
              </Form.Control>
            </Col>
            <Col md className="mb-4">
              <Form.Label>Latest activity</Form.Label>
              <Flatpickr
                placeholder={!isIEMode ? 'Any' : null}
                value={this.state.filterLatestActivity}
                options={{ altInput: true, mode: 'range', animate: !isRTL, dateFormat: 'm/d/Y', altFormat: 'm/d/Y' }}
                onChange={this.onLatestActivityFilterValueChange} />
            </Col>
            <Col md xl={2} className="mb-4">
              <Form.Label className=" d-none d-md-block">&nbsp;</Form.Label>
              <Button variant="secondary" block>Show</Button>
            </Col>
          </Form.Row>
        </div> */}
        {/* / Filters */}

        {isIE10Mode && <div className="alert alert-danger">
          <strong>react-bootstrap-table2</strong> doesn't support Internet Explorer 10
        </div>}

        {!isIE10Mode &&
          <Card>
            <ToolkitProvider
              keyField="id"
              data={this.state.data}
              columns={columns}
              bootstrap4
              search>
              {props => (<>
                {/* Search bar */}
                <Card.Body className="d-flex justify-content-end pb-0">
                  <div style={{ maxWidth: '500px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row' }}>
                    <h6 style={{marginRight:10}}>Pesquisar: </h6>
                    <SearchBar placeholder="Por nome, matrícula, cpf, etc..." {...props.searchProps} />
                  </div>
                </Card.Body>

                <BootstrapTable
                  {...props.baseProps}
                  wrapperClasses="table-responsive react-bs-table-card"
                  classes="card-table table-striped border-top"
                  pagination={paginationFactory()}
                />
              </>)}
            </ToolkitProvider>
          </Card>
        }

      </div>
    )
  }
}

export default justfitDashboard
