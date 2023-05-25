import styles from "./content.module.css"

export default function Content(){
    return(
      <div>

      
        <div className={styles.activity}>

            <div className={styles.actimg}>
              <img className={styles.img} src="images/1.png" alt="activity"/>
              <img className={styles.dec} src="images/red.png" alt="red"/>
           </div>

           <div className={styles.actword}>
              <p className={styles.title}>台北國際酒展</p> 
              <p className={styles.word}>
                台北國際酒展<br></br><br></br>
              Taipei Wine & Spirits Festival <br></br><br></br>
              地點:台北 台中 高雄<br></br><br></br>
              時間:2023.12.11~12.14
              </p>
              <button className={styles.button}>查看更多</button>
           </div>

           <div className={styles.actword}>
              <p className={styles.title}>超‧微醺趴</p> 
              <p className={styles.word}>
                 5大酒款 + 5感新體驗　<br></br>顛覆品酒 嶄新享受！ <br></br><br></br>
                 台酒5大經典酒款搭配特製佐酒小點<br></br>美酒美食最佳味蕾饗宴！<br></br><br></br>
                 地點:華山文創園區<br></br><br></br>
                 時間:2024.1.5
              </p>
              <button className={styles.button}>查看更多</button>
           </div>

           <div className={styles.actimg}>
              <img className={styles.img1} src="images/activity2.png" alt="activity"/>
              <img className={styles.dec3} src="images/dec3.JPG" alt="red dec"/>
              <img className={styles.dec2} src="images/brown.JPG" alt="brown square"/>
           </div> 
        </div>

        <div className={styles.a}>
          <div className={styles.story}>
            <div className={styles.brandredbg}>
                  <p className={styles.brandtitle}>ABOUT US</p>
                  <p className={styles.brandword}>Life is too short to drink bad wine.<br></br><br></br>
                  愛上端起酒杯的瞬間<br></br><br></br>
                  品嘗到各式各樣珍稀酒款
                  </p>

                  <div className={styles.learnmore}>
                     <p className={styles.lmword}>了解更多</p>
                  </div>
            </div>
        </div>

        </div>
        
        <div className={styles.b}>
           <p className={styles.title2}>超商特調</p>

          <div className={styles.seveneleven}>
         
            <div className={styles.circle1}>
               <img className={styles.jiu} src="images/jiu1.png" alt="jiu1"/>

               <div className={styles.seemore}>
                 <img className={styles.cocktail} src="images/cocktail.png" alt="activity"/>
                 <p>click see more</p> 
               </div>

            </div>

             
             <div className={styles.circle2}>
               <img className={styles.jiu} src="images/jiu2.png" alt="jiu1"/>

               <div className={styles.seemore}>
                 <img className={styles.cocktail} src="images/cocktail.png" alt="activity"/>
                 <p>click see more</p> 
               </div>

             </div>

             <div className={styles.circle3}>
                  <img className={styles.jiu} src="images/jiu3.png" alt="jiu1"/>  
             
               <div className={styles.seemore}>
                 <img className={styles.cocktail} src="images/cocktail.png" alt="activity"/>
                 <p>click see more</p> 
               </div>
             </div>

         </div>

        </div>
        

       

    </div>   
        )
        
}