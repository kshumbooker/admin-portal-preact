import { h } from 'preact';

export function Input(props) {
    return <div class="tw:my-5">
        <label for={props.for} class="tw:text-left tw:font-bold tw:text-black-700 tw:text-base tw:block">{props.label}</label>
        {props.type === 'password' ? <span class="tw:float-right"><a href={props.linkurl} class="tw:text-base tw:font-bold">{props.linktext}</a></span> : ``}
        <input autocomplete="disable-autocomplete" class="tw:w-full tw:flex-grow tw:rounded-full tw:bg-white-1000 tw:py-4 tw:px-5 tw:text-lg tw:placeholder-black-1000 tw:shadow-[4px_4px_10px_-5px_rgba(0,0,0,0.08)] tw:outline-none tw:focus:ring-0 tw:[&::-webkit-search-cancel-button]:hidden tw:[&::-webkit-search-cancel-button]:appearance-none tw:my-3" data-val={props.dataVal} data-val-length={props.dataValLength} data-val-length-max={props.dataValLengthMax} maxlength={props.maxLength} type={props.type} id={props.tag_id} name={props.name} /></div>;
}
