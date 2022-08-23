import{s as t,r as e,$ as o}from"../../lit-element-69ea4448.js";window.customElements.define("dt-label",class extends t{static get styles(){return e`:host{font-family:var(--font-family);font-size:var(--dt-label-font-size,14px);font-weight:var(--dt-label-font-weight,700);color:var(--dt-label-color,#000);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.icon{height:var(--dt-label-font-size,14px);width:auto;display:inline-block}.icon.private{position:relative}.icon.private:hover .tooltip{display:block}.tooltip{display:none;position:absolute;color:var(--dt-label-tooltip-color,#666);background:var(--dt-label-tooltip-background,#eee);top:calc(100% + .5rem);inset-inline-start:-1rem;font-weight:400;padding:.4rem}.tooltip:before{content:'';position:absolute;inset-inline-start:1rem;top:-.5rem;height:0;width:0;border-bottom:.5rem solid var(--dt-label-tooltip-background,#eee);border-inline-start:.5rem solid transparent;border-inline-end:.5rem solid transparent}`}static get properties(){return{icon:{type:String},altText:{type:String},private:{type:Boolean},privateLabel:{type:String}}}firstUpdated(){const t=this.shadowRoot.querySelector("slot[name=icon-start]").assignedElements({flatten:!0});for(const e of t)e.style.height="100%",e.style.width="auto"}get _slottedChildren(){return this.shadowRoot.querySelector("slot").assignedElements({flatten:!0})}render(){return o`<div class="label"><span class="icon"><slot name="icon-start">${this.icon?o`<img src="${this.icon}" alt="${this.altText}">`:null}</slot></span><slot></slot>${this.private?o`<span class="icon private"><svg class="icon" height="100px" width="100px" fill="#000000" xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100" xml:space="preserve"><g><g i:extraneous="self"><g><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"></path><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z"></path><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z"></path><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z"></path></g><path d="M75.8,37.6v-9.3C75.8,14.1,64.2,2.5,50,2.5S24.2,14.1,24.2,28.3v9.3c-7,0.6-12.4,6.4-12.4,13.6v32.6    c0,7.6,6.1,13.7,13.7,13.7h49.1c7.6,0,13.7-6.1,13.7-13.7V51.2C88.3,44,82.8,38.2,75.8,37.6z M56,79.4c0.2,1-0.5,1.9-1.5,1.9h-9.1    c-1,0-1.7-0.9-1.5-1.9l3-11.8c-2.5-1.1-4.3-3.6-4.3-6.6c0-4,3.3-7.3,7.3-7.3c4,0,7.3,3.3,7.3,7.3c0,2.9-1.8,5.4-4.3,6.6L56,79.4z     M62.7,37.5H37.3v-9.1c0-7,5.7-12.7,12.7-12.7s12.7,5.7,12.7,12.7V37.5z"></path></g></g></svg> <span class="tooltip">${this.privateLabel||"Private Field: Only I can see its content"}</span></span>`:null}</div>`}});
