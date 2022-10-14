import * as yup from 'yup';

export const feedbackSchema = yup.object().shape({
    steamUser: yup.string().trim().required("Steam user is required").matches(/^[0-9]+$/, "Must be only digits").min(17, 'Minimum characters: 17').max(17, 'Maximum characters: 17'),
    description: yup.string().trim().required("Description is required").min(20, 'Minimum characters: 20').max(150, 'Maximum characters: 150'),
    amount: yup.string().trim().max(6, 'Invalid Value'),
})

export const searchSchema = yup.object().shape({
    steamUser: yup.string().required("Steam user is required").matches(/^[0-9]+$/, "Must be only digits").min(17, 'Minimum characters: 17').max(17, 'Maximum characters: 17'),
})

export const contactSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    title: yup.string().trim().required("Title is required").min(1, 'Minimum characters: 1').max(30, 'Maximum characters: 30'),
    message: yup.string().trim().required("Message is required").min(20, 'Minimum characters: 20').max(400, 'Maximum characters: 400'),
})

export const reportSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
})