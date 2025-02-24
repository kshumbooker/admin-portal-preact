import { h } from 'preact';

export const Header = (props) => {
  return <img class="tw:h-12 tw:flex tw:ustify-center tw:items-center" src={props.src} />
}

export default Header;