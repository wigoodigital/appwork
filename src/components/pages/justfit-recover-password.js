import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import logo from '../../img/LogoSenha.png'
import '../../vendor/styles/pages/authentication.scss'

class justfitRecoverPassword extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Justfit - Televendas')

    this.state = {
      credentials: {
        email: '',
        password: '',
        rememberMe: false
      }
    }
  }

  onValueChange(field, e) {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [field]: field === 'rememberMe' ? e.target.checked : e.target.value
      }
    })
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
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
        <div className="authentication-wrapper authentication-2 ui-bg-cover ui-bg-overlay-container px-4" style={{ backgroundColor: "#333232", opacity: 1, }}>


          <div className="authentication-inner py-5" style={{ backgroundColor: "#333232", opacity: 1, border: '0px !important', boxShadow: 'none', }}>

            <Card style={{ backgroundColor: "#333232", border: '0px !important', boxShadow: 'none', }}>
              <div className="p-4 p-sm-5">
                {/* Logo */}
                <div className="d-flex justify-content-center align-items-center pb-2 mb-4">
                  <div className="ui-w-60">
                    <div className="w-100 position-relative" style={{ paddingBottom: '54%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src={logo}></img>
                    </div>
                  </div>
                </div>
                {/* / Logo */}

                {/* Form */}
                <Form style={{ color: 'white', }}>
                  <Form.Group>
                    <Form.Label className="d-flex justify-content-between align-items-end">
                      <div style={{fontWeight:400,color:'#C0C0C0',paddingTop:'20px',paddingBottom:'20px'}}>Insira seu email e enviaremos um link  para você redefinir sua senha.</div>
                    </Form.Label>
                    <Form.Control type="email" value={this.state.credentials.email} onChange={e => this.onValueChange('email', e)} />
                  </Form.Group>
                  <div className="d-flex align-items-center justify-content-around m-0">
                     <Button variant="custom">Enviar o link</Button>
                  </div>
          
                </Form>
                {/* / Form */}

              </div>

            </Card>

          </div>
        </div>
      </>
    )
  }
}

export default justfitRecoverPassword
