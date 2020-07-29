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
exports.middlewareAuthenticate = exports.profile = exports.signin = exports.signup = exports.signupCallback = void 0;
const passport = require("passport");
const jwt = require("jsonwebtoken");
exports.signupCallback = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        message: 'Signup successful!',
        user: req.user
    });
});
exports.signup = passport.authenticate('signup', { session: false });
exports.signin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    passport.authenticate('signin', (err, user, info) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (err || !user) {
                const error = new Error('An Error aki');
                return next(error);
            }
            req.login(user, { session: false }, (error) => __awaiter(void 0, void 0, void 0, function* () {
                if (error) {
                    return next(error);
                }
                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, 'htam00');
                return res.json({ token });
            }));
        }
        catch (error) {
            return next(error);
        }
    }))(req, res, next);
});
exports.profile = (req, res, next) => {
    res.json({
        message: 'You made it to the secure route',
        user: req.user,
        token: req.query.secret_token
    });
};
/* ######### Middleware ######### */
exports.middlewareAuthenticate = passport.authenticate('jwt', { session: false });
//# sourceMappingURL=users.js.map