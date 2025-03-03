import { h } from 'preact';

export const Button = (props) => {
  return props.type === 'link' ? <a class={`${props.class ? props.class : ``} tw:my-2 tw:font-bold tw:px-3 tw:py-1.5 tw:rounded-md tw:transition-colors tw:cursor-pointer`} href={props.href}>{props.text}</a> :
  <button type={props.type} class={`${props.size == 'full' ? `tw:w-full` : ``} tw:my-2 tw:bg-booker tw:text-white tw:font-bold tw:px-3 tw:py-1.5 tw:rounded-md tw:transition-colors tw:cursor-pointer`}>{props.text}</button>;
}

export default Button;