"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
exports.ErrorHandler = (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: error });
};
//# sourceMappingURL=errors.js.map