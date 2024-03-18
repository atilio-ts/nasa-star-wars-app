import { SelectedPage, IPicture } from "@/types";
import { motion } from "framer-motion";
import HText from "../shared/HText";
import Picture from "./Picture";
import axios from "axios";
import { useState } from "react";
import { Canvas } from '@react-three/fiber'
import Mars from './Mars'

const NASA_API_URL = import.meta.env.VITE_NASA_API_URL;
 

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Nasa = ({ setSelectedPage }: Props) => {
  const [marsPictures, setMarsPictures] = useState([]);

  async function getMarsPictures(){
    const response = await axios.get(NASA_API_URL);
    setMarsPictures(response.data.data);
  }

  return (
    <section id="nasa" className="w-full bg-primary-100 py-4 0">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.NASA)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <div className="mt-10 justify-between gap-8 md:flex">
          <div className="mt-10 basis-1/2 md:mt-0">
              <HText>NASA</HText>
            <p className="py-5">
              Welcome to the NASA API section, here by clicking the mars icon you can access to the Image data gathered 
              by NASA's Curiosity, Opportunity, and Spirit rovers on Mars. Every time you click on Mars you'll get 
              randomized images from this endpoint. <br/>
              The mars sphere component was made using <a href="https://www.npmjs.com/package/@react-three/fiber">react-three-fiber</a> that
              is a ThreeJs wrapper for react, rocky soil textures from <a href="https://polyhaven.com/a/rocky_trail_02">polyhaven</a> and 
              the stars and orbit animation are from <a href="https://www.npmjs.com/package/@react-three/drei/v/9.0.1">react-three-drei</a> an 
              useful animation and component library.
            </p>
          </div>
          <div className="relative mt-16 basis-1/2 md:mt-0 w-full before:absolute before:-bottom-20" onClick={getMarsPictures}>
          <Canvas style={{ background: "black" }}> 
            <Mars /> 
          </Canvas>
          </div>
        </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {marsPictures.map((item: IPicture, index) => (
              <Picture
                key={`${item.id}-${index}`}
                image={item.img_src}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Nasa;