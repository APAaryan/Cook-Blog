import {Box, Typography ,styled} from "@mui/material";
import {useContext} from 'react';
import {Delete} from '@mui/icons-material';
import { API } from '../../../services/api';
import { DataContext} from "../../../constants/DataProvider";

const Component = styled(Box)`
    margin:1.5rem 0;
    background-color:#eae6e6;
    padding:1rem;
`;

const Container = styled(Box)`
    display:flex;
    margin-bottom:0.375rem;
`;

const Username =styled(Typography)`
    font-weight:550;
    font-size:1rem;
    margin-right:1.5rem;
`;

const Datestyled =styled(Typography)`
    font-size: 0.875rem;
    color: #736464;
`

const Deleteicon =styled(Delete)`
    margin-left:auto;
    cursor:pointer;
`


const IndividualComment = ({Comment,setToggle}) =>{

    const deletecomment = async () =>{
        let response = await API.deletecomment(Comment._id);
        if(response.isSuccess){
            setToggle(prevState=>!prevState);
        }
    }
    const {Account} = useContext(DataContext);
    return(
        <Component>
            <Container>
                <Username>{Comment.name}</Username>
                <Datestyled>{new Date(Comment.date).toDateString()}</Datestyled>
                {
                    Comment.name===Account.name && <Deleteicon color="error" onClick={()=>deletecomment()}/>
                }
            </Container>
            <Box>
                <Typography>{Comment.comments}</Typography>
            </Box>
        </Component>
    )
}

export default IndividualComment;