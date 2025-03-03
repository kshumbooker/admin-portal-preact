import { h } from 'preact';
import { NavItem } from './NavItem';

export const NavItemParent = (props) => 
<li>
<button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100" aria-controls="dropdown-click-and-collect" data-collapse-toggle="dropdown-click-and-collect" aria-expanded="false">
  
  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{props.name}</span>
  
</button>
<ul id="dropdown-click-and-collect" class="hidden py-2 space-y-2">
  <li>
    <a href="/admin/function/AdminBarringManagement" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Barred Categories</a>
  </li>
  <li>
    <a href="/admin/function/AdminCollectionBranches" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Click and Collect Branches Configuration</a>
  </li>
  <li>
    <a href="/admin/function/AdminCollectionLeadTime" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Collection Lead Time</a>
  </li>
  <li>
    <a href="/admin/function/AdminOnlineExclusiveBranches" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100">Online Exclusive Branches</a>
  </li>
</ul>
</li>;


export default NavItemParent;