import {motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro &&(
            <motion.section className='Home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation("down")}>
                    <img src="./threejs.png" className='w-8 h-8 object-contain' alt="" />
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}
                    className='flex flex-col gap-5'
                    >
                        <h1 className='head-text'>
                            LET'S <br className='xl:block hidden'/> DO IT.
                        </h1>
                    </motion.div>
                    <motion.div>
                        <p className='max-w-md font-normal text-gray-600'>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores error voluptates iusto consectetur, id nesciunt, rerum, magni optio hic explicabo nihil aspernatur magnam asperiores! Nam at id modi reiciendis!
                        </p>

                        <CustomButton
                        type= "filled"
                        title="Custom"
                        handleClick={()=> state.intro = false}
                        customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />

                    </motion.div>
                </motion.div>

            </motion.section>

        )}
    </AnimatePresence>
  )
}

export default Home