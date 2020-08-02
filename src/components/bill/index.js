import React from 'react'
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

import usersData from './UserData';

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const handleEdit = (props, item) => {
    props.history.push(`/bills/edit/${item}`)
}

const handleDelete = (props, item) => {
    console.log("bbbbb",props, item)
}

const fields = ['name','registered', 'role', 'status', 'action']

const Tables = (props) => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Bill List
              <div className="card-header-actions">
                <a href="/bills/add" rel="noreferrer noopener" className="card-header-action">
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
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                  'action':
                  (item)=>(
                      <td>
                          <CButton size="sm" shape="pill" onClick={(event)=>handleEdit(props,item.id)} color="success">Edit</CButton>
                          <CButton size="sm" shape="pill" onClick={(event)=>handleDelete(props,item.id)} color="danger">Delete</CButton>
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

export default Tables
