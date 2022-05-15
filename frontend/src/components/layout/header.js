import React from 'react'
import styles from './header.module.scss'

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
         <a className="navbar-brand" href="#">
           <img src="/logo.png" alt="company-logo" height="30" />
         </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className={styles.navBar}>
            <a className={styles.navLink} aria-current="page" href="#">Find Work</a>
            <a className={styles.navLink} href="#">Timesheets</a>
            <a className={styles.navLink} href="#">Messaging</a>
          </div>
        </div>

        <div className="d-flex">
          <div className={styles.profile}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKsSURBVDjLfZPLa1RnGIef75zv3OLEDObWqcaYYJUWgqa40MmilioE2kI3XVXRFsmqUAqi/4G7brpxpaLgpUIEcaEW23RbKRYqASfKJOIlMbfJZDyTc/kuXaS1BmNfeBcv/Hjeuzh/494PxoivmpkJU8WbZteGnoTQ49yxLz78HkAaKw59NtTTGYahEMLl/ywxoFXOtV8fHQVWAc3UBEEQigu/1UhYoCEq9HXPEnl1lDUsLkeMP2qjxb6PpJ3jX/ahjRD/QmWmwHFcHAGZM0NfxyyB/5h62kBphQwC+ntKTFY3UPQ7MGZtVRLAAI4jSO0cvldjaaVOqhMypVA2JggC4jSiPXKw2DWD+Q8gBFYZUp2TqJSVPCUzCm0AkWONRjoCa+2bFVi7CgjppBFPY12P1MRkSuO5EXGjQKtfYjC/RH53li1Jvw+DADivAI6g4G7m2Uw3yUKBFruJVrEJtdjOzJMSZa9K+YMapfIRBrvuh/dO7RgGkPZ1gNfFu9EgT/8co1h4jtAaL+nk455eDvRVadt5kPjxTTZs7BVqa3305nf9x161UFkYQRuDNoYd6Rz7enoxQHX6BZG9QXHgW3RznLBjC4l+Sumj3S0qrp2W1loEMLx6WAC4A0s04wXC6b/oKI9QmLpDXpvCcecRToy/cR6SJi+nU1eKde5VR0V0VMT4Hu88vIgXWYyawTFL4LRi84wHVyrJeGV5RIaeqGPytl3de0GIf1CWpHqLZOoXuvYMYbOfEbrBg9spMk3Ic20nqsuHDl+eHJW+FD+NjlX3ZdoOvL7i/eJ64b2hT9xs/jRStjE+ltm7zU8TubWc++QXj57cP7qay9p1/cm14d/TF6dsXPnc/vFjuXHm6+2H19PJt33e88n5O8v1sW3NxXhlYmLuxDdnH15dT/c3MC9g0QGCji8AAAAASUVORK5CYII=" alt="user-profile" />
          </div>
          <button className={`btn ${styles.btnLogout}`} type="submit">Logout</button>
        </div>
      </div>
    </nav>
  )
}