enum Roles {
    user = "user",
    admin = "admin"
}
type LoginDetails = {
    name?: string;
    email: string;
    password: string;
    role: Roles
}

const loguser1: LoginDetails = {
    name: "Amit",
    email: "amit@gmail.com",
    password: "qwqe",
    role: Roles.admin
}
const loguser2: LoginDetails = {
    name: "Ad",
    email: "dutta@gmail.com",
    password: "qwe",
    role: Roles.user
}

const isAdmin = (user: LoginDetails) => {
    const { name, role } = user;
    return role === "admin" ? `${name} is allow to edit the website` : `${name} is not
    allow to edit the website`
}

console.log(isAdmin(loguser1))
console.log(isAdmin(loguser2))

