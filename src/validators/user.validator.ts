import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().pattern(/^[A-Za-z]+ [A-Za-z]+$/).required().messages({
        'string.pattern.base': 'Name must consist of two words separated by a space'
    }),

    username: Joi.string().pattern(/^[A-Za-z]{1,21}$/).required().messages({
        'string.pattern.base': 'Username must be a word with 1 to 21 Latin letters'
    }),

    email: Joi.string().pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required().messages({
        'string.pattern.base': 'Email must contain @ and the domain address after dot'
    })
});

export default userValidator;