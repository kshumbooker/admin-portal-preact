import { h } from 'preact';


export const Paragraph = (props) => { 
  return <p class={props.classes}>{props.text}</p>;
}

export default Paragraph;