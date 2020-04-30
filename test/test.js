
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
        let world = 'world';
        return (
            `<p>hello ${world}</p>`
        )
    }

}


customElements.define('custom-component', WebComponent);

