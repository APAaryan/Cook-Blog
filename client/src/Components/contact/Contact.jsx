import { Box, styled, Typography, Link } from '@mui/material';
import {  Instagram, Email,LinkedIn ,GitHub} from '@mui/icons-material';
import Logo from '../../static/Logo.png';
import './contact.css';
const Bodysection =styled(Box)`
    height:28rem;
    display:flex;
    align-items:center;
    justify-content:center;
    
`
const Mainitem =styled(Box)`
    width:80%;
    height:18rem;
    --tw-bg-opacity: 1;
    background-color:rgb(243 244 246/var(--tw-bg-opacity));
    border-radius:0.625rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    box-shadow: 0px 0.0625rem 0.625rem rgba(0, 0, 0, 0.6);
    @media(max-width:450px){
        height:25rem;
        width:90%;
    }
`
const Image =styled('img')({
    height:'6.25rem',
    borderRadius:'4rem',
    boxShadow: "0px 0.0625rem 0.625rem rgba(0, 0, 0, 0.9)",
    
})
const Container =styled(Box)`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    --tw-bg-opacity: 1;
    background-color:rgb(243 244 246/var(--tw-bg-opacity));
`

const Heading = styled(Typography)`
    font-size:3rem;
    font-family: "Baloo Bhai 2", cursive;
`

const Contactbox =styled(Box)`
    display:flex;
    flex-direction:row;
    margin-top:1.25rem;
    justify-content:center;
    @media(max-width:450px){
        margin-top:2.5rem;
    }
`;
const Contact = () => {
    return (
            <Bodysection>
                <Mainitem >
                <Box>
                    <Container >
                        <Heading className='heading'>Feel free to Contact</Heading>
                        <Image className="logoimage" src={Logo} alt="Logo" />
                    </Container>
                </Box>
                <Contactbox className="contactbox">
                    <Link href="https://www.instagram.com/apaaryanraj/" className="contact-icon" style={{textDecoration:"none" , color:"inherit"}}>
                        <Instagram fontSize="large" style={{margin:"0 0.9375rem",cursor:"pointer"}}/>
                    </Link>
                    <Link href="mailto:116apaaryan@gmail.com" className="contact-icon" style={{textDecoration:"none" , color:"inherit"}}>
                        <Email fontSize="large" style={{margin:"0 0.9375rem",cursor:"pointer"}}/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/aaryan-raj-6b27501a6/" className="contact-icon" style={{textDecoration:"none" , color:"inherit"}}>
                        <LinkedIn fontSize="large" style={{margin:"0 0.9375rem",cursor:"pointer"}}/>
                    </Link>
                    <Link href="https://github.com/APAaryan" className="contact-icon" style={{textDecoration:"none" , color:"inherit"}}>
                        <GitHub fontSize="large" style={{margin:"0 0.9375rem",cursor:"pointer"}}/>
                    </Link>
                </Contactbox>
                </Mainitem>
            </Bodysection>   
    );
}

export default Contact;