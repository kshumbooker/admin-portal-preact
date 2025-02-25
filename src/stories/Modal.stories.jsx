import { h } from 'preact';
import Modal from '../components/Modal';

export default {
  title: 'Components/Modal',
  component: Modal
}

export const TwoFaModal = () => <Modal title="Two-Factor Authentication" msg="As part of regular updates to the Booker Admin Portal, you will now be required to enter a mobile number for use with Two-Factor Authentication. Please enter your mobile number below. Once your number has been updated, you will be sent a One-Time Passcode to verify this is correct." />
