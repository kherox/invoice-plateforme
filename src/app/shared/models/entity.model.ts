
/**
 *  
 * 
    
    Entity
    name         = db.StringField()
    categories   = db.StringField()
    contact      = db.StringField()
    email        = db.StringField()
    code         = db.StringField()
    created      = db.DateTimeField()
    website      = db.StringField()
    country      = db.StringField()
    city         = db.StringField()
    description  = db.StringField() #D
 */

 export class Entity {

    constructor(public name: string, public categories: string, public contact: string,
                public email: string, public code: string, public website: string ,
                public country: string, public city: string, public description: string) {}

}
