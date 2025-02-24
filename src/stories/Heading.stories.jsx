import { h } from 'preact';
import Heading from '../components/Heading';


export default {
  title: 'Components/Heading',
  tags: ['autodocs'],
  component: Heading
};

export const Login = () => <Heading text="Administrator Login" />;
export const Verficiation = () => <Heading text="Login Verfication" />;
export const ForgottenPassword = () => <Heading text="Forgotten Password" />;
