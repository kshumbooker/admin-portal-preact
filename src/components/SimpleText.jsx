import { h } from 'preact';


export function SimpleText(props) {
    return <span class={props.classes}>{props.text}</span>
}
