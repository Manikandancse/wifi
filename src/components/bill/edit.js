import React, {Component} from 'react';
import {  } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

class BasicForms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_name:'', 
            plan_name: '',
            plan_doj: '',
        }
    }

    handleCancel = ()=> {
        this.props.history.push('/bills')
    }

    handleSubmit = () => {
      const { customer_name, plan_name, plan_doj } = this.state;
      console.log('aaa',this.state)
    }

    handleUserChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        },()=>{
          console.log('áaa',this.state)
        })
        console.log("aaaa",name, value);
    }


    render() {
        const { customer_name, plan_name, plan_doj } = this.state;
        return (
            <>
              <CRow>
                <CCol xs="12" md="10">
                  <CCard>
                    <CCardHeader>
                      Customer Plan Update
                      <small> Form</small>
                    </CCardHeader>
                    <CCardBody>
                      <CForm action="" method="post" className="form-horizontal">
                      <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="customer-name">Customer Name</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CSelect custom name="customer_name" onChange={this.handleUserChange} value={customer_name} id="customer-name">
                                <option value="">Please select Customer</option>
                                <option value="1">Karthi</option>
                                <option value="2">Sam</option>
                                <option value="3">Aaaaa</option>
                            </CSelect>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="plan-name">Plan Name</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CSelect custom name="plan_name" onChange={this.handleUserChange} value={plan_name} id="plan-name">
                                <option value="">Please select Plan</option>
                                <option value="1">499</option>
                                <option value="2">599</option>
                                <option value="3">799</option>
                            </CSelect>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                        <CCol md="3">
                          <CLabel htmlFor="plan-doj">Date</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CInput type="date" id="plan-doj" name="plan_doj" value={plan_doj} placeholder="date" />
                        </CCol>
                      </CFormGroup>
                      </CForm>
                    </CCardBody>
                    <CCardFooter>
                      <CButton type="reset" size="sm" color="danger" onClick={this.handleCancel}><CIcon name="cil-ban"  /> Cancel</CButton>
                      &nbsp;
                      <CButton type="submit" size="sm" color="primary" onClick={this.handleSubmit}><CIcon name="cil-scrubber" /> Update</CButton> 
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
            </>
          )
    }
}

export default BasicForms
