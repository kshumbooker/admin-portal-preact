import { h } from 'preact';
import { NavItemChildren } from './NavItemChildren';



export const NavItemParent = ({id, icon, name}) => {

return (<li>
  <button type="button" class="tw:flex tw:items-center tw:w-full tw:p-2 tw:text-lg tw:text-gray-900 tw:transition tw:duration-75 tw:rounded-lg tw:group tw:hover:bg-gray-100 tw:cursor-pointer" aria-controls={`dropdown-${id}`} data-collapse-toggle={`dropdown-${id}`} aria-expanded="false">
    <i class={`fa-solid fa-${icon} tw:w-5`}></i>
    <span class="tw:flex-1 tw:ms-3 tw:text-left tw:rtl:text-right tw:whitespace-nowrap">{name}</span>
  </button>
  <ul id={`dropdown-${id}`} class="tw:py-2 tw:space-y-2 hidden">
    <bkr-nav-item-children id={id}></bkr-nav-item-children>
  </ul>
</li>);
}

export default NavItemParent;