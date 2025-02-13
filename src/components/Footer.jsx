import { h } from 'preact';


export function Footer(props) {
  return <footer>
      <div id="copyright" class="tw:mt-3 tw:flex tw:items-center tw:justify-center tw:p-8">
        <p class="text-bold">Booker 2025 - {props.cd}</p>
      </div>
    </footer>;
}