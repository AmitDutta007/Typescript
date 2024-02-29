"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const loguser1 = {
    name: "Amit",
    email: "amit@gmail.com",
    password: "qwqe",
    role: Roles.admin
};
const loguser2 = {
    name: "Ad",
    email: "dutta@gmail.com",
    password: "qwe",
    role: Roles.user
};
const isAdmin = (user) => {
    const { name, role } = user;
    return role === "admin" ? `${name} is allow to edit the website` : `${name} is not
    allow to edit the website`;
};
console.log(isAdmin(loguser1));
console.log(isAdmin(loguser2));
