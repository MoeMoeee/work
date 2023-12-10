import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'author',
        data: { pageTitle: 'Authors' },
        loadChildren: () => import('./author/author.routes'),
      },
      {
        path: 'book',
        data: { pageTitle: 'Books' },
        loadChildren: () => import('./book/book.routes'),
      },
      {
        path: 'customer',
        data: { pageTitle: 'Customers' },
        loadChildren: () => import('./customer/customer.routes'),
      },
      {
        path: 'rental',
        data: { pageTitle: 'Rentals' },
        loadChildren: () => import('./rental/rental.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
