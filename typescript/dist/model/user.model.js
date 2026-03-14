"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.role = void 0;
var role;
(function (role) {
    role["ADMIN"] = "admin";
    role["CUSTOMER"] = "customer";
})(role || (exports.role = role = {}));
class User {
    constructor(id, username, email, role) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
    }
}
exports.User = User;
