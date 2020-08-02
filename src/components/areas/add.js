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
import { Multiselect } from 'multiselect-react-dropdown';
import axios from 'axios';

class BasicForms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            area_name: 'Jalakandapuram',
            status: 1,
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
        const { area_name, status } = this.state;
        return (
            <>
              <CRow>
                <CCol xs="12" md="10">
                  <CCard>
                    <CCardHeader>
                      Area Add
                      <small> Form</small>
                    </CCardHeader>
                    <CCardBody>
                      <CForm action="" method="post" className="form-horizontal">
                      <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="area-name">Area Name</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={area_name} onChange={this.handleUserChange} id="area-name" name="area_name" placeholder="Enter Area Name" autoComplete="email" />
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
