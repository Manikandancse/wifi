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
          area_name: '',
          status: '',
        }
    }
    componentDidMount() {
      const { params } = this.props.match;
      const {id} = params
      axios.get(`http://localhost:8080/webapi/listarea/${id}`).then(res=>{
        const { area_name, status} = res.data;
        this.setState({
          area_name, 
          status,
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
      const { id, area_name, status } = this.state;
      if(!!area_name && !!status) {
        axios.put(`http://localhost:8080/webapi/modifyarea/${id}`,{
          area_name,
          status,
          user_id:1
        }).then(res=>{
          this.props.history.push('/areas');
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
        const { area_name, status } = this.state;
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
