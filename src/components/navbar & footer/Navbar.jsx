import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.container}>

            <div className={styles.first}>
                
                <div className={styles.logo}>
                    <h1 > LiveStumps</h1>
                </div>

                <div className={styles.links}>
                    <a href="#">Schedule</a>
                    <a href="#">Completed</a>
                </div>

            </div>

            <div className={styles.first}>
                <input placeholder='Search Matches...' />
                <button>Sign Up</button>
            </div>


        </div>
    )
}