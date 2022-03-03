import { SharedMaterialModule } from '@pwc/shared/material';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DashboardTileComponent } from './dashboard-tile.component';
import { CardModel } from './models/card.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export default {
  title: 'DashboardTileComponent',
  component: DashboardTileComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedMaterialModule, BrowserAnimationsModule],
    }),
  ],
} as Meta<DashboardTileComponent>;

const Template: Story<DashboardTileComponent> = (
  args: DashboardTileComponent
) => ({
  component: DashboardTileComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  settings: new CardModel(3, 3, 'default title'),
};
