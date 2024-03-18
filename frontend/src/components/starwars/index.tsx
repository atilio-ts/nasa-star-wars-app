import { ISwapiData, SelectedPage } from "@/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "../shared/HText";
import { useState } from "react";
import axios from "axios";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const [searchNameError, setSearchNameError] = useState(false)
  const [searchName, setName] = useState("")
  const [searchType, setSearchType] = useState("starship")
  const [swapiData, setSwapiData] = useState<ISwapiData>()

  async function getStarwarsData(){
    if(searchName){
      setSearchNameError(false);
      setSearchType("starship");
      const response = await axios.get(`http://localhost:3001/api/starWars/search?type=${searchType}?name=${searchName}`);
      console.log(response.data.data[0])
      setSwapiData(response.data?.data[0]);
    }else setSearchNameError(true);
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
            Welcome to the Star wars API section here you can get data from different starships just
            by typing their name them in the box below or if you want to get information about the 
            Millenium Falcon just click the ship.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
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

              <div>
                Complete name: {swapiData?.name}
              </div>
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
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;