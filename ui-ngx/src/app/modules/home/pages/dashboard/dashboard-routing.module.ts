///
/// Copyright © 2016-2019 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EntitiesTableComponent} from '../../components/entity/entities-table.component';
import {Authority} from '@shared/models/authority.enum';
import {DashboardsTableConfigResolver} from './dashboards-table-config.resolver';

const routes: Routes = [
  {
    path: 'dashboards',
    data: {
      breadcrumb: {
        label: 'dashboard.dashboards',
        icon: 'dashboard'
      }
    },
    children: [
      {
        path: '',
        component: EntitiesTableComponent,
        data: {
          auth: [Authority.TENANT_ADMIN, Authority.CUSTOMER_USER],
          title: 'dashboard.dashboards',
          dashboardsType: 'tenant'
        },
        resolve: {
          entitiesTableConfig: DashboardsTableConfigResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    DashboardsTableConfigResolver
  ]
})
export class DashboardRoutingModule { }
