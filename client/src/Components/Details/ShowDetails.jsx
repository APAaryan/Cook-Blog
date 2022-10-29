import { useEffect ,useState,useContext} from 'react';
import {useParams,Link, useNavigate} from 'react-router-dom';
import {API} from "../../services/api";
import PostBanner from "../../static/PostBanner.jpg";
import './details.css';
import {Edit, Delete }from '@mui/icons-material';
import {styled} from '@mui/material';
import { DataContext } from '../../constants/DataProvider';

import Comments from './comments/Comments';

const Editicon =styled(Edit)`
  cursor:pointer;
  margin:0px 0.625rem;
  border:0.0625rem solid black;
  border-radius:0.3125rem;
  margin-bottom:0.3125rem;

`
const Deleteicon =styled(Delete)`
    cursor:pointer;
    margin:0 0.625rem;
    border:0.0625rem solid black;
    border-radius:0.3125rem;
    margin-bottom:0.3125rem;
`
const ShowDetails = () =>{

    const [Post,setPost] = useState({});

   
    const url= Post.picture ? Post.picture :PostBanner;

    const { id } = useParams();
    
    const {Account} = useContext(DataContext);

    const navigate = useNavigate();


    useEffect(() => {

        const fetchData = async () => {
            let response = await API.getPostByID(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        }
        fetchData();
    }, [id]);
    
    const deleteBlog = async () =>{
        let response = await API.deletePost(Post._id);
        if(response.isSuccess){
            navigate('/');
        }
    }
    return(
        <>
            <div className="postbanner">
                <img src={url} alt="Postimage"/>
                {
                    Account.name === Post.name &&
                    <div className="posticon">
                        <Link to={`/update/${Post._id}`}><Editicon color="primary" /></Link>
                        <Deleteicon onClick={() => deleteBlog()} color="error"/>
                    </div>
                }
            </div>
            <div className="postcontainer">
                <div className="postinfo">
                    <div>Author : {Post.name}</div>
                    <div className="postinfodate">{new Date(Post.createDate).toDateString()}</div>
                </div>
                <div className="postTitle">{Post.title}</div>
                <div className="postDescription">{Post.description}</div>
                <Comments Post={Post}/>
            </div>
        </>
    )
}

export default ShowDetails;