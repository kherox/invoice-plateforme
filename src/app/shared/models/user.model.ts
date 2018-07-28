/**
 * User 
 * _id       = db.ObjectIdField()
    name      = db.StringField()
    username  = db.StringField()
    password  = db.StringField()
    contact   = db.StringField()
    email     = db.EmailField()
    created   = datetime.datetime.now()
 */

 export class User {

    constructor(public id: string, public name: string, public username: string,
         public password: string, public contact: string, public email: string ) {}
 }
        