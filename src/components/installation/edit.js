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
          id: '',
          installation_amount: 0,
          status: '',
        }
    }
    componentDidMount() {
      const { params } = this.props.match;
      const {id} = params
      axios.get(`http://localhost:8080/webapi/listinstalltion/${id}`).then(res=>{
        const { installation_amount, status} = res.data;
        this.setState({
          installation_amount, 
          status,
          id
        })
      }).catch(err=>{
        console.log('err',err)
      })
    }
    handleCancel = ()=> {
        this.props.history.push('/installation/')
    }

    handleSubmit = () => {
      const { id, installation_amount, status } = this.state;
      if(!!installation_amount && !!status) {
        axios.put(`http://localhost:8080/webapi/modifyinstallation/${id}`,{
          installation_amount,
          status,
          user_id:1
        }).then(res=>{
          this.props.history.push('/installation');
        }).catch(err=>{
          console.log('err',err)
          alert(`Error try again`)
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
        const { installation_amount, status } = this.state;
        return (
            <>
              <Suspense fallback={<div>Loading...</div>}>
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
                            <CLabel htmlFor="installation_amount">Installation  Amount</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={installation_amount} onChange={this.handleUserChange} id="installation-amount" name="installation_amount" placeholder="Enter installation amount" />
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
