import {
  moduleMetadata,
  Story,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { QuantitySelectorComponent } from './quantity-selector.component';
import { action } from '@storybook/addon-actions';
import { SharedMaterialModule } from '@pwc/shared/material';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuantitySelectorSettings } from './models/quantity-selector.model';
import { Primary } from '../crud-form-card/crud-form-card.component.stories';
export default {
  title: 'QuantitySelectorComponent',
  component: QuantitySelectorComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedMaterialModule, CommonModule, BrowserAnimationsModule],
      declarations: [QuantitySelectorComponent],
    }),
    // With template
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
    // With component which contains ng-content
    //componentWrapperDecorator(SuperiorEdgeReached),
  ],

  argTypes: { onAdd: { action: 'added' }, onRemove: { action: 'removed' } },
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as Meta<QuantitySelectorComponent>;

const actionsData = {
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
  settings: {
    increment: 1,
    quantity: 50,
    inferiorEdge: 0,
    superiorEdge: 100,
  },
};

export const SuperiorEdgeReached = Template.bind({});
SuperiorEdgeReached.args = {
  settings: {
    ...(Default.args.settings as QuantitySelectorSettings),
    quantity: 101,
  },
  hasSuperiorEdgeError: true,
};

export const InferiorEdgeReached = Template.bind({});
InferiorEdgeReached.args = {
  settings: {
    ...(Default.args.settings as QuantitySelectorSettings),
    quantity: -1,
  },
  hasInferiorEdgeError: true,
};
