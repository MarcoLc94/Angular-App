import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "auth", loadChildren: () => import("../app/auth/auth.routes")
    }, 
    // {
    //     path: "tasks", loadChildren: () => import("../app/auth/auth.routes")
    // }
];
