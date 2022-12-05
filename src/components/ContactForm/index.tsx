import { SxProps, Theme, Box, Stack, TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from 'yup'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react'
import { AlertContext } from "context/AlertContext";
import { color } from "@mui/system";

const validationSchema = yup.object({
    fullName: yup
        .string()
        .required('Adinizi yazmalisiniz'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    phone: yup
        .string()
        .matches(/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/)
        .required('Password is required'),
    company: yup
        .string(),
});
const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    company: '',
}
interface Props {
    sx?: SxProps<Theme> | undefined
}
const ContactForm = ({ sx }: Props) => {
    const alertNotify = useContext(AlertContext)
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
            axios.post('http://localhost:3004/contacts', {
                id: uuidv4(),
                ...values
            }).then(() => {
                alertNotify({type:'success', message:'elave edildi'})
            }).catch(() => {
                alertNotify({type:'error', message:'elave edilmedi'})
            })
        }
    })
    return (
        <Box sx={sx}  >
            <Typography textAlign="center" mb="10px" variant="h4" fontWeight={700}>Bizimlə əlaqə saxlayın</Typography>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 25
            }} onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="fullName"
                    name="fullName"
                    label="Ad soyad"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                    helperText={formik.touched.fullName && formik.errors.fullName}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <Stack flexDirection="row" sx={{ gap: '10px' }}>
                    <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                    <TextField
                        fullWidth
                        id="company"
                        name="company"
                        label="Shirket"
                        value={formik.values.company}
                        onChange={formik.handleChange}
                        error={formik.touched.company && Boolean(formik.errors.company)}
                        helperText={formik.touched.company && formik.errors.company}
                    />
                </Stack>
                <Button type="submit" sx={{
                    bgcolor: "rgb(211, 88, 35)"
                    
                }}>Gonder</Button>
            </form>
        </Box>
    )
}
export default ContactForm;