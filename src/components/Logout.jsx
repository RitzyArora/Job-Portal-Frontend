import React from 'react'

const Logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    window.dispatchEvent(new Event("storage"))
    window.location.href="/login"
 
}

export default Logout