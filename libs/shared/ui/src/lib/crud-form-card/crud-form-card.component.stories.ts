import { SharedMaterialModule } from '@pwc/shared/material';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CrudFormCardComponent } from './crud-form-card.component';

export default {
  title: 'CrudFormCardComponent',
  component: CrudFormCardComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedMaterialModule],
    }),
  ],
} as Meta<CrudFormCardComponent>;

const Template: Story<CrudFormCardComponent> = (
  args: CrudFormCardComponent
) => ({
  component: CrudFormCardComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  settings: {},
  readyToSave: false,
};
