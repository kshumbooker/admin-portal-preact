import { fn } from '@storybook/test';

import { Button } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export const Default = () => <Button type="submit" text="Sign In" size="full"></Button>
