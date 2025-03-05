import { h } from 'preact';

export const NavItemChildren = (props) => {
  return <li>
    <a href={props.href} class={`${props.class ? props.class : ``} tw:flex tw:items-center tw:w-full tw:p-2 tw:text-gray-900 tw:transition tw:duration-75 tw:rounded-lg tw:pl-11 tw:group tw:hover:bg-gray-100`}>{props.name}</a>
  </li>
}

export default NavItemChildren;