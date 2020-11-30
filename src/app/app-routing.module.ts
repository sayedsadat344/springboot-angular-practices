import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TodoComponent } from './content/todo/components/list/todo.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "todo",
    pathMatch: "full",
  },
  {
    path: "todo",
    component: TodoComponent,
    data: { title: "Full Views" }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
