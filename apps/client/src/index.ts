import { createElement } from 'react';
import { render } from 'react-dom';
import App from 'components/App';

const appRoot = document.getElementById('__APP_ROOT__');

render(createElement(App), appRoot);
