import React from 'react';
import {motion} from "framer-motion";
import me from "../../assets/founder.jpg"

const Founder = () => {
    const options ={
        initial:{
            x:"-100%",
            opacity:0
        },
        whileInView:{
            x:"0%",
            opacity:1
        }
    }
  return (
    <section className='founder'>
        <motion.div {...options}>
            <img src={me} alt='Founder' height={200} width={200}/>
            <h3>Pranav Chaudhari</h3>
            <p>Hey Everyone I am Pranav Chaudhari , the founder of Engineer Burger Bar.
            <br/>
            Our Aim is to create The most tasty burger on planet.</p>
        </motion.div>
    </section>
  )
}

export default Founder