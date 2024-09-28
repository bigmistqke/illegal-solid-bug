/* @refresh reload */
import { render } from 'solid-js/web';
import { binding } from "./binding";

const root = document.getElementById('root');
render(() => <div ref={binding}>hallo</div>, root!);
