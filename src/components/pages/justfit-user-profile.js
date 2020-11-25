import React, { Component } from 'react'
import { Card, Media, Button, Table, Row, Col, Badge, Modal, InputGroup, Form, } from 'react-bootstrap'
import * as numeral from 'numeral'
import '../../vendor/styles/pages/users.scss'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../../vendor/libs/sweetalert2/sweetalert2.scss'

const ReactSwal = withReactContent(Swal.mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton: 'btn btn-primary btn-lg',
    cancelButton: 'btn btn-default btn-lg',
    actions: 'text-center'
  }
}))

class justfitUserProfile extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Justfit - Aluno')

    this.onDefaultModalClose = this.onDefaultModalClose.bind(this)
    this.onTopModalClose = this.onTopModalClose.bind(this)
    this.onSlideModalClose = this.onSlideModalClose.bind(this)
    this.onFillInModalClose = this.onFillInModalClose.bind(this)

    this.state = {
      defaultModalShow: false,
      defaultModalSize: null,
      topModalShow: false,
      topModalSize: null,
      slideModalShow: false,
      fillInModalShow: false,
      fillInModalSize: null,
      userData: {
        avatar: 'profile-masc.png',
        name: 'Gabriel dos Santos',
        username: 'nmaxwell',
        email: 'nmaxwell@mail.com',
        company: 'Company Ltd.',
        id: 3455630,
        plano: 'FIT_PLUS_UPGRADE – FIT PLUS PROMO RS 39.90_IMPORT',
        data_inicial: '19/11/2018',
        inicio_contrato: '25/11/2018',
        contrato_status: 'Renovação',
        data_rescisao: '-',
        pedido_rescisao: '-',
        verified: true,
        sexo: 'Masculino',
        cpf: '123.456.789-09',
        telefone: '(11) 91111-1111',
        endereco: 'Lapa, São Paulo, SP, Brasil',
        role: 1,
        status: 1,

        

      }
    }

    this.modalSizes = [{
      title: 'Medium',
      value: null
    }, ]
  }

  prevent(e) {
    e.preventDefault()
  }

  onDefaultModalClose() {
    this.setState({ defaultModalShow: false })
  }

  onTopModalClose() {
    this.setState({ topModalShow: false })
  }

  onSlideModalClose() {
    this.setState({ slideModalShow: false })
  }

  onFillInModalClose() {
    this.setState({ fillInModalShow: false })
  }

  basicSweetAlertExample() {
    ReactSwal.fire({
      title: 'Here\'s a message!',
      text: 'It\'s pretty, isn\'t it?',
      footer: (<a href="#d" onClick={this.prevent}>Why do I have this issue?</a>)
    })
  }

  fullSweetAlertExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel plx!'
    }).then(function (result) {
      if (result.value) {
        ReactSwal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success')
      } else {
        ReactSwal.fire('Cancelled', 'Your imaginary file is safe :)', 'error')
      }
    })
  }

  loaderSweetAlertExample() {
    ReactSwal.fire({
      title: 'Ajax request example',
      text: 'Submit to run ajax request',
      icon: 'info',
      showCancelButton: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: function () {
        return !Swal.isLoading()
      },
      preConfirm: function () {
        return new Promise(function (resolve) {
          setTimeout(function () {
            resolve(true)
          }, 2000)
        })
      }
    }).then(function (result) {
      if (result.value) {
        ReactSwal.fire('Ajax request finished!')
      }
    })
  }

  stepsSweetAlertExample() {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3'],
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-primary btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    }).queue([{
      title: 'Question 1',
      text: 'Chaining swal2 modals is easy'
    },
      'Question 2',
      'Question 3'
    ]).then(function (result) {
      if (result.value) {
        ReactSwal.fire({
          title: 'All done!',
          html: (<p>Your answers: <pre><code>{JSON.stringify(result.value)}</code></pre></p>),
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }

  infoSweetAlertExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'info',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-info btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    })
  }

  successSweetAlertExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'success',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-success btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    })
  }

  warningSweetAlertExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-warning btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    })
  }

  dangerSweetAlertExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'error',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-danger btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    })
  }

  //   this.state = {
  //     userData: {
  //       avatar: 'profile-masc.png',
  //       name: 'Gabriel dos Santos',
  //       username: 'nmaxwell',
  //       email: 'nmaxwell@mail.com',
  //       company: 'Company Ltd.',
  //       id: 3455630,
  //       plano: 'FIT_PLUS_UPGRADE – FIT PLUS PROMO RS 39.90_IMPORT',
  //       data_inicial: '19/11/2018',
  //       inicio_contrato: '25/11/2018',
  //       contrato_status: 'Renovação',
  //       data_rescisao: '-',
  //       pedido_rescisao: '-',
  //       verified: true,
  //       sexo: 'Masculino',
  //       cpf: '123.456.789-09',
  //       telefone: '(11) 91111-1111',
  //       endereco: 'Lapa, São Paulo, SP, Brasil',
  //       role: 1,
  //       status: 1,



  //     }
  //   }
  // }

  formatInt(v) {
    return numeral(v).format('0,0')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10
    return (


      <>
        <style type="text/css">
          {`
   .btn-custom{
     color:#333232;
     background-color:#BED730;
     font-weight:700;
     border-radius:5px;
   }
   .justfit-color{
    color:#BED730;
   }
   `}
        </style>
        <div>
          <Media className="align-items-center py-3 mb-3">
            <img src={`${process.env.PUBLIC_URL}/img/avatars/${this.state.userData.avatar}`} alt="User" className="d-block ui-w-100" />
            <Media.Body className="ml-4">
              <h4 className="font-weight-bold mb-0">{this.state.userData.name} </h4>
              <div className="text-muted mb-2">Matrícula Nº: {this.state.userData.id}</div>
                  <Button variant="custom"  size="sm" key={this.modalSizes[1]} onClick={() =>
                    this.setState({
                      fillInModalShow: true,
                      fillInModalSize: null,
                    })
                  }>Gerar link de atualização</Button>

                {/* Modal template */}
                <Modal className="modal-fill-in" show={this.state.fillInModalShow} size={this.state.fillInModalSize} onHide={this.onFillInModalClose}>
                  <button type="button" className="close" aria-label="Close" onClick={this.onFillInModalClose}>&times;</button>
                  <Modal.Body>
                    <p className="text-white text-large align-center text-center font-weight-light mb-3">Um link foi gerado!</p>
                    <InputGroup size="lg" className="mb-3">
                      <Form.Control placeholder="https://justfit.com.br/usuario/3583838/atualizar?=1" className="bg-white border-0" disabled/>
                   
                      <InputGroup.Append>
                      <Button variant="custom">Enviar</Button>
                      </InputGroup.Append>
                   
                    </InputGroup>
                    <div className="text-center text-right text-white opacity-50">
                      O usuário receberá um link para atualizar seus dados.
                </div>
                  </Modal.Body>
                </Modal>&nbsp;
            <Link to='/dashboard'><Button variant="default" style={{ fontWeight: 600 }} size="sm">Voltar</Button></Link>&nbsp;
          </Media.Body>
          </Media>
          <Card className="mb-4">
            <Card.Body>

              <Table className="user-view-table m-0">
                <tbody>
                  <tr>
                    <td>Plano:</td>
                    <td className='' style={{fontWeight:600}}>{this.state.userData.plano}</td>
                  </tr>
                  <tr>
                    <td>Data de cadastro:</td>
                    <td>{this.state.userData.data_inicial}</td>
                  </tr>
                  <tr>
                    <td>Início do contrato:</td>
                    <td>{this.state.userData.inicio_contrato}</td>
                  </tr>
                  {/* <tr>
                  <td>Verified:</td>
                  <td>
                    {this.state.userData.verified
                      ? <span><span className="ion ion-md-checkmark text-primary"></span>&nbsp; Yes</span>
                      : <span><span className="ion ion-md-close text-light"></span>&nbsp; No</span>
                    }                    
                  </td>
                </tr> */}
                  {/* <tr>
                  <td>Role:</td>
                  <td>
                    {this.state.userData.role === 1 && 'User'}
                    {this.state.userData.role === 2 && 'Author'}
                    {this.state.userData.role === 3 && 'Staff'}
                    {this.state.userData.role === 4 && 'Admin'}
                  </td>
                </tr>*/}

                  <tr>
                    <td>Solicitação do Cancelamento:</td>
                    <td>{this.state.userData.pedido_rescisao}</td>
                  </tr>
                  <tr>
                    <td>Data de Início do Cancelamento:</td>
                    <td>{this.state.userData.data_rescisao}</td>
                  </tr>
                  <tr>
                    <td>Situação do contrato:</td>
                    <td>
                      {this.state.userData.contrato_status}
                    </td>
                  </tr>
                  <tr>
                    <td>Status:</td>
                    <td>
                      {this.state.userData.status === 1 && <Badge  className="text-success">Ativo</Badge>}
                      {this.state.userData.status === 2 && <Badge  className="text-danger">Inativo</Badge>}
                    </td>
                  </tr>

                </tbody>
              </Table>

            </Card.Body>
            <hr className="border-light m-0" />
            <Table responsive className="card-table m-0">
              <thead>
                <tr>
                  <th>Valor Mensal</th>
                  <th>Valor Base</th>
                  <th>Valor Anuidade</th>
                  <th>Valor Matrícula</th>
                  <th>Valor Adesão</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>R$ 99,90</td>
                  <td>R$ 1198,00</td>
                  <td>R$ 99,90</td>
                  <td>R$ 0,00</td>
                  <td>R$ 0,00</td>
                </tr>
              </tbody>
            </Table>
          </Card>

          <Card>
            {/* <Row noGutters className="row-bordered">

              <Col md className="d-flex align-items-center">
                <a href="#d" onClick={this.prevent} className="card-body d-block text-body">
                  <div className="text-muted small line-height-1">Posts</div>
                  <div className="text-xlarge">{this.formatInt(this.state.userData.posts)}</div>
                </a>
              </Col>

              <Col md className="d-flex align-items-center">
                <a href="#d" onClick={this.prevent} className="card-body d-block text-body">
                  <div className="text-muted small line-height-1">Followers</div>
                  <div className="text-xlarge">{this.formatInt(this.state.userData.followers)}</div>
                </a>
              </Col>

              <Col md className="d-flex align-items-center">
                <a href="#d" onClick={this.prevent} className="card-body d-block text-body">
                  <div className="text-muted small line-height-1">Following</div>
                  <div className="text-xlarge">{this.formatInt(this.state.userData.following)}</div>
                </a>
              </Col>

            </Row> */}
            <hr className="border-light m-0" />
            <Card.Body>

              <Table className="user-view-table m-0">
                <tbody>
                  {/* <tr>
                    <td>Username:</td>
                    <td>{this.state.userData.username}</td>
                  </tr> */}
                  <tr>
                    <td>Name:</td>
                    <td>{this.state.userData.name}</td>
                  </tr>
                  <tr>
                    <td>Sexo:</td>
                    <td>{this.state.userData.sexo}</td>
                  </tr>
                  <tr>
                    <td>E-mail:</td>
                    <td>{this.state.userData.email}</td>
                  </tr>
                  <tr>
                    <td>CPF:</td>
                    <td>{this.state.userData.cpf}</td>
                  </tr>
                  <tr>
                    <td>Telefone:</td>
                    <td>{this.state.userData.telefone}</td>
                  </tr>
                  <tr>
                    <td>Endereço:</td>
                    <td>{this.state.userData.endereco}</td>
                  </tr>
                </tbody>
              </Table>

              {/* <h6 className="mt-4 mb-3">Social links</h6>

              <Table className="user-view-table m-0">
                <tbody>
                  {this.state.userData.info.twitter ? <tr>
                    <td>Twitter:</td>
                    <td><a href="#d" onClick={this.prevent}>{this.state.userData.info.twitter}</a></td>
                  </tr> : null}
                  {this.state.userData.info.facebook ? <tr>
                    <td>Facebook:</td>
                    <td><a href="#d" onClick={this.prevent}>{this.state.userData.info.facebook}</a></td>
                  </tr> : null}
                  {this.state.userData.info.google ? <tr>
                    <td>Google+:</td>
                    <td><a href="#d" onClick={this.prevent}>{this.state.userData.info.google}</a></td>
                  </tr> : null}
                  {this.state.userData.info.linkedin ? <tr>
                    <td>LinkedIn:</td>
                    <td><a href="#d" onClick={this.prevent}>{this.state.userData.info.linkedin}</a></td>
                  </tr> : null}
                  {this.state.userData.info.instagram ? <tr>
                    <td>Instagram:</td>
                    <td><a href="#d" onClick={this.prevent}>{this.state.userData.info.instagram}</a></td>
                  </tr> : null}
                </tbody>
              </Table> */}
              {/* 
              <h6 className="mt-4 mb-3">Personal info</h6>

              <Table className="user-view-table m-0">
                <tbody>
                  {this.state.userData.info.birthday ? <tr>
                    <td>Birthday:</td>
                    <td>{this.state.userData.info.birthday}</td>
                  </tr> : null}
                  {this.state.userData.info.country ? <tr>
                    <td>Country:</td>
                    <td>{this.state.userData.info.country}</td>
                  </tr> : null}
                  {this.state.userData.info.languages.length ? <tr>
                    <td>Languages:</td>
                    <td>{this.state.userData.info.languages.join(', ')}</td>
                  </tr> : null}
                </tbody>
              </Table>

              <h6 className="mt-4 mb-3">Contacts</h6>

              <Table className="user-view-table m-0">
                <tbody>
                  {this.state.userData.info.phone ? <tr>
                    <td>Phone:</td>
                    <td>{this.state.userData.info.phone}</td>
                  </tr> : null}
                  {this.state.userData.info.website ? <tr>
                    <td>Website:</td>
                    <td>{this.state.userData.info.website}</td>
                  </tr> : null}
                </tbody>
              </Table>

              <h6 className="mt-4 mb-3">Interests</h6>

              <Table className="user-view-table m-0">
                <tbody>
                  {this.state.userData.info.music.length ? <tr>
                    <td>Favorite music:</td>
                    <td>{this.state.userData.info.music.join(', ')}</td>
                  </tr> : null}
                  {this.state.userData.info.movies.length ? <tr>
                    <td>Favorite movies:</td>
                    <td>{this.state.userData.info.movies.join(', ')}</td>
                  </tr> : null}
                </tbody>
              </Table> */}

            </Card.Body>
          </Card>

        </div>
      </>
    )
  }
}

export default justfitUserProfile
