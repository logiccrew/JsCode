const getUser = async(id) =>{
    try {
        const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log(response)

    if(!response.ok){
        throw new Error("User not found")
    }
    const user = await response.json();
console.log(user.name)
    return user.name;
    } catch (error) {
        console.log("Something went wrong", error)
    }
}
getUser(0)