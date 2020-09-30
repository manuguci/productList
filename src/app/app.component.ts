import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductServiceService } from './services/product-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'productList';
  public products:any;
  public items:number = 0;
  createFormGroup() {

    return new FormGroup({
      search: new FormControl('',[Validators.required, Validators.maxLength(25)])
      
    });
  }

  searchForm:FormGroup;
  constructor(private productService: ProductServiceService){
    this.searchForm = this.createFormGroup();
  }

  onSendSearch(){
    if (this.searchForm.valid){
      this.productService.getProducts(this.searchForm.get('search').value)
      .subscribe(res => {
          this.products = res;
          this.items = this.products.length;
      }, err => {
        console.log("Service error..." + JSON.stringify(err));        
      });
    } else {
      console.log("Invalid form...");
    }
  }

  ngOnInit() {
    this.searchForm = this.createFormGroup();
  }

  get search()      { return this.searchForm.get('search');}

}
