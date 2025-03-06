import { h } from 'preact';

export const Button = (props) => {
    return props.type === 'link' ? <a class={`${props.classes ? props.classes : ``}`} id={`${props.button_id ? props.button_id : ``}`} href={props.href}>{props.text}</a> :
        <button type={props.type} id={`${props.button_id ? props.button_id : ``}`} class={`${props.size == 'full' ? `tw:w-full` : ``} ${props.classes ? props.classes : ``}`}>{props.text}</button>;
}

export default Button;