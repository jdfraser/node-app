import '@testing-library/jest-dom';

// scrollIntoView is not implemented by jest-dom,
// so we have to give it a dummy value here
window.HTMLElement.prototype.scrollIntoView = function() {};
