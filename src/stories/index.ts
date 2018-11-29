import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../../projects/ui-kit/src/lib/button/button.component';
import { WelcomeComponent } from '../../projects/ui-kit/src/lib/welcome/welcome.component';
import { KnobsComponent } from '../../projects/ui-kit/src/lib/knobs/knobs.component';
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date
} from '@storybook/addon-knobs/angular';
storiesOf('Welcome', module)
  .addDecorator(withKnobs)
  .add('to Angular Storybook', () => ({
    component: WelcomeComponent,
    props: {}
  }))
  .add('how to use Knobs', () => {
    const name = text('Name', 'MJ');
    const stock = number('Stock', 20, {
      range: true,
      min: 0,
      max: 30,
      step: 5
    });
    const fruits = {
      apples: 'Apple',
      bananas: 'Banana',
      cherries: 'Cherry'
    };
    const fruit = select('Fruit', fruits, 'apple');
    const price = number('Price', 2.25);

    const border = color('Border', 'deeppink');
    const today = date('Today', new Date('Nov 29 2019'));
    const items = array('Items', ['Laptop', 'Book', 'Mobile']);
    const nice = boolean('Nice', true);

    return {
      component: KnobsComponent,
      props: {
        name,
        stock,
        fruits,
        fruit,
        price,
        border,
        today,
        items,
        nice
      }
    };
  });


storiesOf('My Button', module)
  .add('with some emoji', () => ({
    component: ButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }))
  .add('with some emoji and action', () => ({
    component: ButtonComponent,
    props: {
      text: 'My Button',
      click: action('clicked'),
    },
  }));
