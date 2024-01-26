/* eslint-disable react/no-unescaped-entities */
'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const Login_Pass = () => {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const password = formData.get('password');
        if (isUser) {
            alert('user ase')
        } else {
            alert('user nai')
        }
    }

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 9,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h4" sx={{ width: { xs: '100%', md: '50%' }, color: '#252525', fontWeight: '600', marginTop: '25px' }}>
                    Enter your password!
                </Typography>
                <Box component="form" onSubmit={(e) => handleSubmit(e)} noValidate sx={{ mt: 1, width: { xs: '100%', md: '50%' } }}>
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
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
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
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Login_Pass;