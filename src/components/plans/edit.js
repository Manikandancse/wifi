import React, {Component} from 'react';
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
import axios from 'axios';

class PlanForms extends Component {
    constructor(props) {
        super(props);
        this.state = {
          plan_id:'P00', 
          plan_amount: 499,
          instllation_charge: 2000, 
          router_charge: 1500,
          status:1
        }
    }

    componentDidMount() {
      const { params } = this.props.match;
      const {id} = params
      axios.get(`http://localhost:8080/webapi/listplan/${id}`).then(res=>{
        const { plan_id, plan_amount, status, instllation_charge, router_charge} = res.data;
        this.setState({
          plan_id,
          instllation_charge, 
          router_charge,
          plan_amount,
          status,
          id
        })
      }).catch(err=>{
        console.log('err',err)
      })
    }


    handleCancel = ()=> {
        this.props.history.push('/plans')
    }

    handleSubmit = () => {
      const { id, plan_id, plan_amount, status, instllation_charge, router_charge} = this.state;
      if(!!plan_id && !!plan_amount && !!status && !!instllation_charge && !!router_charge) {
        axios.put(`http://localhost:8080/webapi/modifyplan/${id}`,{
          plan_id,
          plan_amount,
          instllation_charge, 
          router_charge,
          status,
          user_id: id
        }).then(res=>{
          this.props.history.push('/plans')
        }).catch(err=>{
          alert('Error Try again',err)
        })
      }else {
        alert(`please fill the all details`);
        return false;
      }
    }

    handleUserChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        })
    }


    render() {
        const { plan_id, plan_amount, status, instllation_charge, router_charge} = this.state;
        return (
            <>
              <CRow>
                <CCol xs="12" md="10">
                  <CCard>
                    <CCardHeader>
                      Plan Add
                      <small> Form</small>
                    </CCardHeader>
                    <CCardBody>
                      <CForm action="" method="post" className="form-horizontal">
                      <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="plan-id">Plan Id</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={plan_id} onChange={this.handleUserChange} id="plan-id" name="plan_id" placeholder="Enter Plan Id" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="plan-amount">Plan Amount</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="number" value={plan_amount} onChange={this.handleUserChange} id="plan-amount" name="plan_amount" placeholder="Enter Plan" />
                          </CCol>
                        </CFormGroup> 
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="instllation-charge">Instllation Charge</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={instllation_charge} onChange={this.handleUserChange} id="instllation-charge" name="instllation_charge" placeholder="Instllation Charge" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="router-charge">Router Charge</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={router_charge} onChange={this.handleUserChange} id="router-charge" name="router_charge" placeholder="Router Charge" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="status">Status</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CSelect custom name="status" onChange={this.handleUserChange} value={status} id="status">
                                <option value="">Please select Status</option>
                                <option value="1">Active</option>
                                <option value="0">In-Active</option>
                              </CSelect>
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

export default PlanForms
