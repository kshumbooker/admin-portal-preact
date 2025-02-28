import { h } from 'preact';
import { Link } from './Link';

export const Input = (props) => {
  return <div><label for={props.for} class="tw:text-left tw:text-sm tw:font-bold tw:text-black-700">{props.label}</label>
  { props.type === 'password' ? <span class="tw:float-right"><Link href="/admin/portal/passwordrecovery" text="Forgot password?" /></span> : `` }
  <input autocomplete="disable-autocomplete" class="tw:w-full tw:mt-2 tw:mb-4 tw:px-4 tw:py-2 tw:border tw:border-gray-300 tw:rounded-md tw:hover:border-booker-400 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-booker-500 tw:focus:border-blue-500" data-val={props.dataVal} data-val-length={props.dataValLength} data-val-length-max={props.dataValLengthMax} maxlength={props.maxlength} type={props.type} id={props.id} name={props.name} /></div>;
}

export default Input;