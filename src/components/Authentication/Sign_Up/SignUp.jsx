'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/navigation';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

const SignUp = () => {

    const [isUser, setUser] = React.useState(false);
    const router = useRouter();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        outline: 'none',
        p: 4,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log('Email:', email);
        console.log('Password:', password);
        if (email === '') {
            return alert("Please write your email!")
        } else if (isUser) {
            router.push('/login')
            alert('user ase')
        } else {
            alert('user nai')
            router.push('/register')
        }
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h4" sx={{ width: { xs: '100%', md: '50%' }, color: '#252525', fontWeight: '600', marginTop: '25px' }}>
                Create your account & join with us!
            </Typography>
            <Box component="form" onSubmit={(e) => handleSubmit(e)} noValidate sx={{ mt: 1, width: { xs: '100%', md: '50%' } }}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="firstname"
                            label="First Name"
                            type="text"
                            id="name"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="lastname"
                            label="Last Name"
                            type="text"
                            id="name"
                        />
                    </Grid>
                </Grid>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Terms & Conditions
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                Must Have to be human.
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
                <Typography component="h6" variant="h6" sx={{ fontSize: '16px', color: 'gray', fontWeight: '400', marginTop: '25px' }}>
                    By continuing, <span className='cursor-pointer underline' onClick={handleOpen}> I agree to Nike’s Privacy Policy and Terms of Use.</span>
                </Typography>
                <Button
                    className='bg-[#252525] hover:text-[#252525] '
                    type="submit"
                    sx={{
                        mt: 3,
                        mb: 2,
                        padding: '10px',
                        color: '#fff',
                        width: '50%',
                        borderRadius: '20px',
                        float: 'inline-end',
                        boxShadow: '24px 24px 49px #d9d9d9, -24px -24px 49px #ffffff',
                    }}
                >
                    Continue
                </Button>
            </Box>
        </Box>
    </Container>
    );
};

export default SignUp;