import { h } from 'preact';

export const NavItemChildren = (props) => {
  
  const navigationData = data.pages.filter(d => d.uri === 'home');
  
  let childrenData = navigationData[0].content[0].navigation.filter(c => c.id === props.id);

  return childrenData[0].children.map(child => 
    <li>
      <a href={child.href} class="tw:flex tw:text-base tw:items-center tw:w-full tw:p-2 tw:text-gray-900 tw:transition tw:duration-75 tw:rounded-lg tw:pl-11 tw:group tw:hover:bg-gray-100">{child.name}</a>
    </li>
  );
}

export default NavItemChildren;