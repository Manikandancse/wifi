import React, { Component } from 'react'
import {
  CButton,
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'
import axios from 'axios';

// import usersData from './UserData';

const getBadge = status => {
  switch (status) {
    case '1': return 'success'
    case '0': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const handleEdit = (props, item) => {
    props.history.push(`/users/edit/${item}`)
}

const handleDelete = (props, item) => {
    console.log("bbbbb",props, item)
}

const fields = ['customer_name','customer_id', 'customer_mobile', 'status', 'action']

class Tables extends Component {
  constructor(props){
    super(props);
    this.state = {
      usersData:[]
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8080/webapi/listuser').then(res=>{
      const usersData = res.data;
      this.setState({
        usersData
      })
    }).catch(err=>{
      console.log("err",err)
    })
  }

  handlePayment = id => {
    this.props.history.push(`/payments/add/${id}`)
  }

  render() {
    const { usersData } = this.state;
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                Customer List
                <div className="card-header-actions">
                  <a href="/users/add" rel="noreferrer noopener" className="card-header-action">
                    <small className="text-muted">Add</small>
                  </a>
                </div>
              </CCardHeader>
              <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots = {{
                  'status':
                    (item)=>(
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status === '1' ? 'Active' : 'In-Active'}
                        </CBadge>
                      </td>
                    ),
                    'action':
                    (item)=>(
                        <td>
                            <CButton size="sm" shape="pill" onClick={(event)=>handleEdit(this.props,item.id)} color="success">Edit</CButton>
                            <CButton size="sm" shape="pill" onClick={(event)=>handleDelete(this.props,item.id)} color="danger">Delete</CButton>
                            <CButton size="sm" shape="pill" onClick={(event)=>this.handlePayment(item.id)} color="danger">Payment</CButton>
                        </td>
                    )
                }}
              />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
}

export default Tables
