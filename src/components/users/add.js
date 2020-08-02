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
            collapsed: true, 
            setCollapsed: true,
            showElements: true, 
            setShowElements: true,
            user_id: 'RAP003',
            user_name:'aaaaa',
            user_mobile: '97876543219',
            user_email: 'aaa@gmail.com',
            user_address: 'sssssssss',
            user_pincode: '123456',
            user_role: 'super-admin',
            user_payment: 'full',
            user_area: [1,2],
            options: [{name: 'Salem', id: 1},{name: 'Jalakandapuram', id: 2}],
            status: 1,
        }
    }

    handleCancel = ()=> {
        this.props.history.push('/users')
    }

    handleSubmit = () => {
      const { user_id, user_name, user_payment, user_mobile, user_email, user_address, user_pincode, user_role, user_area, status } = this.state;
      if(!!user_id && !!user_name && !!user_payment && !!user_mobile && !!user_email && !!user_address 
        && !!user_pincode && !!user_role && !!user_area && !!status){
          axios.post('http://localhost:8080/webapi/adduser',{
            'customerId': user_id,
            'userId': user_id,
            'customerName': user_name,
            'customerEmail': user_email, 
            'customerMobile': user_mobile,
            'customerAddress': user_address,
            'customerPinCode': user_pincode,
            'customerRoleId': user_role.toString(),
            'paymentType': user_payment,
            status
          }).then(res=>{
            this.props.history.push(`/users`)
          }).catch(err=>{
            alert(`Please try again`)
          })
        }else {
          alert(`please fill all the fields`);
          return false;
        }
    }

    onSelect = (selectedList, selectedItem)=> {
        const { user_area, options } = this.state;
        if(selectedItem.name === 'All') {
          const optionids = options.map(val=>val.id);
          this.setState({
            // user_area: ['All',...optionids]
            user_area: [...optionids]
          })
        }else {
          this.setState({
            user_area: [...user_area, selectedItem.id]
          })
        }
    }
    
    onRemove = (selectedList, removedItem)=> {
      const { user_area, options } = this.state;
      const idx = options.findIndex((val,ind)=> val.name === removedItem.name );
      selectedList.splice(idx,1);
      const ids = selectedList.map(val=>val.id);
      console.log(selectedList, removedItem,ids)
      this.setState({
        user_area: [...ids]
      })
    }

    handleUserChange = event => {
        const { name, value } = event.target;
        const {user_area} = this.state;
        if(name === 'user_area') {
          if(user_area.indexOf(value) === -1) {
            console.log(user_area.indexOf(value))
            this.setState({
              [name] : [...user_area, value]
            })
          }else {
            const indx = user_area.indexOf(value);
            console.log(user_area,indx)
            user_area.splice(indx,1);
            console.log(user_area)
            this.setState({
              [name]: [...user_area]
            })
          }
        } else {
          this.setState({
            [name]: value
          })
        }
    }


    render() {
        const { user_name, user_mobile, user_email, user_payment, user_id,
          user_address, user_pincode, user_role, user_area, options, status } = this.state;
          const selcted_Area = options.filter((val,ind)=>{
            return user_area.map(v=> val.id === v)
          })
          let allOptions = []; 
          if(options.length > 0) {
            // allOptions = [{name: 'All', id: 0}, ...options]
            allOptions = [...options]
          }
          // console.log("aaa",allOptions)
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
                            <CLabel htmlFor="user-id">User Id</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CInput type="text" value={user_id} onChange={this.handleUserChange} id="user-id" name="user_id" placeholder="Enter Id" />
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
                            <CLabel htmlFor="user-payment">Payment</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <CSelect custom name="user_payment" onChange={this.handleUserChange} value={user_payment} id="user-payment">
                                <option value="">Please select payment</option>
                                <option value="partial">Partial</option>
                                <option value="full">Full</option>
                              </CSelect>
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
                            <CLabel htmlFor="user-area">Area</CLabel>
                          </CCol>
                          <CCol xs="12" md="9">
                            <Multiselect
                              showCheckbox={true}
                              selectedValues={selcted_Area}
                              options={allOptions}
                              displayValue="name"
                              onSelect={this.onSelect} // Function will trigger on select event
                              onRemove={this.onRemove}
                            />
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
