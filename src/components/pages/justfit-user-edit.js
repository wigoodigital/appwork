import React, { Component } from 'react'
import { Button, Form, Tabs, Tab, Card, Media, Table, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import '../../vendor/libs/react-select/react-select.scss'
import '../../vendor/styles/pages/users.scss'

const LANGUAGES = [
  { value: 'English', label: 'English' },
  { value: 'German', label: 'German' },
  { value: 'French', label: 'French' }
]

class UsersEdit extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Justfit - Aluno')

    this.state = {
     //Informações Gerais
      userData: {
        avatar: 'profile-masc.png',
        name: 'Gabriel dos Santos',
        username: 'gazao123',
        email: 'gabriel@mail.com',
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


      //Pagamento
        payment: {
          nametitular: 'Gabriel dos Santos',
          cardmasked: '•••• •••• •••• 5898',
          cardmaskedcvv: '•••',
          cardduedate: '11/2028',
          cardtype:'Crédito',
        },

      //Endereço
        address:{
          zipcode: '06542-001',
          street: 'Av. Yojiro Takaoka',
          streetnumber: '501',
          complement: 'Residencial 3',
          region: 'Alphaville',
          city: 'Barueri',
          state: 'São Paulo',
        },
        
        permissions: [
          { module: 'Users', read: true, write: false, create: false, delete: false },
          { module: 'Articles', read: true, write: true, create: true, delete: false },
          { module: 'Staff', read: false, write: false, create: false, delete: false }
        ],


  

        info: {
          birthday: 'May 3, 1995',
          country: 'Canada',
          languages: ['English'],
          phone: '+0 (123) 456 7891',
          website: '',
          music: ['Rock', 'Alternative', 'Electro', 'Drum & Bass', 'Dance'],
          movies: ['The Green Mile', 'Pulp Fiction', 'Back to the Future', 'WALL·E', 'Django Unchained', 'The Truman Show', 'Home Alone', 'Seven Pounds'],

          twitter: 'https://twitter.com/user',
          facebook: 'https://www.facebook.com/user',
          google: '',
          linkedin: '',
          instagram: 'https://www.instagram.com/user'
        }
      }
    }
  }

  onValueChange(field, e, valType = String) {
    this.setState({
      userData: {
        ...this.state.userData,
        [field]: field === 'verified' ? e.target.checked : valType(e.target.value)
      }
    })
  }

  onPermissionChange(permission, field, e) {
    permission[field] = e.target.checked
    this.setState({
      userData: {
        ...this.state.userData,
        permissions: [...this.state.userData.permissions]
      }
    })
  }

  onInfoValueChange(field, e, valType = String) {
    this.setState({
      userData: {
        ...this.state.userData,
        info: {
          ...this.state.userData.info,
          [field]: valType(e.target.value)
        }
      }
    })
  }

  getLanguageOptions(langs) {
    return langs.reduce((result, lang) => {
      const found = LANGUAGES.find(l => l.value === lang)
      if (found) result.push(found)
      return result
    }, [])
  }

  getSelectObject(arr) {
    return arr.map(val => ({ value: val, label: val }))
  }

  onInfoSelectChange(field, e) {
    let val
    if (Array.isArray(e)) {
      val = e.map(obj => obj.value)
    } else if (e.target.multiple) {
      val = []
      const options = e.target.options
      for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) val.push(options[i].value)
      }
    } else {
      val = e.target.value.split(',').map(tag => tag.replace(/^\s+|\s+$/g, ''))
    }

    this.setState({
      userData: {
        ...this.state.userData,
        info: {
          ...this.state.userData.info,
          [field]: val
        }
      }
    })
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
.titleBold{
  color:#292929;
  
}
body{
  background:white;
  
}

`}</style>
        <div style={{ margin: 20,  }}>
          <h4 className="font-weight-bold py-2 mb-4" style={{fontSize:30}}>
            Atualização de dados <span className="text-muted">#{this.state.userData.id}</span>
          </h4>
          <Card>
            <div className="nav-tabs-top nav-responsive-sm">
              <Card.Body>

                <Media className="align-items-center">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/${this.state.userData.avatar}`} alt="User" className="d-block ui-w-80" />
                  <Media.Body className="ml-3">
                    <h4 className="font-weight-bold mb-0">{this.state.userData.name} </h4>
                    <div className="text-muted mb-2">Matrícula Nº: {this.state.userData.id}</div>
                    <Link to=''><Button variant="custom" size="sm">Está tudo certo!</Button></Link>&nbsp;
                    <Link to=''><Button variant="default md-btn-flat " style={{fontWeight:600}} size="sm">Cancelar</Button></Link>
                  </Media.Body>
                </Media>

              </Card.Body>
              <hr className="border-light m-0" />

              <Card.Body className="pb-2">
                <Card.Title className='titleBold'>Informações de contato</Card.Title>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control value={this.state.userData.email} onChange={e => this.onValueChange('email', e)} className="mb-1" />
                  </Form.Group>

                  <Form.Group as={Col} md={3}>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control value={this.state.userData.telefone} onChange={e => this.onValueChange('telefone', e)} />
                  </Form.Group>

                  <Form.Group as={Col} md={3}>
                    <Form.Label>Celular</Form.Label>
                    <Form.Control value={this.state.userData.celular} onChange={e => this.onValueChange('celular', e)} />
                  </Form.Group>
                </Form.Row>

              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body className="pb-2">
                <Card.Title className='titleBold'>Dados de pagamento</Card.Title>
                <Form.Row>
                  <Form.Group as={Col} md={3}>
                    <Form.Label>Titular do cartão</Form.Label>
                    <Form.Control value={this.state.userData.payment.nametitular} onChange={e => this.onValueChange('nametitular', e)} className="mb-1" />
                  </Form.Group>

                  <Form.Group as={Col} md={4}>
                    <Form.Label>Número do cartão</Form.Label>
                    <Form.Control value={this.state.userData.payment.cardmasked} onChange={e => this.onValueChange('cardmasked', e)} />
                  </Form.Group>

                  <Form.Group as={Col} md={2}>
                    <Form.Label>Validade</Form.Label>
                    <Form.Control value={this.state.userData.payment.cardduedate} onChange={e => this.onValueChange('cardduedate', e)} />
                  </Form.Group>
                  <Form.Group as={Col} md={1}>
                    <Form.Label>CVV</Form.Label>
                    <Form.Control value={this.state.userData.payment.cardmaskedcvv} onChange={e => this.onValueChange('cardmaskedcvv', e)} />
                  </Form.Group>
                  <Form.Group as={Col} md={2}>
                    <Form.Label>Tipo de cartão</Form.Label>
                    <Form.Control value={this.state.userData.payment.cardtype} onChange={e => this.onValueChange('cardtype', e)} />
                  </Form.Group>
                </Form.Row>

              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body className="pb-2">
                <Card.Title className='titleBold'>Endereço</Card.Title>
                <Form.Row>
                  <Form.Group as={Col} md={3}>
                    <Form.Label>CEP</Form.Label>
                    <Form.Control value={this.state.userData.address.zipcode} onChange={e => this.onValueChange('zipcode', e)} className="mb-1" />
                  </Form.Group>

                  <Form.Group as={Col} md={8}>
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control value={this.state.userData.address.street} onChange={e => this.onValueChange('street', e)} />
                  </Form.Group>

                  <Form.Group as={Col} md={1}>
                    <Form.Label>Número</Form.Label>
                    <Form.Control value={this.state.userData.address.streetnumber} onChange={e => this.onValueChange('streetnumber', e)} />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} md={5}>
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control value={this.state.userData.address.complement} onChange={e => this.onValueChange('complement', e)} className="mb-1" />
                  </Form.Group>

                  <Form.Group as={Col} md={3}>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control value={this.state.userData.address.region} onChange={e => this.onValueChange('region', e)} />
                  </Form.Group>

                  <Form.Group as={Col} md={3}>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control value={this.state.userData.address.city} onChange={e => this.onValueChange('city', e)} />
                  </Form.Group>
                  <Form.Group as={Col} md={1}>
                    <Form.Label>UF</Form.Label>
                    <Form.Control value={this.state.userData.address.state} onChange={e => this.onValueChange('state', e)} />
                  </Form.Group>
                
                </Form.Row>

              </Card.Body>



            </div>
          </Card>
          <div className="text-right mt-3">
            <Button variant="custom" disabled>Salvar mudanças</Button>&nbsp;
          </div>
        </div>
      </>
    )

  }

}

export default UsersEdit
