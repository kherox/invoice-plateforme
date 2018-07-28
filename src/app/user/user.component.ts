import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../shared/models/user.model';
import { InvoiceService } from '../shared/services/invoice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

/**
 * User
 * _id       = db.ObjectIdField()
    name      = db.StringField()
    username  = db.StringField()
    password  = db.StringField()
    contact   = db.StringField()
    email     = db.EmailField()
    created   = datetime.datetime.now()

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
export class UserComponent implements OnInit {

  UserEntityForm: FormGroup;
  UserModel: User;

  constructor(private service: InvoiceService) { }

  ngOnInit() {
    this.UserEntityForm = new FormGroup({
        'userData' : new FormGroup({
          'name': new FormControl(null),
          'username': new FormControl(null),
          'password': new FormControl(null),
          'contact': new FormControl(null),
          'email': new FormControl(null),
        }),
        'entityData' : new FormGroup({
          'name'  : new FormControl(null),
          'categories' : new FormControl(null),
          'contact': new FormControl(null),
          'email': new FormControl(null),
          'code': new FormControl(null),
          'website': new FormControl(null),
          'city': new FormControl(null),
          'country': new FormControl(null)
        })

    })
  }

  createUserAndEntity() {
    this.service.saver("useritem", this.UserEntityForm.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}


/**
 *  'userData' : new FormGroup({
          'name': new FormControl(null),
          'username': new FormControl(null),
          'password': new FormControl(null),
          'contact': new FormControl(null),
          'email': new FormControl(null),
        }),
 */
