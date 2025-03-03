import { h } from 'preact';

export const SearchBar = (props) => {
  return <input type={props.type} id={props.id} class={`${props.class ? props.class : ``} block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-booker-500`} placeholder={props.placeholder} required={props.required} />
}

export default SearchBar;