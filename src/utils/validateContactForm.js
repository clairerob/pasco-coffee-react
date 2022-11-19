export const validateContactForm = (values) => {
    const errors={};

    if (!values.name) {
        errors.name = 'required';
    } else if (values.name.length < 2) {
        errors.name = 'must be at least 2 characters';
    } else if (values.name.length > 30) {
        errors.name = 'cannot be more than 30 characters';
    }

    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;
    if (!values.email) {
        errors.email = 'required';
    } else if (values.email.length > 254 || !emailReg.test(values.email)) {
        errors.email = 'please enter valid email address';
    }

    if (!values.comment) {
        errors.name = 'required';
    } else if (values.comment.length < 10) {
        errors.name = 'must be at least 10 characters';
    }

    return errors;
};