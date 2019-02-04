module.exports=(request, response, next)=>{

    if(!request.user){
        console.log("hello")
        return response.status(401).send({error:"Youst must be logged in"})
    }
    next();
}