const getUserDat = (req, res) => {
    return res.send("Hello My name Node js")
}

const createNewUser = (req, res) => {
    return res.send("Create New User")
}


export { getUserDat,createNewUser }