import { h } from 'preact';

export const Favourite = (props) => {
  return <div class="tw:p-4 tw:w-60 h-full flex-1">
  <div class="tw:flex tw:rounded-lg tw:bg-white tw:p-8 tw:flex-col tw:h-full tw:gap-y-1">
    <i class="fa-solid fa-star"></i>
    <a href={props.href}>
      <p class="tw:font-semibold tw:tracking-tight tw:text-gray-500">{props.function}</p>
    </a>
  </div>
</div>
}

export default Favourite;