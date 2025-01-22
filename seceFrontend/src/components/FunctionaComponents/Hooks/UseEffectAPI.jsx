import {useState,useEffect} from 'react'
import axios from 'axios'
/*const UseEffectAPI=()=>{
    var [post,setPost]=useState([])
    useEffect(()=>{
        var response=axios
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then((res)=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch((err)=>console.log(err))
    },[])
    return(
        <div>
            <h1>This page is meant for useEffect API.</h1>
            <h3>The contents inside my JSONPlaceholder API posts</h3>
            <ul>
                {post.map((element)=>(
                    <li key={element.id}>{element.title}</li>
                ))}
            </ul>
        </div>
    )
}*/



const UseEffectAPI = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") 
      .then((res) => {
        console.log(res.data);
        setImages(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>This page is meant for useEffect API with Images</h1>
      <h3>The contents inside my JSONPlaceholder API photos:</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          padding: '20px',
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={image.thumbnailUrl}
              alt={image.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p style={{ marginTop: '10px', fontSize: '14px' }}>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default UseEffectAPI;