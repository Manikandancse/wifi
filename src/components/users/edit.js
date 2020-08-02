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
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

class UserEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true, 
            setCollapsed: true,
            showElements: true, 
            setShowElements: true,
            user_name: 'Karthi', 
            user_mobile: '9876543211',
            user_email: 'karthi@gmail.com',
            user_address: 'salem',
            user_pincode: '636501',
            user_role: 'super-admin',
        }
    }

    handleCancel = ()=> {
        this.props.history.push('/users')
    }

    handleSubmit = () => {
      const { user_name, user_mobile, user_email, user_address, user_pincode, user_role } = this.state;
      console.log('aaa',this.state)
    }

    handleUserChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        })
    }


    render() {
        const { user_name, user_mobile, user_email, user_address, user_pincode, user_role, status } = this.state;
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
                            <CLabel htmlFor="user-name">Name</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={user_name} onChange={this.handleUserChange} id="user-name" name="user_name" placeholder="Enter Name" autoComplete="email" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="user-mobile">Mobile</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="mobile" value={user_mobile} onChange={this.handleUserChange} id="user-mobile" name="user_mobile" placeholder="Enter MobileNo" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="user-email">Email</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="email" value={user_email} onChange={this.handleUserChange} id="user-email" name="user_email" placeholder="Enter Email" autoComplete="email" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="hf-email">Address</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CTextarea 
                                value={user_address}
                                onChange={this.handleUserChange}
                                name="user_address" 
                                id="user-address" 
                                rows="5"
                                placeholder="Address" 
                                />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="user-pincode">Pin Code</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="number" value={user_pincode} onChange={this.handleUserChange} id="user-pincode" name="user_pincode" placeholder="Pin Code" autoComplete="current-password" />
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel htmlFor="user-role">Role</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CSelect custom name="user_role" onChange={this.handleUserChange} value={user_role} id="user-role">
                                <option value="">Please select Role</option>
                                <option value="super-admin">Super Admin</option>
                                <option value="admin">Admin</option>
                                <option value="customer">Customer</option>
                              </CSelect>
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

export default UserEdit
