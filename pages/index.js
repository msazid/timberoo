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
            <Image src='/Assets/Background/tim-banner-1.jpg' width='500' height='300' alt=''></Image>
            <div>
              <h2>Logging</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, quaerat.</p>
            </div>
        </div>
        <div className={styles.aboutCard}>
        <Image src='/Assets/Background/tim-banner-2.jpg' width='500' height='300' alt=''></Image>
        <div>
              <h2>Harvesting</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, quaerat.</p>
            </div>
        </div>
        <div className={styles.aboutCard}>
        <Image src='/Assets/Background/tim-banner-3.jpg' width='500' height='300' alt=''></Image>
        <div>
              <h2>Logging</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, quaerat.</p>
            </div>
        </div>
      </div>
      <button className={styles.aboutBtn}>Learn more</button>
    </section>

    <section className={styles.promotion}>
      <div>
        <h1>We Buy Red Pine Poles, Softwood, Hardwood <br />
         & Standing Timber
        </h1>
        <p>Call Us now: (123) 456 789</p>
      </div>
    </section>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCard}>
          <h1 className={styles.brand}>Timberoo</h1>
          <p  className={styles.footerText}> Our commitment does not end with a finished package of timber. We also offer expertise, service, and distribution solutions that put the finishing touch on every deal.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, molestiae eius? Quasi culpa incidunt dicta.</p>
          </div>
          <div className={styles.footerCard}>
            <h1  className={styles.footerAboutTitle}>About</h1>
            <p className={styles.footerAboutText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, totam provident atque rerum quam placeat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dignissimos consequuntur, similique deserunt cumque debitis!</p>
          </div>
          <div className={styles.footerCard}>
            <h1 className={styles.footerContactTitle}>Contact Us</h1>
            <p>tebaroo@env.com</p>
            <p>+ 123 456 758</p>
            <p>New York</p>
          </div>
          <div className={styles.footerCard}>
            <h1 className={styles.footerContactTitle}>Menu</h1>
            <p>Home</p>
            <p>About</p>
            <p>Shop</p>
            <p>Contact</p>
          </div>
        </div>
        <h3 className={styles.copyRight}>Timberoo © 2022. All rights reserved</h3>
      </footer>
    </div>
  )
}
