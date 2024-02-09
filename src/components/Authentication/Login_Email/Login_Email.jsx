'use client';
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
import { useEffect, useState } from 'react';
import { useSession, signIn } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const Login_Email = () => {

  const notify = () => toast("Logged In!");
  const { data: session } = useSession();
 

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   

    const res = await signIn('credentials', {
      email: email,
      password: password,
    })
    notify();
  }


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSignUpGoogle = () => {
    signIn('google')
    if (session) {
      router.push('/')
    }
  }
  const handleSignUpFacebook = () => {
    signIn('facebook')
    if (session) {
      router.push('/')
    }
  }
  useEffect(() => {
    if (session) {
      setTimeout(function () {
        router.push('/')
      }, 2000);
    }
  }, [session, router])

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
          Enter your email to join with us!
        </Typography>
        <Box component="form" onSubmit={(e) => handleSubmit(e)} noValidate sx={{ mt: 1, width: { xs: '100%', md: '50%' } }}>
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
        <Typography component="h5" variant="h5" sx={{ color: '#378AE5', fontWeight: '600', marginBottom: '20px', textAlign: 'center' }}>
          Or
        </Typography>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box className='grid gird-cols-1 gap-4'>
            <Box onClick={() => handleSignUpGoogle()} sx={{ display: 'flex', justifyContent: 'center', gap: '5px', alignItems: 'center', backgroundColor: '#fff', borderRadius: '5px', padding: '8px', color: '#252525', cursor: 'pointer', boxShadow: 3 }}><Image width={100} height={100} className='max-w-[50px]' src='https://i.ibb.co/kmsjzFF/Animation-1700836595835.gif' alt="image" /><span className='text-lg'> Continue with Google</span></Box>
            <Box onClick={() => handleSignUpFacebook()} sx={{ display: 'flex', justifyContent: 'center', gap: '5px', alignItems: 'center', backgroundColor: '#252525', borderRadius: '5px', padding: '8px', color: '#fff', cursor: 'pointer', boxShadow: 3 }}><Image width={100} height={100} className='max-w-[50px]' src='https://i.ibb.co/5R4LB8n/Animation-1706101317533.gif' alt="login image"/><span className='text-lg'> Continue with Facebook</span></Box>
          </Box>
        </Box>
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default Login_Email;