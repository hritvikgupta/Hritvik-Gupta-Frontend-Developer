import React, {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [company, setCompany] = useState(null)
    useEffect(()=>{
        const fetchCompany = async () => {
            const res = await fetch("https://api.spacexdata.com/v4/company");
            const data = await res.json()
            setCompany(data)
        }
        fetchCompany();
    }, [])
  return (
    <AuthContext.Provider value = {company}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider