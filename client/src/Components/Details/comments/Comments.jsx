import React from "react";
import { Box ,TextareaAutosize,Button,styled } from "@mui/material";
import { useState,useContext ,useEffect} from "react";
import {DataContext} from '../../../constants/DataProvider';
import { API} from '../../../services/api';
import IndividualComment from './IndividualComment';


const Container = styled(Box)`
    margin-top:6.25rem;
    display:flex;
`;

const Image =styled('img')({
    width:50,
    height:50,
    borderRadius:'50%'
})

const TextAreaStyled = styled(TextareaAutosize)`
    height:6.25rem;
    width:100%;
    padding: 0.125rem;
`;
const initialValues ={
    name:'',
    postid:'',
    comments:'',
    date : new Date()
}



const Comments = ({Post}) =>{

    const url ="https://static.thenounproject.com/png/12017-200.png";

    const [Comment,setComment] =useState(initialValues);
    const {Account} = useContext(DataContext);
    const [Comments,setComments]=useState([]);
    const [Toggle,setToggle] =useState(false);

    useEffect(()=>{
        const fetchComment = async () =>{
           const response = await API.getComments(Post._id);
           if(response.isSuccess){
            setComments(response.data);
           }
        }
        fetchComment();
    },[Post,Toggle])

    const handleChange = (e) =>{
        setComment({
            ...Comment,
            name:Account.name,
            postid:Post._id,
            comments:e.target.value
        });
    }

    const insertComment = async (e) =>{
       let response = await API.addComment(Comment);
       if(response.isSuccess){
        setComment(initialValues);
       }
       setToggle(prevState => !prevState);
    }

    return (
        
        <Box>
            <Container>
                <Image src={url} alt="Comments pic"/>
                <TextAreaStyled
                    minRows={3}
                    placeholder="Write your views?"
                    value={Comment.comments}
                    onChange={(e) => handleChange(e)}
                />
                <Button 
                    variant="contained" 
                    size="medium" 
                    style={{height: 40}}
                    onClick ={(e)=>insertComment(e)}
                >Post</Button>
            </Container>
            <Box>
                {
                    Comments && Comments.length > 0 && Comments.map(Comment =>(
                        <IndividualComment Comment={Comment} setToggle={setToggle}/>
                    ))
                }
            </Box>
        </Box>
        
    )
}

export default Comments;