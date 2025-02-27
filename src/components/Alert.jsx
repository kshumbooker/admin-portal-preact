import { h } from 'preact';


export const Alert = (props) => { 
    const mapping = {
        success: 'green', 
        warning: 'yellow', 
        danger: 'red', 
        info: 'blue', 
    }

    return <div class={`tw:bg-${mapping[props.type]}-100 tw:text-${mapping[props.type]}-800 tw:flex tw:items-center tw:p-4 tw:mb-4 tw:text-sm tw:rounded-lg tw:max-w-lg tw:m-auto`} role="alert">
    <svg class="tw:flex-shrink-0 tw:inline tw:w-4 tw:h-4 tw:me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
    </svg>
    
    <div>
        <span class="tw:font-bold">{props.msg}</span>
    </div>
    <button type="button" class={`tw:ms-auto tw:-mx-1.5 tw:-my-1.5 tw:rounded-lg tw:focus:ring-2 tw:focus:ring-${mapping[props.type]}-400 tw:p-1.5 tw:hover:bg-${mapping[props.type]}-200 tw:inline-flex tw:items-center tw:justify-center tw:h-8 tw:w-8`} aria-label="Close">
      <span class="tw:sr-only">Close</span>
      <svg class="tw:w-3 tw:h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
        </svg>
    </button>
</div>;
}

export default Alert;