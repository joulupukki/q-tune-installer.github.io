// Load Styles
import '../scss/main.scss';
import escapeHtml from 'escape-html';
import { initBootstrap } from "./bootstrap.js";
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});
