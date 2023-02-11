import { Injectable } from '@angular/core';
import { ICategoriesItemRes, ICategoriesRes } from 'src/app/core/contracts/responses';
import { CategoryModel, ICategoryModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CategoriesMapperService {

  constructor() { }

  ICategoriesResToArrayOfICategoryModel(src: ICategoriesRes): Array<ICategoryModel> {
    const dest = src.categories.map(this.ICategoriesItemResToICategoryModel);
    return dest;
  }

  ICategoriesItemResToICategoryModel(src: ICategoriesItemRes): ICategoryModel {
    const dest = new CategoryModel(src.id, src.name, src.iconName);
    return dest;
  }
}