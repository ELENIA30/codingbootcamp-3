import Image from "next/image";
import Link from "next/link";
import logo from "../../public/favicon.png";
import styles from "./index.module.scss";

const DefaultLayout = ({ children }) => {
  return (
   
      
  <body>
    
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <Link href="/">
          <a>
            <Image src={logo} width="50" height="50" />
            <h1> Il Picciotto Viaggiamondo</h1>
            <h6> Manda anche tu un messaggio con Picciotto!</h6>
          </a>
        </Link>
      </nav>

      {children}

      <footer className={styles.footer}>A presto e buon viaggio!</footer>
    </div>
    </body>

  ); 

};

export default DefaultLayout;
