const url='http://localhost:9005/api/auth/'

const logIn= async(email, password)=>{
    const response=await fetch(url+'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    const data=await response.json()
    return data

}

const logOut=async()=>{
    const response=await fetch(url+'logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
      
    })
    const data=await response.json()
    return data
}

export{
    logIn,
    logOut
}