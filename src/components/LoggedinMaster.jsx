import { h } from 'preact';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { data } from '../utils/data.js';
 
export const LoggedInMaster = (children) => {
  return (
  <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"></link>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>


  <body class="tw:font-[Lato]">
    
    <Navigation navigation={data.navigation} />
    <script src="https://cdn.jsdelivr.net/npm/tw-elements/js/tw-elements.umd.min.js"></script>

  </body>
  </>
  );
}

export default LoggedInMaster;