import { LitElement, html, css } from 'lit-element';

export class ReactiveButton extends LitElement {

  /**
    * Declared properties and their corresponding attributes
    * conected determinates the state of the button 
    */
  static get properties() {
    return {
      conected:{ type:Boolean }
    };
  }

  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
    this.conected = false;
  
    
  
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      button {
        box-sizing: content-box !important;
        border-color: transparent;
        border-radius: var(--dile-rounded-button-border-radius, 30px);
        border-style: solid;
        border-width: 1px;
        box-sizing: inherit;
        cursor: pointer;
        display: inline-block;
        line-height: normal;
        margin: 0;
        padding-left: var(--dile-rounded-button-padding-x, 20px);
        padding-right: var(--dile-rounded-button-padding-x, 20px);
        padding-top: var(--dile-rounded-button-padding-y, 5px);
        padding-bottom: var(--dile-rounded-button-padding-y, 5px);
        position: relative;
        text-decoration: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border-radius: var(--dile-rounded-button-height, 30px);
        font-size: var(--dile-rounded-button-font-size, 1em);
        font-weight: var(--dile-rounded-button-font-weight, normal);
        text-transform: var(--dile-rounded-button-text-transform, uppercase);
        height: var(--dile-rounded-button-height, 30px);
        text-align: center;
        transition: all var(--dile-rounded-button-animation-time, 0.3s) ease;
        background-color: var(--dile-rounded-button-background-color, #e74c3c);
        color: var(--dile-rounded-button-text-color, #fff);
      }
      button:hover {
        background-color: var(--dile-rounded-button-hover-background-color, #303030);
        color: var(--dile-rounded-button-hover-text-color, #fff);
      }
      button[conected] {
        cursor: default;
        opacity: 0.6;
        background-color: var(--dile-rounded-button-background-color, #e74c3c);
        color: var(--dile-rounded-button-text-color, #fff);
      }
  `;
}

  render() {
    return html`
    <button @click="${this.changeConected}" ?conected="${this.conected}"><slot></slot></button>`;
  }

  changeConected(){
    this.dispatchEvent(new CustomEvent('reactive-button-click'));
  }
}
customElements.define('reactive-button', ReactiveButton);