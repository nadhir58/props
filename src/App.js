import './App.css';
import Profile from './Profile/Profile';
import x from './image.jpg'

function App() {
  const info ={
    fullname : "nadhir ben amor",
    profession : "it",
    bio : "nadhir ben amor is a veteran of creating and managing digital content to build relationships for organizations and individuals. Ann is the author of the Wall Street Journal bestseller Everybody Writes: Your Go-To Guide to Creating Ridiculously Good Content (September 2014, Wiley) and co-author of the best-selling book on content marketing, Content Rules: How to Create Killer Blogs, Podcasts, Videos, Ebooks, Webinars (and More) That Engage Customers and Ignite Your Business (2011, Wiley). She is the Chief Content Officer of MarketingProfs; a LinkedIn Influencer; a keynote speaker, mom, and writer."
  }
  const beta = function(){
    alert (info.fullname)}

 
  
  return (
    

    <div className="App">
      
      <Profile data ={beta} alpha={info} >
       <img src={x}/> </Profile>
       
      

      
        
      
      
    </div>
  );
}

export default App;
