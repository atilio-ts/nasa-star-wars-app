import { SelectedPage } from '@/types';
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Home({ setSelectedPage }: Props) {
    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN HEADER */}
            <motion.div
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* MAIN HEADER */}
                <motion.div className='z-10 mt-32 md:basis-3/5'>
                    {/* HEADINGS */}
                    <motion.div
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                <img alt='home-page-text' src={HomePageText} />
                            </div>
                        </div>

                        <p className='mt-8 text-sm'>
                            Welcome to the NASA and StarWars APIs test website, the objective of this website is to showcase my abilities 
                            by creating a backend with NodeJS Express and Typescript that makes calls to the NASA and Stwars public APIs.
                            For the frontend I used React Typescript and Threejs for the graphics.
                        </p>
                    </motion.div>
                </motion.div>

                {/* IMAGE */}
                <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                    <img alt="home-pageGraphic" src={HomePageGraphic} />
                </div>
            </motion.div>
        </section>
    )
}

export default Home