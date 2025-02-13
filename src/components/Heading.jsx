import { h } from 'preact';

export function Heading(props) {
  return <h2 class="tw:text-2xl tw:font-bold tw:text-gray-900 tw:mb-8 tw:text-center">{ props.text }</h2>;
};
