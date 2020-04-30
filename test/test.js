
import Component from '../index.js';


const Custom = Component.styled`
    color: red;
    background: black;
`;


class WebComponent extends Custom {

    constructor() {
        super();
    }

    render() {
        return (
            `<p>hello</p>`
        )
    }

}


customElements.define('custom-component', WebComponent);

