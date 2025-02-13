import { h } from 'preact';


export function Alert(props) { 
    return <div class="tw:flex tw:items-center tw:p-4 tw:mb-4 tw:text-sm tw:text-yellow-800 tw:rounded-lg tw:bg-yellow-50 tw:dark:bg-gray-800 tw:dark:text-yellow-300 tw:max-w-lg tw:justify-center tw:m-auto" role="alert">
    <svg class="tw:flex-shrink-0 tw:inline tw:w-4 tw:h-4 tw:me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
    </svg>
    <span class="tw:sr-only">{props.type}</span>
    <div>
        <span class="tw:font-bold">{props.msg}</span>
    </div>
</div>;
}

