import React,{ useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import { db, storage } from "./firebase";

function App() {

  const [reels, setReels] = useState([]);
  // const [video, setVideo] = useState(null);
  // const [url, setUrl] = useState(0);


  useEffect(() => {
  db.collection('reels').onSnapshot(snapshot => setReels(snapshot.docs.map(doc => doc.data())))
  },[])

// const handleChange = (e) => {
//   if(e.target.files[0]){
//     setVideo(e.target.files[0]);
//   }
// }
  // const handleUpload = () => {
  //   const uploadTask = storage.ref(`reels/${video.name}`).put(video)
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       )
  //       console.log(progress);
  //     },
  //     (error) => {
  //       console.log(error)
  //     },
  //     async () => {
  //       await storage.ref('reels').child(video.name).getDownloadURL().then(url => console.log('url', url))
  //     }
  //   )
  // }
  return (
    <div className="app">

      {/* <input type='file' accept="video/*" onChange={handleChange}/>
      <button onClick={handleUpload}>upload</button> */}
      <div className='app__top'>
      <img className='app__logo'
        src='https://images.contentful.com/w3cthbuv8rf8/2dR4pKXSSUoCWeuaw8qOyo/f03d3b01785f3aace12c6083c6156936/
2016-the-batman-v-superman-logo-its-larger-to-accommodate-for-supermans-s-symbol-but-makes-for-a-very-clunky-silhouette.png'
        alt='logo' />
        <h1>Reels</h1>
      </div>
      <div className='app__videos'>
        {
          reels.map(({channel,shares,likes,url,avatarSrc,song}) => (
          <VideoCard 
            key={url}
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url = {url}
            likes={likes}
            shares={shares}
          />
          ))}
      </div>
    </div>
  );
}

export default App;
