import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/button/button.component';

storiesOf('My Button', module)
  .add('with some emoji', () => ({
    component: ButtonComponent,
    props: {
      text: 'This is Button Text',
    },
  }))
  .add('with some emoji and action', () => ({
    component: ButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
      click: action('clicked'),
    },
  }));