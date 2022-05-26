import { NgModule } from "@angular/core";
import { DashboardTileModule } from "@pwc/shared/ui";
import { DashboardModule } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [],
  imports: [
    DashboardModule
  ],
  exports: [DashboardModule],
})
export class FeatureDashboardModule {}
