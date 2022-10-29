import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub,OpenInNew } from '@mui/icons-material';
import AboutBanner from '../../static/AboutBanner.jpg'
const Container=styled(Box)`
    display:flex;
    justify-content:center;
    margin-top:1.25rem;
`
const Image = styled("img")({
    width: "90%",
    height: "18rem",
    backgroundSize: "cover",
    borderRadius:"0.625rem",
    boxShadow: "0 0.0625rem 0.8125rem rgba(10, 46, 57, 0.6)"
})

const Wrapper = styled(Box)`
    padding: 1.25rem;
    & > h3, & > h5 {
        margin-top: 3.125rem;
    }
`;

const Text = styled(Typography)`
    color: #555050;
`;

const About = () => {

    return (
        <Box>
            <Container>
            <Image src={AboutBanner}/>
            </Container>
            <Wrapper>
                <Typography variant="h3" style={{textShadow: "rgb(0, 0, 0) 0px 0.0625rem 0.5rem", color: "white"}}>Aaryan Raj</Typography>
                <Text variant="h5">I'm an Electrical Engineering Undergraduate from BIT Sindri. 
                    I am a full stack developer and a good problem solver.<br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/APAaryan" color="inherit" target="_blank"><GitHub fontSize='large'/></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    You can also check my programming skills on gfg 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://auth.geeksforgeeks.org/user/apaaryan/profile" color="inherit" target="_blank">
                            <OpenInNew />
                        </Link>
                    </Box>  
                        or in codechef   
                        <Link href="https://www.codechef.com/users/apaaryan" target="_blank" color="inherit">
                            <OpenInNew />
                        </Link>
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;