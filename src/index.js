import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');

    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const icon = new Image();
    icon.src = Icon;
    element.appendChild(icon);

    console.log({Icon, Data, Notes});
    return element;
}

document.body.appendChild(component());