import { h } from 'preact';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Master = ({validation, heading, children}) => {
  return (
  <>
  <body class="tw:bg-gray-50 tw:px-4 tw:font-[Lato]">
    <div class="tw:flex tw:items-center tw:justify-center tw:p-8">
      <Header src="https://assets-global.website-files.com/61f27d3474c2ef62975a0106/61f27d3474c2ef78475a0118_Booker%20logo.svg" />  
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