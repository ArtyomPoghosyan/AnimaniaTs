export const supportFormValidation = {
    name: {
      required: true,
      minLength: 3,
      text:"Please enter your name",
      minLenText:"Name must contain min 3 symbols"
    },
    email: {
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      patternText:"Invalid email address",
      text:"Please enter your email"
    },
    phone: {
      required: true,
      pattern: /^(\+374)(9[0-9]{7}|[1-9][0-9]{7})$/,
      text:"Please enter your phone",
      patternText:"Invalid phone number"
    },
    message: {
      required: true,
      text:"Message is required"
    },
  };