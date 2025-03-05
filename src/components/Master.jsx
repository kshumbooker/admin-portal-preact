import { h } from 'preact';
import { Header } from './Header';
import { Footer } from './Footer';

export const Master = ({validation, heading, children}) => {
  return (
  <>
  <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet" />
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  <body class="tw:bg-gray-50 tw:px-4 tw:font-[Inter]">
    <div class="tw:flex tw:items-center tw:justify-center tw:p-8">
      <Header />

    </div>
    {heading}
    {validation}
    <div class="tw:flex tw:justify-center tw:bg-white tw:relative tw:border-solid tw:border tw:border-gray-50 tw:shadow-sm tw:border border-slate-100 tw:rounded-lg tw:max-w-lg tw:m-auto tw:p-8">
      <div class="tw:max-w-sm tw:w-full">
        <form>
          {children}
        </form>
      </div>
    </div>
    <Footer cd="CD1" />
    </body>
  </>
  );
}

export default Master;