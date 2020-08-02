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
            gst_id: 'GST00',
            gst_percent: '18',
            gst_fromdate: '26-07-2020',
            gst_todate: '26-10-2020',
            status: 1,
        }
    }

    handleCancel = ()=> {
        this.props.history.push('/gst')
    }

    handleSubmit = () => {
      const { gst_id, gst_percent, gst_fromdate, gst_todate, status } = this.state;
      if(!!gst_id && !!gst_percent && !!gst_fromdate && !!gst_todate && !!status){
        axios.post('http://localhost:8080/webapi/addgst',{
          gst_id, 
          gst_percent, 
          gst_from: gst_fromdate, 
          gst_to: gst_todate, 
          user_id: 1,
          status
        }).then(()=>{
          this.props.history.push('/gst')
        }).catch(err=>{
          alert('Error Try again',err);
        })
      }else{
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
        const { gst_id, gst_percent, gst_fromdate, gst_todate, status } = this.state;
        return (
            <>
              <CRow>
                <CCol xs="12" md="10">
                  <CCard>
                    <CCardHeader>
                      GST Add
                      <small> Form</small>
                    </CCardHeader>
                    <CCardBody>
                      <CForm action="" method="post" className="form-horizontal">
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="gst-id">GST ID</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={gst_id} onChange={this.handleUserChange} id="gst-id" name="gst_id" placeholder="Enter GST ID"  />
                          </CCol>
                        </CFormGroup>              
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="gst-percent">GST %</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={gst_percent} onChange={this.handleUserChange} id="gst-percent" name="gst_percent" placeholder="Enter GST %"  />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="gst-from">GST FROM</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="date" value={gst_fromdate} onChange={this.handleUserChange} id="gst-from" name="gst_fromdate" placeholder="Enter GST From Date"  />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="gst-to">GST To</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="date" value={gst_todate} onChange={this.handleUserChange} id="gst-to" name="gst_todate" placeholder="Enter GST To Date"  />
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
