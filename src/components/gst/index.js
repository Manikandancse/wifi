import React, { Component, Suspense } from 'react'
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

const getBadge = status => {
  switch (status) {
    case '1': return 'success'
    case '0': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const getStatus = status => {
  return status === '1' ? 'Active' : 'In-Active'
}

const handleEdit = (props, item) => {
    props.history.push(`/gst/edit/${item}`)
}

// const handleDelete = (props, item) => {
//   axios.delete(`http://localhost:8080/webapi/deletearea${item}`,{
//     user_id: item
//   }).then(res=>{
    
//   }).catch(err=>{
//     console.log("err",err)
//   })
// }

const fields = ['gst_id','gst_percent','gst_fromdate','gst_todate', 'status', 'action']

class Tables extends Component {
  constructor(props){
    super(props);
    this.state = {
      usersData:[]
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8080/webapi/listgst').then(res=>{
      const usersData = res.data.results;
      this.setState({
        usersData
      })
    }).catch(err=>{
      console.log("err",err)
    })
  }

  handleDelete = (id) => {
    if(window.confirm('Are you sure want to delete?')) {
      axios.delete(`http://localhost:8080/webapi/deletegst/${id}`,
      {
        // headers: {
        //   Authorization: 'authorizationToken'
        // },
        data: {
          user_id: id
        }
      }).then(res=>{
        const { usersData } = this.state;
        const result = usersData.filter(val=>val.id !== id);
        this.setState({
          usersData: result
        })
      }).catch(err=>{
        console.log("err",err)
      })
    }
  }

  handleAdd = () =>  {
    this.props.history.push('/gst/add')
  }

  render() {
    const { usersData } = this.state;
    return (
      <>
        <Suspense fallback={<div>Loading...</div>} />
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                Area List
                <div className="card-header-actions">
                  <span onClick={this.handleAdd} rel="noreferrer noopener" className="card-header-action">
                    <small className="text-muted">Add</small>
                  </span>
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
                          {getStatus(item.status)}
                        </CBadge>
                      </td>
                    ),
                    'action':
                    (item)=>(
                        <td>
                            <CButton size="sm" shape="pill" onClick={(event)=>handleEdit(this.props,item.id)} color="success">Edit</CButton>
                            <CButton size="sm" shape="pill" onClick={(event)=>this.handleDelete(item.id)} color="danger">Delete</CButton>
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
