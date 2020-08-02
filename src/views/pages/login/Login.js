import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import Logo from './../../../assets/icons/logo2.png'
import axios  from "axios";



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId:'RAP001',
      password:'12345678'
    }
  }
  userLogin = () => {
    const { customerId, password } = this.state;
    axios.post('http://localhost:8080/webapi/login',{
      customerId,password
    }).then(res=>{
      this.props.history.push('/dashboard')
    }).catch(err=>{
      console.log('err',err)
    })
  }
  handleChange = (event) =>{
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" value={this.state.customerId} name="customerId" 
                          onChange={this.handleChange}
                          placeholder="Username" autoComplete="username" />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" 
                          onChange={this.handleChange}
                          value={this.state.password} name="password" placeholder="Password" autoComplete="current-password" />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton color="primary" className="px-4" onClick={this.userLogin}>Login</CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">Forgot password?</CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <img src={Logo} alt="Logo" height="42" />
                      <h3>Sign up</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
  
}

export default Login
