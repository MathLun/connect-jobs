"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
const passport = require("passport");
const local_1 = require("./strategies/local");
const serialization_1 = require("./serialization");
exports.configure = () => {
    passport.serializeUser(serialization_1.useSerialize);
    passport.deserializeUser(serialization_1.useDeserialize);
    passport.use('signup', local_1.localStrategy.signup);
    passport.use('signin', local_1.localStrategy.signin);
};
//# sourceMappingURL=passport.js.map