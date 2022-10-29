import "./create.css";
import PostBanner from "../../static/PostBanner.jpg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState ,useEffect,useContext } from "react";
import {useNavigate} from 'react-router-dom';

import  { DataContext } from "../../constants/DataProvider";
import {API} from '../../services/api.js';

const initialpost={
    title:"",
    picture:"",
    description:"",
    name:"",
    createDate: new Date()
}
const Createpost = () => {

    const [post,setpost] =useState(initialpost);
    const [file,setfile] =useState('');
    const {Account} =useContext(DataContext);

    const navigate=useNavigate();

    useEffect(()=>{
        const getImage = async () =>{
            if(file){
                const data =new FormData();
                data.append("name",file.name);
                data.append("file",file);

                //api call
               const response = await API.uploadfile(data);
               post.picture = response.data;
            }
        }

        getImage();
        post.name=Account.name;
    },[file])

    const handleChange = (e) =>{
        setpost({...post, [e.target.name]:e.target.value});
    }

    const savePost = async () =>{
      let response=await API.createPost(post);
      if(response.isSuccess){
        navigate('/');
      }
    }

  return (
    <>
      <div className="postbanner">
        <img src={post.picture ? post.picture :PostBanner} alt="PostBanner" />
        <label htmlFor="fileinput">
          <AddCircleIcon
            fontSize="large"
            style={{ cursor: "pointer", color: "#000000b8" }}
          />
        </label>
        <input 
            type="file" 
            id="fileinput" 
            style={{ display: "none" }} 
            onChange ={(e)=> setfile(e.target.files[0])}/>
      </div>
      <div className="postcontainer">
        {/* <input
          placeholder="Author's Name...."
          className="inputtextbox"
          type="text"
        /> */}
        <input
          placeholder="Blog Title...."
          className="inputtextbox"
          type="text"
          onChange={(e)=>handleChange(e)}
          name="title"
        />
        <textarea
         placeholder="Tell your story....." 
         rows="15" cols="33" 
         onChange={(e)=>handleChange(e)}  
         name="description">
        </textarea>
        <button className="publishbutt" onClick={() =>savePost()}>Publish</button>
      </div>
    </>
  );
};

export default Createpost;
