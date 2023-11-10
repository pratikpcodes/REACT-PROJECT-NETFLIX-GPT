 export const validate = (email,password,name,mobile) =>
 {

    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPassWord=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isName=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    const isPhone=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(mobile)
    if (!isEmailValid && !isPassWord && !isName && !isPhone) {
        return ["Email ID is not valid","Password is not valid","Name not valid","Phone not valid"]
    }

else if (!isEmailValid) 
return ["Email ID is not valid","","",""]


else if (!isPassWord) 
return ["","Password is not valid","",""]
else if(!isName)
return ["","","Name not valid",""]
else if(!isPhone)
return ["","","","Phone not valid"]
else

return []

}