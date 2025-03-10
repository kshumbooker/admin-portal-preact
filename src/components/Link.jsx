import { h } from 'preact';

export const Link = (props) => {
  return <a class={`tw:text-black-1000 tw:cursor-pointer tw:decoration-primary tw:font-normal tw:underline-offset-8 tw:text-lg tw:lg:whitespace-nowrap tw:lg:hover:underline ${props.classes ? props.classes : ``} `} href={props.href}>{props.text}</a>
}

export default Link;