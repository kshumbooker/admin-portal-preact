import { h } from 'preact';
import { Input } from './Input';
import { Button } from './Button';
import { Paragraph } from './Paragraph';

export const Modal = (props) => {
  return <div class="tw:relative tw:z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div class="tw:fixed tw:inset-0 tw:bg-gray-500/75 tw:transition-opacity" aria-hidden="true"></div>

  <div class="tw:fixed tw:inset-0 tw:z-10 tw:w-screen tw:overflow-y-auto">
    <div class="tw:flex tw:min-h-full tw:items-end tw:justify-center tw:p-4 tw:text-center tw:sm:items-center tw:sm:p-0">
      
      <div class="tw:relative tw:transform tw:overflow-hidden tw:rounded-lg tw:bg-white tw:text-left tw:shadow-xl tw:transition-all tw:sm:my-8 tw:sm:w-full tw:sm:max-w-lg">
        <div class="tw:bg-white tw:px-4 tw:pt-5 tw:pb-4 tw:sm:p-6 tw:sm:pb-4">
          <div class="tw:sm:flex tw:sm:items-start">
            <div class="tw:mt-3 tw:text-center tw:sm:mt-0 tw:sm:ml-4 tw:sm:text-left">
              <h2 class="tw:text-3xl tw:font-bold" id="modal-title">{props.title}</h2>
              <div class="tw:mt-2">
                <Paragraph text={props.msg} />
              </div>
              <div class="tw:my-4">
                <Input type="text" label="Mobile Number" id="mobileNumber" name="mobileNumber" data-valid="false" pattern="/^-?\d+\.?\d*$/"  />
                <Input type="text" label="Confirm Mobile Number"  id="confirmMobileNumber" name="confirmMobileNumber" data-valid="false" />
              </div>
            </div>
          </div>
        </div>
        <div class="tw:bg-gray-50 tw:px-4 tw:py-3 tw:sm:flex tw:sm:flex-row-reverse tw:sm:px-6">
          <Button type="submit" text="Update" size="full" />
        </div>
      </div>
    </div>
  </div>
</div>
}

export default Modal;