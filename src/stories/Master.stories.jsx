import { h } from 'preact';
import Master from '../components/Master';
import Input from '../components/Input';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Alert from '../components/Alert';
import Paragraph from '../components/Paragraph';
import Modal from '../components/Modal';
import Link from '../components/Link';

export default {
  title: 'Pages/Master',
  component: Master,
};

const Template = (args) => <><Master {...args} /></>;

export const Login = Template.bind({});
Login.args = {
  heading: (
    <Heading text="Administration Login" />
  ),
  children: (
  <>
    <div>
      <Input for="Username" label="Username" type="text" dataVal="true" dataValLength="The field Username must be a string with a maximum length of 100." dataValLengthMax="100" maxLength="100" id="Username" name="Username" />
    </div>
    <div>
      <Input for="Password" label="Password" type="password" dataVal="true" dataValLength="The field Password must be a string with a maximum length of 50." dataValLengthMax="100" maxLength="50" id="Password" name="Password" />
    </div>
    <div class="g-recaptcha tw:my-4"
      data-sitekey="6LfwwIQqAAAAANcF-qB9oAxVzaVwIum45H588zwK"
      data-callback="onSubmit"
      data-badge="inline"
      data-size="invisible">
    </div>
    <div>
      <Button type="submit" text="Sign In" size="full" />
    </div>
  </>
  )
};

export const Validation = Template.bind({});
Validation.args = {
  ...Login.args,
  validation: (
    <>
      <Alert msg="Invalid User ID / Password combination, please try again" type="danger" />
    </>
  ),
};

export const Otp = Template.bind({});
Otp.args = {
  heading: (
    <Heading text="Login Verification" />
  ),
  children: (
    <>
      <div>
        <Paragraph text="We have sent you a verification code to your registered mobile number, please enter your 8-digit code in the box below to continue your login.

Didn't receive a SMS?" />
      </div>
      <a class="tw:text-sm tw:text-booker tw:hover:text-booker tw:font-bold tw:my-4 tw:block" href="#">Click here to send a new code</a>
      <div>
        <Alert msg="New login code has been sent via SMS" type="success" />
      </div>
      <div>
        <Alert msg="You will be able to request another code in 30 seconds" type="info" />
      </div>
      <div>
        <Input for="Username" label="Verfication Code" type="text" dataVal="true" dataValLength="The field Username must be a string with a maximum length of 100." dataValLengthMax="100" maxLength="100" id="Username" name="Username" />
      </div>
      <div class="g-recaptcha tw:my-4"
        data-sitekey="6LfwwIQqAAAAANcF-qB9oAxVzaVwIum45H588zwK"
        data-callback="onSubmit"
        data-badge="inline"
        data-size="invisible">
      </div>
      <div>
        <Button type="submit" text="Verify" size="full" />
        <Button type="button" text="Cancel" size="full" />
      </div>
    </>
  ),
};

export const ForgottenPassword = Template.bind({});
ForgottenPassword.args = {
  heading: (
    <Heading text="Forgotten Password" />
  ),
  children: (
   <>
    <div>
      <Paragraph text="If you have forgotten your website login password, fill this page in with your registered user ID." />
    </div>
    <div>
      <Input for="Username" label="Enter your User ID" type="text" dataVal="true" dataValLength="The field Username must be a string with a maximum length of 100." dataValLengthMax="100" maxLength="100" id="Username" name="Username" />
    </div>
    <div class="g-recaptcha tw:my-4"
      data-sitekey="6LfwwIQqAAAAANcF-qB9oAxVzaVwIum45H588zwK"
      data-callback="onSubmit"
      data-badge="inline"
      data-size="invisible">
    </div>
    <div>
      <Button type="submit" text="Sign In" size="full" />
    </div>
   </>
  ),
}

export const TwoFactorAuth = Template.bind({});
TwoFactorAuth.args = {
  ...Otp.Args,
  children: (
   <>
    <Modal />
   </>
  ),
}