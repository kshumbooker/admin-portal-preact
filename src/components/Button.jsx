import { h } from 'preact';

export const Button = (props) => {
    return props.type === 'link' ? <a class={`${props.classes ? props.classes : ``}`} id={`${props.button_id ? props.button_id : ``}`} href={props.href}>{props.text}</a> :
    <button type={props.type} id={`${props.button_id ? props.button_id : ``}`} class={`${props.classes ? props.classes : ``} tw:no-underline tw:inline-flex tw:items-center tw:justify-center tw:rounded-[120px] tw:focus:outline-hidden tw:transition-all tw:leading-none tw:font-medium tw:p-4 tw:text-lg tw:cursor-pointer tw:whitespace-nowrap tw:my-4`}>{props.text}</button>;
}

export default Button;