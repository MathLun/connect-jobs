"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localStrategy = void 0;
const passportLocal = require("passport-local");
const users_1 = require("../../../models/users");
const validate_1 = require("../validate");
const LocalStrategy = passportLocal.Strategy;
const signupCallback = (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_1.default.create({
            email,
            password
        });
        return done(null, user);
    }
    catch (error) {
        return done(error);
    }
});
const signinCallback = (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_1.default.findOne({ email });
        if (!user) {
            return done(null, false, {
                message: ''
            });
        }
        const validate = yield validate_1.validatePassword(password, user);
        if (!validate) {
            return done(null, false, {
                message: ''
            });
        }
        return done(null, user, {
            message: 'Logged Successful...'
        });
    }
    catch (error) {
        return done(error);
    }
});
const localOptions = {
    usernameField: 'email',
    passwordField: 'password'
};
const signupStrategy = new LocalStrategy(localOptions, signupCallback);
const signinStrategy = new LocalStrategy(localOptions, signinCallback);
exports.localStrategy = {
    signup: signupStrategy,
    signin: signinStrategy
};
//# sourceMappingURL=local.js.map