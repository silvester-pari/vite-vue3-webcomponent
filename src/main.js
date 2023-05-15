import { defineCustomElement } from 'vue';
import test from './components/TestComponent.ce.vue';

const testComponent = defineCustomElement(test);

customElements.define('test-component', testComponent);
