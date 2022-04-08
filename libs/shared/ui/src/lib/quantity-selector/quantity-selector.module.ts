import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedMaterialModule } from "@pwc/shared/material";
import { QuantitySelectorComponent } from "./quantity-selector.component";

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  declarations: [QuantitySelectorComponent],
  exports: [QuantitySelectorComponent],
})
export class QuantitySelectorModule {}
