import styles from "./header.module.css"
import {
   BrowserRouter,Routes,Route,Link
 } from 'react-router-dom' 
 
 
export default function Header(){
   return(
    <div className={styles.wrap}>

      <header className={styles.header}>
        <Link to='/'>
         <h2 className={styles.title}> JIU</h2>
        </Link>


   <nav>
     <ul className={styles.back}>

      <li className={styles.block}><Link to='/Aboutus'>ABOUT US</Link></li>
      

      <li className={styles.block}><Link to='/'>ALCOLHO</Link></li>

      <Link to='/Aboutus'><li className={styles.block}>PRODUCT</li></Link>  
    </ul>
   </nav>
  
      </header>

    </div>
   )




}
