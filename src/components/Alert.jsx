import { h } from 'preact';


export function Alert(props) { 
    const mapping = {
        success: 'tw:text-sky-800 tw:bg-sky-50', 
        warning: 'tw:text-yellow-800 tw:bg-yellow-50', 
        danger: 'tw:text-red-800 tw:bg-red-50', 
        info: 'tw:text-blue-800 tw:bg-blue-50', 
    }

    return <div class={`${mapping[props.type]} tw:flex tw:items-center tw:p-4 tw:mb-4 tw:text-sm tw:rounded-lg tw:max-w-lg tw:m-auto `} role="alert">
    <svg class="tw:flex-shrink-0 tw:inline tw:w-4 tw:h-4 tw:me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
    </svg>
    <span class="tw:sr-only">{props.type}</span>
    <div>
        <span class="tw:font-bold">{props.msg}</span>
    </div>
</div>;
}

