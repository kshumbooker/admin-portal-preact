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
  title: 'Pages/Logged Out',
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
      <Link href="#" id="sendCode" text="Click here to send a new code" />
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
        <Link href="/admin/portal/login?action=cancel" text="Cancel" class="tw:text-center tw:block tw:my-4" />
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
    <Modal title="Two-Factor Authentication" msg="As part of regular updates to the Booker Admin Portal, you will now be required to enter a mobile number for use with Two-Factor Authentication. Please enter your mobile number below. Once your number has been updated, you will be sent a One-Time Passcode to verify this is correct." />
   </>
  ),
}

export const PasswordRecovery = Template.bind({});
PasswordRecovery.args = {
  heading: (
    <>
      <Heading text="Forgotten Password" />
    </>
  ),
  children: (
   <>
    <Paragraph text="If the user ID you have entered is valid and the account is active then a reset link will have been sent to you." />
    <Button type="link" href="/admin/portal/login" class="tw:w-full tw:my-4 tw:no-underline tw:inline-flex tw:text-center tw:items-center tw:justify-center tw:rounded-[120px] tw:focus:outline-hidden tw:transition-all tw:leading-none tw:font-medium tw:px-4 tw:py-3 tw:text-base tw:bg-black-1000 tw:text-white-1000 tw:cursor-pointer tw:hover:bg-tertiary-500 tw:hover:text-black-1000 tw:no-underline" text="Continue" />
   </>
  ),
}

