import { h } from 'preact';

export const Link = (props) => {
  return <a class={`${props.class ? props.class : ``} tw:text-sm tw:text-booker tw:hover:text-booker tw:font-bold`} href={props.href}>{props.text}</a>
}

export default Link;