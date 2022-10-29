import './homepage.css'
import HomeBanner from '../../static/HomeBanner.jpg';
import Posts from './post/posts';
import { Grid } from '@mui/material';


const Homepage = () =>{

    return(

        <>
        <div className="headertitles">
            <div className="htsmall">Cooking Time</div>
            <div className="htbig">Enter the world of recipes</div>
        </div>
        <div className="Hometopcomponent">
            <div className="HomeBanner">
                <img className="HomeBannerimg" src={HomeBanner} alt="Banner"/>
            </div>
            <div className="Homesidebar">
                <div className="HomeSideHead">Most Amazing Food </div>
                <div className="HomeSideSubhead">Cooking can sometimes feel like a vast, unpredictable sea full of strange ingredients and even stranger rituals. The trick is to jump in again and again and again, until you begin to confidently establish your go-to cooking techniques inside the kitchen</div>
            </div>
        </div>
        
        <div className="homepost"> POSTS</div>
        <hr />
        <Grid container>
         <Grid container item lg={12} sm={12} xs={12}>
          <Posts />
         </Grid>
        </Grid>
        <footer className='footerElement'> Created By- Aaryan Raj</footer>
        </>
    )
}

export default Homepage;