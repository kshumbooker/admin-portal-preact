import { h } from 'preact';

export const Account = (props) => {
  return <div class="flex items-center gap-x-2">
    <span class="block px-4 w-12 h-12 rounded-full bg-booker text-white font-bold flex justify-center items-center">{props.initials}</span>
  <span class="font-bold hidden lg:block">{props.name}</span>
  <div
  class="relative"
  data-twe-dropdown-ref
  data-twe-dropdown-alignment="end">

  <a
    class="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
    href="#"
    id="dropdownMenuButton2"
    role="button"
    data-twe-dropdown-toggle-ref
    aria-expanded="false">

    <i class="fa-solid fa-chevron-down"></i>
  </a>

  <ul
    class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block"
    aria-labelledby="dropdownMenuButton2"
    data-twe-dropdown-menu-ref>

    <li>
      <a
        class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline "
        href="/profile"
        data-twe-dropdown-item-ref
        >Your profile</a
      >
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline"
        href="/signout"
        data-twe-dropdown-item-ref
        >Sign out</a
      >
    </li>
  </ul>
</div>
</div>
}

export default Account;