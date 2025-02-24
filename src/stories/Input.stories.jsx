import { h } from 'preact';
import Input from '../components/Input';


export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
}

export const Default = () => <Input for="password" type="password" label="Password"></Input>