import React, {Component, Suspense} from 'react';
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
import CIcon from '@coreui/icons-react';
import axios from 'axios';


class UserEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gst_id: '',
            gst_percent: '',
            gst_fromdate: '',
            gst_todate: '',
            status: 1,
        }
    }
    componentDidMount() {
      const { params } = this.props.match;
      const {id} = params
      axios.get(`http://localhost:8080/webapi/listgst/${id}`).then(res=>{
        const { gst_id, status, gst_percent, gst_fromdate, gst_todate} = res.data;
        this.setState({
          gst_id, 
          status, 
          gst_percent, 
          gst_fromdate, 
          gst_todate,
          id
        })
      }).catch(err=>{
        console.log('err',err)
      })
    }
    handleCancel = ()=> {
        this.props.history.push('/users')
    }

    handleSubmit = () => {
      const { id, gst_id, status, gst_percent, gst_fromdate, gst_todate } = this.state;
      if(!!gst_id && !!gst_percent && !!gst_fromdate && !!gst_todate && !!status){
        axios.put(`http://localhost:8080/webapi/modifygst/${id}`,{
          gst_id, 
          status, 
          gst_percent, 
          gst_from: gst_fromdate, 
          gst_to: gst_todate, 
          user_id:id
        }).then(res=>{
          this.props.history.push('/gst');
        }).catch(err=>{
          console.log('err',err)
          alert(`Error try again`)
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
        const { gst_id, gst_percent, gst_fromdate, gst_todate, status } = this.state;
        return (
            <>
              <Suspense fallback={<div>Loading...</div>}>
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
                      <CButton type="submit" size="sm" color="primary" onClick={this.handleSubmit}><CIcon name="cil-scrubber" /> Update</CButton> 
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
              </Suspense>
            </>
          )
    }
}

export default UserEdit
