import { fn } from '@storybook/test';

import { Button } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export const Default = () => <Button type="submit" text="Sign In" size="full" classes="tw:w-full tw:my-2 tw:login-btn tw:bg-booker hover:bg-booker-600 tw:text-white tw:font-medium tw:px-3 tw:py-1.5 tw:rounded-md tw:transition-colors"></Button>
