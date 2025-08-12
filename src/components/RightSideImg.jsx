import { motion } from 'framer-motion';
import heroimage from '../assets/image_(2)[1].png';
import cloud1 from '../assets/imageallserv.png';
// import cloud1 from '../assets/whatsappicons.png';
import cloud2 from '../assets/voice.png';
// import star from '../assets/voice.png';

export default function RightSideImg() {
  return (
    <div className="relative rounded-xs overflow- w-full ">
      {/* Zooming hero image */}
      <motion.img
        src={heroimage}
        alt="Hero"
        className="rounded-3xl mix-blend-screen w-full h-full object-cover"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
      />
    
      {/* Floating PNG: Cloud 1 */}
      <motion.img
        src={cloud1}
        alt="Cloud 1"
        className="absolute -top-10 left-5 w-20 md:w-32 opacity-80"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating PNG: Cloud 2 */}
      <motion.img
        src={cloud2}
        alt="Cloud 2"
        className="absolute -top-5 right-0 w-17 md:w-34 opacity-90"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating PNG: Star */}
      {/* <motion.img
        src={star}
        alt="Star"
        className="absolute -top-15 left-1/2 transform -translate-x-1/2 w-16 opacity-90"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      /> */}
    </div>
  );
}
