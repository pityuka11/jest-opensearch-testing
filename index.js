"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.handleError = void 0;
const errors_1 = require("@opensearch-project/opensearch/lib/errors");
function handleError(error, scrollId) {
    if (error instanceof errors_1.TimeoutError)
        return;
    if (error instanceof errors_1.ResponseError) {
        return;
    }
}
exports.handleError = handleError;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
