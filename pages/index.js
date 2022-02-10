import AppLayout from '../components/AppLayout'
import EmployeeList from '../components/EmployeeList'
import { useEffect, useState } from 'react'

export default function Home() {
  const bodyClass = 'random-employee-react-body'
  return (
      <AppLayout bodyClass={bodyClass}>
        <EmployeeList />
      </AppLayout>
  )
}
