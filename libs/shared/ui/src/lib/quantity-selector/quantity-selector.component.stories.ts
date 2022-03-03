import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { QuantitySelectorComponent } from './quantity-selector.component';
import { action } from '@storybook/addon-actions';
import { SharedMaterialModule } from '@pwc/shared/material';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export default {
  title: 'QuantitySelectorComponent',
  component: QuantitySelectorComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedMaterialModule, CommonModule, BrowserAnimationsModule],
      declarations: [QuantitySelectorComponent],
    }),
  ],

  argTypes: { onAdd: { action: 'added' }, onRemove: { action: 'removed' } },
} as Meta<QuantitySelectorComponent>;

export const actionsData = {
  onAdd: action('onAdd'),
  onRemove: action('onRemove'),
};

const Template: Story<QuantitySelectorComponent> = (
  args: QuantitySelectorComponent
) => ({
  component: QuantitySelectorComponent,
  props: {
    ...args,
    onAdd: actionsData.onAdd,
    onRemove: actionsData.onRemove,
  },
});

export const Default = Template.bind({});
Default.args = {
  increment: 1,
  quantity: 50,
  inferiorEdge: 0,
  superiorEdge: 100,
  hasInferiorEdgeError: false,
  hasSuperiorEdgeError: false,
};

export const SuperiorEdgeReached = Template.bind({});
SuperiorEdgeReached.args = {
  ...Default.args,
  quantity: 101,
  hasSuperiorEdgeError: true,
};

export const InferiorEdgeReached = Template.bind({});
InferiorEdgeReached.args = {
  ...Default.args,
  quantity: -1,
  hasInferiorEdgeError: true,
};
