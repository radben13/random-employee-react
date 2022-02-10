import Link from "next/link"

import { useState, useEffect } from "react"

const EmployeeList = (props) => {
  const [page, setPage] = useState(1)
  const [requestedPage, setRequestedPage] = useState(null)
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    if (!employees.length || requestedPage !== page) {
      setRequestedPage(page)
      fetch('https://randomuser.me/api?seed=react-jab&results=52&page=' + page)
        .then(res => res.json())
        .then(data => setEmployees(data?.results || []))
    }
  })
  return (
    <div>
      <h1>Employee List - Page {page}</h1>
      <ul className="employee-list">
        {employees.map((em, index) => {
          const emName = `${em.name?.first || ''} ${em.name?.last || ''}`
          return (
            <li key={page+'_'+index} className="employee-link">
              <Link href={`/employee/i${index}p${page}`}>
                <a href="#">
                  <img src={em.picture?.thumbnail || '//placehold.it/48x48'} alt={emName} />
                  <span>{emName}</span>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
      <button type="button" className="btn-default btn me-2" disabled={page == 1} onClick={() => setPage(page - 1)}>Previous Page</button>
      <button type="button" className="btn-primary btn" onClick={() => setPage(page + 1)}>Next Page</button>
    </div>
  )
}

export default EmployeeList
