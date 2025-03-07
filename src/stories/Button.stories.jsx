import { fn } from '@storybook/test';

import { Button } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export const Default = () => <Button type="submit" text="Sign In" size="full" classes="tw:w-full tw:my-2 tw:login-btn tw:bg-booker hover:bg-booker-600 tw:text-white tw:font-medium tw:px-3 tw:py-1.5 tw:rounded-md tw:transition-colors tw:no-underline tw:inline-flex tw:items-center tw:justify-center tw:rounded-[120px] tw:focus:outline-hidden tw:transition-all tw:leading-none tw:font-medium tw:p-4 tw:text-lg tw:bg-black-1000 tw:text-white-1000 tw:cursor-pointer tw:hover:bg-tertiary-500 tw:hover:text-black-1000 tw:whitespace-nowrap tw:w-full tw:my-4"></Button>
