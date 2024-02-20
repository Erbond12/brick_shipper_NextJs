import styles from "./navbar.module.css";
import SettingsIcon from "@mui/icons-material/Settings";
import Order_search_bar from "./order_search_bar/Order_search_bar";

const Navbar =  () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <a href={"/"} title="Zurück zur Startseite">
                    Logo
                </a>
            </div>
            <div>
               <Order_search_bar />
            </div>
            <div className={styles.container}> {/* replace the margin for the gap between login and settings with gap=1 oder so*/}
                <div>
                    <button className={styles.buttons}>
                        Login
                    </button>
                </div>
                <div>
                    <a href="/settings" className={styles.settings}>
                        <SettingsIcon className="hidden sm:flex" /> Einstellungen {/* create own css class */}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar
 