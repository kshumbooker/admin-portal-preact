import { h } from 'preact';

export const Modal = (props) => {
  return <div class="tw:relative tw:z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div class="tw:fixed tw:inset-0 tw:bg-gray-500/75 tw:transition-opacity" aria-hidden="true"></div>

  <div class="tw:fixed tw:inset-0 tw:z-10 tw:w-screen tw:overflow-y-auto">
    <div class="tw:flex tw:min-h-full tw:items-end tw:justify-center tw:p-4 tw:text-center tw:sm:items-center tw:sm:p-0">
      
      <div class="tw:relative tw:transform tw:overflow-hidden tw:rounded-lg tw:bg-white tw:text-left tw:shadow-xl tw:transition-all tw:sm:my-8 tw:sm:w-full tw:sm:max-w-lg">
        <div class="tw:bg-white tw:px-4 tw:pt-5 tw:pb-4 tw:sm:p-6 tw:sm:pb-4">
          <div class="tw:sm:flex tw:sm:items-start">
            <div class="tw:mx-auto tw:flex tw:size-12 tw:shrink-0 tw:items-center tw:justify-center tw:rounded-full tw:bg-red-100 tw:sm:mx-0 tw:sm:size-10">
              <svg class="tw:size-6 tw:text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            </div>
            <div class="tw:mt-3 tw:text-center tw:sm:mt-0 tw:sm:ml-4 tw:sm:text-left">
              <h3 class="tw:text-base tw:font-semibold tw:text-gray-900" id="modal-title">Deactivate account</h3>
              <div class="tw:mt-2">
                <p class="tw:text-sm tw:text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tw:bg-gray-50 tw:px-4 tw:py-3 tw:sm:flex tw:sm:flex-row-reverse tw:sm:px-6">
          <button type="button" class="tw:inline-flex tw:w-full tw:justify-center tw:rounded-md tw:bg-red-600 tw:px-3 tw:py-2 tw:text-sm tw:font-semibold tw:text-white tw:shadow-xs tw:hover:bg-red-500 tw:sm:ml-3 tw:sm:w-auto">Deactivate</button>
          <button type="button" class="tw:mt-3 tw:inline-flex tw:w-full tw:justify-center tw:rounded-md tw:bg-white tw:px-3 tw:py-2 tw:text-sm tw:font-semibold tw:text-gray-900 tw:ring-1 tw:shadow-xs tw:ring-gray-300 tw:ring-inset tw:hover:bg-gray-50 tw:sm:mt-0 tw:sm:w-auto">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
}

export default Modal;