import { h } from 'preact';
import { NavItemParent } from './NavItemParent';


export const Navigation = (props) => {
  return <aside id="navigation-sidebar" class="tw:fixed tw:top-0 tw:left-0 tw:z-40 tw:w-64 tw:h-dvh tw:transition-transform tw:-translate-x-full tw:sm:translate-x-0" aria-label="Sidebar" aria-hidden="true">
  <div class="tw:p-6 tw:bg-gray-50">
     <img class="tw:h-8 tw:flex tw:justify-center tw:items-center" src="https://assets-global.website-files.com/61f27d3474c2ef62975a0106/61f27d3474c2ef78475a0118_Booker%20logo.svg" />
  </div>

  <div class="tw:h-dvh tw:px-3 tw:py-4 tw:overflow-y-auto tw:bg-gray-50">
    <ul class="tw:space-y-2 tw:font-medium">
      ${props.navigation.map(nav => <NavItemParent icon={nav.icon} description={nav.description} />)}
    </ul>
  </div>
</aside>
}

export default Navigation;