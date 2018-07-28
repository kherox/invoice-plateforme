import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from "@angular/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productForm: FormGroup;
  productUploadForm : FormGroup;

  constructor(private _http : Http) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      'name' : new FormControl(null),
      'quantity' : new FormControl(null),
      'price' : new FormControl(null)
    });
    this.productUploadForm = new FormGroup({
      'products' : new FormControl(null)
    })
  }

  productSubmit(){
    console.log(this.productForm)
  }

  uploadProductFile(event : any){

    
    if(confirm("Voulez-vous vraiment charger ce fichier ?")){
      let file: File = event.target.files[0]
      this._http.post("http://127.0.0.1:5000/upload/product", file)
      console.log(file)

      
    }
    
    
  }

}
