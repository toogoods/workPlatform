import React from 'react'
import styles from './page.css';
const Page = ({children}) => {
    return (<div className={styles.page}>
        {children}
    </div>)
}

export default Page;