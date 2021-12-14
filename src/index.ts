import _ from 'lodash';
import add from './add';
import pic from './assets/images/pic.png';
import './assets/styles/index.less';

function helloWorld(str: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(str);
        }, 1000)
    })
}

async function run() {
    const res = await helloWorld('hello world!');

    console.log(res);
}

run();

console.log(add(1, 5));

const imgEl = document.createElement('img');

imgEl.src = pic;

document.body.appendChild(imgEl);

const divEl = document.createElement('div');

divEl.className = 'box';

divEl.innerHTML = `<i class="iconfont">&#xe699;</i>`;

document.body.appendChild(divEl);

console.log(_.get({ a: 'bbb' }, 'a'));

