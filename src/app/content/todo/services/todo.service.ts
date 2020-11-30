import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/api/api.service';

const routes = {
  all: () => `/todo/list`,
  create: () => "/todo/add",
  delete: (id: string) => `/todo/delete/${id}`,
  // findByOrganization: (id: string) =>
  //   `/super-admin/users?organization_id=${id}`,
  // findOne: (id: string) => `/super-admin/users/${id}`,
  // create: () => "/super-admin/users",
  // update: (id: string) => `/super-admin/users/${id}`,
  // delete: (id: string) => `/super-admin/users/${id}`,
  // roles: () => `/super-admin/roles`,
  // organizations: () => `/super-admin/organizations`,
  // searchByQuery: (q) => `/super-admin/users?searchQuery=${q}`,
  // updateProfile: (id) => `/super-admin/users/${id}`,
  // // addRole: () => `/admin/role`

};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private _api: ApiService) { }


  getAll(): Observable<any[]> {
    return this._api.getWithoutToken<any>(routes.all());
  }
  addTodo(todo:any): Observable<any> {
   return this._api.postWithoutToken<any>(routes.create(), todo);
  }

  deleteTodo(id: string): Observable<any> {
    return this._api.deleteById<any>(routes.delete(id));
  }
}
