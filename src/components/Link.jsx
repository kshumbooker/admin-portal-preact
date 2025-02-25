import { h } from 'preact';

export const Link = (props) => {
  return <a class="tw:h-12 tw:flex tw:ustify-center tw:items-center" href={props.url} />
}

export default Link;