
class Component extends HTMLElement {

    constructor(...args) {
        const self = super(...args);
        this._shadowRoot = this.attachShadow({ mode: 'open' });

        this.$template = document.querySelector('template');
        this._shadowRoot.appendChild(this.$template.content.cloneNode(true));
        this.$template.remove();

        this.applyRender();

        return self;
    }

    _createTemplate() {
        if(!this.$template) {
            console.log(this)
            this.$template = document.createElement('template');
        }
    }

    applyRender() {
        if(this.render) {
            const render = this.render();
            this._shadowRoot.innerHTML += render;
        }
    }

    static styled(style) {
        this.$template = document.createElement('template');
        document.body.appendChild(this.$template);
        this.$template.innerHTML = `<style>:host { ${style[0]} }
                            </style>`;
        console.log(this.$template)
        return this;
    }

}

export default Component;
