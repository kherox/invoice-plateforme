import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { News } from '../shared/models/news.model';
import { InvoiceService } from '../shared/services/invoice.service';

import { Chance } from "chance";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  /**
   * Permet de creer le formulaire de connection
   *
   * @type {FormGroup}
   * @memberof NewsComponent
   */
  public postForm: FormGroup;
  public posts: any[] =  [];
  /**
   * Permet de generer un nom aleatoirement
   *
   * @private
   * @type {Chance}
   * @memberof NewsComponent
   */
  private chance: Chance;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.chance = new Chance();
    this.postForm = new FormGroup({
      'content' : new FormControl(null),
      'owner'    : new FormControl(this.chance.name())
    });
    if (this.posts.length === 0) {
      this.invoiceService.getter('posts').subscribe(
        (response: any[]) => { this.posts = response; console.log(response);  }
      );
    } else {
       console.log(this.posts);
    }
  }
  createPost() {
    if (this.postForm.value) {
      this.invoiceService.saver('posts', this.postForm.value).subscribe(
        (response ) => {
          this.posts.push({
            'content'  : this.postForm.value.content ,
            'created'  : Date.now(),
            'owner'     : this.postForm.value.owner });
          this.postForm.reset();
        },
        (error) => console.log(error)
      );
    }
  }

}
