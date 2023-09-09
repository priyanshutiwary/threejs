import React, {useState, useEffect} from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSnapshot } from "valtio"

import config from '../config/config';
import state from '../store';
import {download} from '../assets';
import {downloadCanvasToImage, reader} from '../config/helpers';
import {EditorTabs, Filtertabs, DecalTypes} from '../config/constants';
import { fadeAnimation, slideAnimation } from "../config/motion";
import { AiPicker,ColorPicker, CustomButton, FilePicker, Tab } from "../components";


const Customizer = () => {
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
          key="custom"
          className="absolute top-0 left-0 z-10"
          {...slideAnimation('left')}
          >

          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer