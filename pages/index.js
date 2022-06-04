import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {GoTools} from 'react-icons/go'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdOutlinePayment} from 'react-icons/md'
import {RiCustomerService2Fill} from 'react-icons/ri'


export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.heroBanner}>
      <div>
        <p className={styles.bannerTitleSmall}>WOOD YOU NEED FOR</p>
        <h1 className={styles.bannerTitleLarge}>BUILDING !</h1>
        <button className={styles.bannerBtn}>Shop Now</button>
      </div>
    </div>
    <section className={styles.grid}>

      <div className={styles.card}>
        <span><GoTools/></span>
        <h2>Easy Service</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, consequatur?</p>
      </div>

      <div className={styles.card}>
        <span><TbTruckDelivery/></span>
        <h2>Easy Delivery</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, possimus.</p>
      </div>

      <div className={styles.card}>
        <span><MdOutlinePayment/></span>
        <h2>Safe Payment</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, error?</p>
      </div>

      <div className={styles.card}>
        <span><RiCustomerService2Fill/></span>
        <h2>24hr Service</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, natus?</p>
      </div>

    </section>


    <section style={{backgroundColor:'#f0eddf',margin:'0'}}>
      <div className={styles.shortDes}>
        <div>
          <Image alt='' src='/Assets/Background/tim-banner-1.jpg' width='600' height='500'></Image>
        </div>
        <div className={styles.shortDesCard}>
          <div className={styles.shortDesCardBody}>
          <h1>Responsible Forestry. <br />
            Quality Timber
          </h1>
          <p>We market forest products and provide land management in many countries.</p>
          <button>View Product</button>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.about}>
      <h2>WHAT WE DO</h2>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutCard}>
            <Image src='/Assets/Background/tim-banner-1.jpg' width='300' height='200' alt=''></Image>
        </div>
        <div className={styles.aboutCard}>
        <Image src='/Assets/Background/tim-banner-2.jpg' width='300' height='200' alt=''></Image>
        </div>
        <div className={styles.aboutCard}>
        <Image src='/Assets/Background/tim-banner-3.jpg' width='300' height='200' alt=''></Image>
        </div>
      </div>
    </section>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
