import { h } from 'preact';

export const Button = (props) => {
  return props.type === 'link' ? <a class={`tw:text-black-1000 tw:cursor-pointer tw:decoration-primary tw:font-normal tw:underline-offset-8 tw:text-lg tw:lg:whitespace-nowrap tw:lg:hover:underline ${props.class ? props.class : ``}`} href={props.href}>{props.text}</a> :
  <button type={props.type} class={`${props.size == 'full' ? `tw:w-full` : ``} tw:my-4 tw:no-underline tw:inline-flex tw:text-center tw:items-center tw:justify-center tw:rounded-[120px] tw:focus:outline-hidden tw:transition-all tw:leading-none tw:font-medium tw:px-4 tw:py-3 tw:font-normal tw:bg-black-1000 tw:text-white-1000 tw:cursor-pointer tw:hover:bg-tertiary-500 tw:hover:text-black-1000`}>{props.text}</button>;
}

export default Button;