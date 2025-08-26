import styles from './navbar.module.css';
import { useNavigate } from "react-router-dom";


export default function Navbar() {
     const navigate = useNavigate();
    return (
        <div className={`${styles.container} ${styles.navbar}`}>

            <div className={styles.first}>
                
                <div className={styles.logo}>
                    <h1 > LiveStumps</h1>
                </div>

                <div className={styles.links}>
                    <a href="#"  onClick={(e) => { e.preventDefault(); navigate("/schedule"); }}>Schedule</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate("/completed"); }}>Completed</a>
                </div>

            </div>

            <div className={styles.first}>
                <input placeholder='Search Matches...' />
                <button>Sign Up</button>
            </div>


        </div>
    )
}