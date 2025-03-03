import { h } from 'preact';

export const Link = (props) => {
  return <a class={`tw:text-sm tw:text-booker tw:hover:text-booker tw:font-bold ${props.class ? props.class : ``} `} href={props.href}>{props.text}</a>
}

export default Link;