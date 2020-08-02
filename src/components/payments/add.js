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
  CInput,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Multiselect } from 'multiselect-react-dropdown';
import axios from 'axios';

class BasicForms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_id: '',
            plan_id: '',
            bill_amount: 0,
            pay_amount: 0,
            balance_amount: 0,
            payreceived_user_id: ''
        }
    }

    handleCancel = ()=> {
        this.props.history.push('/areas')
    }

    handleSubmit = () => {
      const { area_name, status } = this.state;
      if(!!area_name && !!status){
        axios.post('http://localhost:8080/webapi/addarea',{
        'area_name': area_name,
         user_id: 1,
         area_id: 1,
         status
      }).then(()=>{
        this.props.history.push('/areas')
      }).catch(err=>{
        alert('Error Try again',err)
      })
      }
    }

    handleUserChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        })
    }


    render() {
        const { customer_id, plan_id, bill_amount, pay_amount, balance_amount, payreceived_user_id} = this.state;
        return (
            <>
              <CRow>
                <CCol xs="12" md="10">
                  <CCard>
                    <CCardHeader>
                      Payment Add
                      <small> Form</small>
                    </CCardHeader>
                    <CCardBody>
                      <CForm action="" method="post" className="form-horizontal">
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="customer-id">Customer Id</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={customer_id} id="customer-id" name="customer_id" disabled />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="plan-id">Plan</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={plan_id} id="plan-id" name="plan_id" disabled />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="bill-amount">Bill Amount</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={bill_amount} onChange={this.handleUserChange} id="bill-amount" name="bill_amount" placeholder="Bill Amount" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="pay-amount">Pay Amount</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={pay_amount} onChange={this.handleUserChange} id="pay-amount" name="pay_amount" placeholder="Pay Amount" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="bal-amount">Balance Amount</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={balance_amount} onChange={this.handleUserChange} id="bal-amount" name="balance_amount" placeholder="Balance Amount" />
                          </CCol>
                        </CFormGroup>
                      </CForm>
                    </CCardBody>
                    <CCardFooter>
                      <CButton type="reset" size="sm" color="danger" onClick={this.handleCancel}><CIcon name="cil-ban"  /> Cancel</CButton>
                      &nbsp;
                      <CButton type="submit" size="sm" color="primary" onClick={this.handleSubmit}><CIcon name="cil-scrubber" /> Add</CButton> 
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
            </>
          )
    }
}

export default BasicForms
