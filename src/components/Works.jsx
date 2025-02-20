// import React from "react";
// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { certficates, projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//         <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>
//         </div>

         

//         <div className='mt-5'>
//           <h3 className='text-[#F97316] font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//          {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };


// const Certificates = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>
//         </div>

        

//         <div className='mt-5'>
//           <h3 className='text-[#F97316] font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//          {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>

//      <motion.div variants={textVariant()} className={`${styles.sectionSubText} text-center`}>
//        <p className={`${styles.sectionSubText} `}>My work</p>
       

//       </motion.div>
//       <motion.div variants={textVariant()} className={`${styles.sectionHeadText} text-center`}>
//        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>

//       </motion.div>

//       <div className='w-half flex justify-center'>
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center'
//         >
//           The collection of projects presented below serves as a testament to my skills and expertise, 
//           offering tangible demonstrations of my work in real-world contexts. Each project is accompanied
//           by a concise description and provided with accessible links to demos and further details. Together, 
//           they exemplify my proficiency in tackling intricate challenges, adapting to various technologies, 
//           and efficiently overseeing project management endeavors.

//         </motion.p>
//       </div>

//       <div className='mt-20 flex flex-wrap gap-7 justify-center'>
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>

//       <motion.div variants={textVariant()} className={`${styles.sectiontesttext} text-center`}>
//            <p className={`${styles.sectiontesttext} `}>.</p>
//            <p className={`${styles.sectiontesttext} `}>.</p>
//            <p className={`${styles.sectiontesttext} `}>.</p>
//            <p className={`${styles.sectiontesttext} `}>.</p>
//            <p className={`${styles.sectionSubText} `}>My Achievements</p> 

//       </motion.div>

//       <motion.div variants={textVariant()} className={`${styles.sectionHeadText} text-center`}>
//        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>

//       </motion.div>

//       <div className='mt-20 flex flex-wrap gap-7 justify-center'>
//         {certficates.map((project, index) => (
//           <Certificates key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Works;
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { certficates, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="w-full sm:w-[360px]">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[#F97316] font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-8">
          <p className="text-secondary uppercase tracking-wider text-[14px] sm:text-[18px]">
            My work
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.
          </h2>
        </div>

        <div className="w-full">
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            The collection of projects presented below serves as a testament to my skills and expertise, 
            offering tangible demonstrations of my work in real-world contexts. Each project is accompanied
            by a concise description and provided with accessible links to demos and further details. Together, 
            they exemplify my proficiency in tackling intricate challenges, adapting to various technologies, 
            and efficiently overseeing project management endeavors.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 place-items-center">
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`} 
              index={index} 
              {...project} 
            />
          ))}
        </div>

        <div className="mt-32 pb-8">
          <p className="text-secondary uppercase tracking-wider text-[14px] sm:text-[18px]">
            My Achievements
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Certifications.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 place-items-center">
          {certficates.map((certificate, index) => (
            <ProjectCard 
              key={`certificate-${index}`} 
              index={index} 
              {...certificate} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");