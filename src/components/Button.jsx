import { h } from 'preact';

export const Button = (props) => {
  return <button type={props.type} class="tw:w-full tw:my-2 tw:login-btn tw:bg-booker tw:text-white tw:font-bold tw:px-3 tw:py-1.5 tw:rounded-md tw:transition-colors tw:cursor-pointer">{props.text}</button>;
}

export default Button;