import { h } from 'preact';
import Alert from '../components/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs']
}

export const ValidationError = () => <Alert type="danger" msg="Invalid User ID / Password combination, please try again" />

export const VerficationSuccess = () => <Alert type="success" msg="New login code has been sent via SMS" />

export const VerificationInfo = () => <Alert type="info" msg="You will be able to request another code in 30 seconds" />