import styles from "./headImg.module.css"
import { Carousel } from 'antd';


export default function HeadImg(){
   
   const contentStyle = {
      height: '570px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#fff',
    };

    return(
     <div className={styles.wrap}>
       
        <div className={styles.carousel}> 
         
         <Carousel autoplay>
           <div>
              <h3 style={contentStyle}>1</h3>
           </div>

           <div>
              <h3 style={contentStyle}>2</h3>
           </div>

           <div>
              <h3 style={contentStyle}>3</h3>
           </div>

           <div>
              <h3 style={contentStyle}>4</h3>
           </div>
         </Carousel>

         </div>


       </div>
    
    )
        
 }


 