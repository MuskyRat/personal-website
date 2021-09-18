import React from "react";
import style from './Contacts.module.css'
import {FaYoutube, FaGithub, FaTelegram} from "react-icons/fa";
import PageHeader from "../PageHeader/PageHeader";
import {motion} from 'framer-motion';

const Contacts: React.FC = () => {

    const handleURL = (url: string) => (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        return window.open(url, '_blank')?.focus()
    }

    return (
        <div className={style.Contacts} id='contacts'>

            <PageHeader title={'Contacts'} />

            <div className={style.Container}>

                <div className={style.ContactsIcons}>

                    <motion.div className={style.contact} whileHover={{scale: 1.5}} transition={{duration: .2}}>
                        <FaGithub color='white' size='30px' onClick={handleURL('https://github.com/MuskyRat')} />
                    </motion.div>
                    <motion.div className={style.contact} whileHover={{scale: 1.5}} transition={{duration: .2}}>
                        <FaTelegram color='white' size='30px' onClick={handleURL('https://telegram.me/greatnessawaits')} />
                    </motion.div>
                    <motion.div className={style.contact} whileHover={{scale: 1.5}} transition={{duration: .2}}>
                        <FaYoutube color='white' size='30px' onClick={handleURL('https://www.youtube.com/channel/UC-CWF5bL-JxYiMx3ZV_9QKA')} />
                    </motion.div>
                </div>

            </div>

        </div>
    )

}

export default Contacts;

//

// style={{padding: '1%'}}