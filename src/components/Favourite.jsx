import { h } from 'preact';

export const Favourite = (props) => {
  return <div class="flex rounded-lg bg-white p-8 flex-col h-full gap-y-1">
    <i class="fa-solid fa-star"></i>
    <a href={props.href}>
      <p class="font-semibold tracking-tight text-gray-500">{props.category}</p>
    </a>
  </div>
}