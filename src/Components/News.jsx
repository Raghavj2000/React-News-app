import React from 'react'
import axios  from 'axios';
import {useState,useEffect} from 'react'
import {Card,Button} from 'antd'
const {Meta}=Card;




const News = () => {
    
        const [news,setNews]=useState([])
        useEffect(() => {
            const loadNews = async () => {
              const response = await axios.get(
                "https://newsapi.org/v2/top-headlines?country=in&apiKey=55f619be7bd24d0a8a5b86ab57bcf044"
              );
              setNews(response.data.articles);
            };
            loadNews();
          
            
          }, []);

        
        console.log('lol',news)
  return (
    <div>
        { news.map((item,index)=>{
            return(
                <Card  
                key={index}
               
                style={{ width: "50%", marginLeft:"400px", marginBottom:"50px", border:"10px" }}
                cover={<img alt="image broken " src={item.urlToImage} />}
              >
                <Meta title={item.title} description={item.content} />
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Button type="default" style={{ marginTop: "30px", marginLeft:"300px",  } }>
                    Read More
                  </Button>
                </a>
              </Card>
            )
        })}


    </div>
  )
}

export default News