import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Rhubarb-Crisp_EXPS_CIMZ19_4530_C01_09_6b-696x696.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Rhubarb-Crisp_EXPS_CIMZ19_4530_C01_09_6b-696x696.jpg')
  ];

  constructor() {}

  ngOnInit() {
  }

}
