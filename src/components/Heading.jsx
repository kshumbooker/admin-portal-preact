import { h } from 'preact';

export const Heading = (props) => {
  return <h2 class="tw:px-5 tw:xl:px-0 tw:text-primary-500 tw:text-3xl tw:lg:text-6xl tw:my-5 tw:text-center">{ props.text }</h2>;
};

export default Heading;
