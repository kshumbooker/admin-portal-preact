import { h } from 'preact';
import Paragraph from '../components/Paragraph';


export default {
  title: 'Components/Paragraph',
  component: Paragraph
};

export const Validation = () => <Paragraph text="If you have forgotten your website login password, fill this page in with your registered user ID." />

export const Otp = () => <Paragraph text={`We have sent you a verification code to your registered mobile number, please enter your 8-digit code in the box below to continue your login.
  
Didn't receive a SMS?`} />