import { Box,Typography ,styled} from "@mui/material";
import PostBanner from "../../../static/PostBanner.jpg";
import {addElipsis} from '../../../utils/commonutils';


const Container =styled(Box) `
    border:0.1rem solid #d3cede;
    border-radius:0.65rem;
    margin:0.6rem;
    height:22rem;
    & > p{
        padding:0.32rem;
        padding-top:0;
    }
`
const Image =styled('img')({
    width:"100%",
    objectFit:"cover",
    height:"9.3rem"

})

const Title =styled(Typography)`
    font-size:1.1rem;
    font-weight:bold;
`
const AuthorName =styled(Typography)`
    font-size:0.9rem;
`
const Details = styled(Typography)`
    font-size:0.9rem;
    word-break:break-word;
`

const SinglePost = ({post}) =>{

    return(
        <Container>
        <Image src={post.picture ? post.picture :PostBanner} alt="blog picture"/>
        <Title>{addElipsis(post.title,18)}</Title>
        <AuthorName>{post.name}</AuthorName>
        <Details>{addElipsis(post.description,20)}</Details>
        </Container>
    )
}

export default SinglePost;