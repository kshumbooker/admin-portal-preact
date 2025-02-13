import { h } from 'preact';


export function Button(props) {
  return <button type={props.type} class="tw:w-full tw:my-2 tw:login-btn tw:bg-booker hover:bg-booker-600 tw:text-white tw:font-medium tw:px-3 tw:py-1.5 tw:rounded-md tw:transition-colors">{props.text}</button>;
}
