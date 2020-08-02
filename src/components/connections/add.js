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
  CInputCheckbox,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import axios from 'axios';

class BasicForms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_list: [],
            plan_list: [],
            gst_list: [],
            customer_name:'', 
            plan_name: '',
            plan_doj: '',
            instllation_charge: 0, 
            plan_amount: 0, 
            router_charge: 0,
            instllation_charge: 0, 
            plan_amount: 0, 
            router_charge: 0,
            pay_instllation_charge: 0, 
            pay_plan_amount: 0, 
            pay_router_charge: 0,
            discount: 0,
            total: 0,
            bill: 0,
            if_router_available: false,
        }
    }

    componentDidMount() {
      const reqUser = axios.get(`http://localhost:8080/webapi/listuser`);
      const reqPlan = axios.get(`http://localhost:8080/webapi/listplan`);
      const reqGst = axios.get(`http://localhost:8080/webapi/listgst`);
      axios.all([reqUser, reqPlan, reqGst]).then(axios.spread((...response)=>{
        const resUser = response[0];
        const resPlan = response[1];
        const resGst = response[2];
        this.setState({
          customer_list: resUser.data,
          plan_list: resPlan.data.results,
          gst_list: resGst.data.results,
        })
        console.log("aa",resUser,resPlan)
      })).catch(err=>{
        console.log('err',err)
      })
      
    }

    handleCancel = ()=> {
        this.props.history.push('/connections')
    }

    handleSubmit = () => {
      const { customer_name, plan_name, plan_doj } = this.state;
      console.log('aaa',this.state)
    }

    totalCalculation = (install, plan, router) => {
      const { if_router_available } = this.state;
      return if_router_available === false ? parseInt(install) + parseInt(plan) + parseInt(router) : parseInt(install) + parseInt(plan)
    }

    handleUserChange = event => {
        const { name, value } = event.target;
        const { instllation_charge, plan_amount, router_charge } = this.state;
        if(name === 'plan_name') {
          axios.get(`http://localhost:8080/webapi/listplan/${value}`).then(res=>{
            const { instllation_charge, plan_amount, router_charge } = res.data;
            this.setState({
              [name]: value,
              instllation_charge, 
              plan_amount, 
              router_charge,
              total: this.totalCalculation(instllation_charge, plan_amount, router_charge)
            })
          }).catch(err=>{
            console.log("err",err)
          })
        }else if(name === 'if_router_available') {
          const routerVal = event.target.checked  ? 0 : router_charge;
          this.setState({
            [name]: event.target.checked ? true : false,
          },()=>{
            const {instllation_charge, plan_amount, router_charge} = this.state;
            this.setState({
              total: this.totalCalculation(instllation_charge, plan_amount, routerVal)
            })
          })
        }else {
          this.setState({
            [name]: value
          })
        }
    }

    render() {
        const { customer_id, plan_id, plan_doj, plan_amount, gst_list,
          customer_list, plan_list, instllation_charge, router_charge, pay_plan_amount, pay_instllation_charge, pay_router_charge, discount, total, bill, if_router_available } = this.state;
        return (
            <>
              <CRow>
                <CCol xs="12" md="10">
                  <CCard>
                    <CCardHeader>
                      Customer Add
                      <small> Form</small>
                    </CCardHeader>
                    <CCardBody>
                      <CForm action="" method="post" className="form-horizontal">
                      <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="customer-name">Customer Name</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CSelect custom name="customer_name" onChange={this.handleUserChange} value={customer_id} id="customer-name">
                                <option value="">Please select Customer</option>
                                {
                                  customer_list && customer_list.map(val=>
                                  <option value={`${val.id}`} key={`conn_${val.id}`}>{`${val.customer_id} ${val.customer_name}`}</option>    
                                  )
                                }
                            </CSelect>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="plan-name">Plan Name</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CSelect custom name="plan_name" onChange={this.handleUserChange} value={plan_id} id="plan-name">
                                <option value="">Please select Plan</option>
                                {
                                  plan_list && plan_list.map(val=>
                                  <option value={`${val.id}`} key={`conn_${val.id}`}>{`${val.plan_id} ${val.plan_amount}`}</option>    
                                  )
                                }
                            </CSelect>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="plan-doj">Date</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="date" id="plan-doj" name="plan_doj" onChange={this.handleUserChange} value={plan_doj} placeholder="date" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol xs="4">
                            <CFormGroup>
                              <CLabel htmlFor="plan-amount">Bill Amount</CLabel>
                              <CInput type="text" value={plan_amount} onChange={this.handleUserChange} id="plan-amount" name="plan_amount" placeholder="Plan Amount" />
                            </CFormGroup>
                          </CCol>
                          <CCol xs="4">
                            <CFormGroup>
                              <CLabel htmlFor="instllation-charge">Bill Instllation Charge</CLabel>
                              <CInput type="text" value={instllation_charge} onChange={this.handleUserChange} id="instllation-charge" name="instllation_charge" placeholder="Instllation Charge" />
                            </CFormGroup>
                          </CCol>
                          <CCol xs="4">
                            <CFormGroup>
                              <CLabel htmlFor="router-charge">Bill Router Charge</CLabel>
                              <CInput type="text" value={router_charge} onChange={this.handleUserChange} id="router-charge" name="router-charge" placeholder="Router Charge" />
                            </CFormGroup>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol xs="4">
                            <CFormGroup>
                              <CLabel htmlFor="pay-plan-amount">Pay Plan Amount</CLabel>
                              <CInput type="text" value={pay_plan_amount} onChange={this.handleUserChange} id="pay-plan-amount" name="pay_plan_amount" placeholder="Plan Amount" />
                            </CFormGroup>
                          </CCol>
                          <CCol xs="4">
                            <CFormGroup>
                              <CLabel htmlFor="pay-instllation-charge">Pay Instllation Charge</CLabel>
                              <CInput type="text" value={pay_instllation_charge} onChange={this.handleUserChange} id="pay-instllation-charge" name="pay_instllation_charge" placeholder="Instllation Charge" />
                            </CFormGroup>
                          </CCol>
                          <CCol xs="4">
                            <CFormGroup variant="checkbox" className="checkbox">
                              <CInputCheckbox id="pay-router-charge" name="if_router_available" onChange={this.handleUserChange} checked={if_router_available} />
                              <CLabel htmlFor="pay-router-charge">Pay Router Charge</CLabel>
                            </CFormGroup>
                            <CFormGroup>
                              <CInput type="text" value={pay_router_charge} onChange={this.handleUserChange} id="pay-router-charge" name="pay_router-charge" placeholder="Router Charge" />
                            </CFormGroup>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol xs="4">
                            <CFormGroup>
                              <CLabel htmlFor="total">Total</CLabel>
                              <CInput type="text" value={total} onChange={this.handleUserChange} id="total" name="total" placeholder="Total" />
                            </CFormGroup>
                          </CCol>
                          <CCol xs="4">
                            <CFormGroup>
                              <CLabel htmlFor="discount">Discount</CLabel>
                              <CInput type="text" value={pay_instllation_charge} onChange={this.handleUserChange} id="pay-instllation-charge" name="pay_instllation_charge" placeholder="Instllation Charge" />
                            </CFormGroup>
                          </CCol>
                          <CCol xs="4">
                            <CFormGroup>
                              <CLabel htmlFor="pay-router-charge">GST</CLabel>
                              <CInput type="text" value={pay_router_charge} onChange={this.handleUserChange} id="pay-router-charge" name="pay_router-charge" placeholder="Router Charge" />
                            </CFormGroup>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="total">Total</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={total} onChange={this.handleUserChange} id="total" name="total" placeholder="Total" />
                          </CCol>
                        </CFormGroup>        
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="discount">Discount</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                          <CInput type="text" value={discount} onChange={this.handleUserChange} id="discount" name="discount" placeholder="Discount" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="Bill">Bill</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={bill} onChange={this.handleUserChange} id="bill" name="bill" placeholder="Bill" />
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
