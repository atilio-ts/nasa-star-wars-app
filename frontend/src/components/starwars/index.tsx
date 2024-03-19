import { ISwapiData, SelectedPage, searchReqType } from "@/types";
import { motion } from "framer-motion";
import HText from "../shared/HText";
import { useState } from "react";
import axios from "axios";
import { TypeSelectorCharacter, TypeSelectorStarship } from "./TypeSelector";
import { Canvas } from "@react-three/fiber";

const SWAPI_URL = import.meta.env.VITE_SWAPI_URL;

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const [searchName, setName] = useState("")
  const [searchNameError, setSearchNameError] = useState(false)

  const [searchType, setType] = useState("starship")
  const [searchTypeError, setSearchTypeError] = useState(false)

  const [swapiData, setSwapiData] = useState<ISwapiData>()

  async function getStarwarsData(){
    console.log(searchName, searchType)
    if (!searchName) { setSearchNameError(true); return; }
    if (!searchType) { setSearchTypeError(true); return; }

    setSearchNameError(false);
    setSearchTypeError(false);

    const response = await axios.get(`${SWAPI_URL}?type=${searchType}&name=${searchName}`);
    console.log(response.data.data);
    setSwapiData(response.data.data);
  }

  return (
    <section id="starwars" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.StarWars)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">Star wars</span> API
          </HText>
          <p className="my-5">
            Welcome to the Star wars API section here you can get data from different starships and characters 
            of the series just by typing their name them in the box below and selecting the starship or character logo
            in the canvas.
          </p>
        </motion.div>

        {/* FORM AND CANVAS */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div>
              <input
                className='mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white'
                type="text"
                placeholder="NAME"
                onChange={(e) => setName(e.target.value)}
              />
              {searchNameError && (
                <p className="mt-1 text-primary-500">
                  "This field is required."
                </p>
              )}

              <button
                className="my-3 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                onClick={getStarwarsData}
                >
                  Search
              </button>

              { swapiData && 
                <div>
                  { swapiData.name && <p>name: {swapiData.name}</p> }
                  { swapiData.manufacturer && <p>manufacturer: {swapiData.manufacturer}</p> }
                  { swapiData.gender && <p>gender: {swapiData.gender}</p> }
                  { swapiData.height && <p>height: {swapiData.height}</p> }
                  { swapiData.mass && <p>mass: {swapiData.mass}</p> }
                  { swapiData.model && <p>model: {swapiData.model}</p> }
                  { swapiData.passengers && <p>passengers: {swapiData.passengers}</p> }
                </div>
              }
            </div>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {searchTypeError && (
              <p className="mt-1 text-primary-500 py-5">
                "Please select a type for your search."
              </p>
            )}
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <div className={`p-1 h-64 ${(searchType == searchReqType.STARSHIPS) ? "border-solid border-4 border-primary-500":"border-0"}`} 
                onClick={()=>setType(searchReqType.STARSHIPS)}>
                <Canvas style={{ background: "black" }}> 
                  <TypeSelectorStarship /> 
                </Canvas>
              </div>
              <div className={`p-1 h-64 ${(searchType == searchReqType.CHARACTER)? "border-solid border-4 border-primary-500":"border-0"}`} 
                onClick={()=>setType(searchReqType.CHARACTER)}>
                <Canvas style={{ background: "black" }}> 
                  <TypeSelectorCharacter name={searchName}/> 
                </Canvas>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;