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
      </header>
    </div>
   )




}
