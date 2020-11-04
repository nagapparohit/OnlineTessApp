import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private categorySource = "assets/category.json";

  public  categoryList;

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.categorySource).subscribe(data =>{
      console.log(data);
      this.categoryList = data;
    },err => {
      console.log(err);
    })
  }

}
