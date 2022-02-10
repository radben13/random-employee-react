import { useRouter } from 'next/router'
import AppLayout from '../../components/AppLayout'
import { useState, useEffect } from 'react'


const EmployeeDetail = () => {
    const router = useRouter()
    const [,i,p] = /i(\d+)p(\d+)/.exec(router.query?.id) || []
    const [employee, setEmployee] = useState(null)
    const pageSize = 52, index = parseInt(i), page = parseInt(p)
    useEffect(() => {
        if (!employee && !Number.isNaN(i)) {
        fetch('https://randomuser.me/api?seed=react-jab&results=52&page='+page)
            .then(res => res.json())
            .then(data => setEmployee((data?.results || [])[index] || {}))
        }
    })

    return <AppLayout>
        <img src={employee?.picture?.large} />
        <h1>{employee?.name?.first} {employee?.name?.last}</h1>
        <div>Details:</div>
        <ul>
            {!employee ? <li key="0"></li> 
                : Object.keys(employee)
                    .filter(key => ['login', 'registered', 'id', 'picture'].indexOf(key) < 0)
                    .map(key => {
                        const capKey = key[0].toUpperCase()+key.substr(1)
                        if (typeof employee[key] == 'string') {
                            return <li key={key}><strong>{capKey}</strong>&mdash;{employee[key]}</li>
                        } else {
                            return <li key={key}><strong>{capKey}</strong>&mdash;<pre>{JSON.stringify(employee[key])}</pre></li>
                        }
                    })}
        </ul>
    </AppLayout>
}

export default EmployeeDetail