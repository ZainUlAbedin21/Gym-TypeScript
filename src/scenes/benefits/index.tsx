import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"
import BenefitsPageGraphic from "@/assets/Be"
import ActionButton from "@/shared/ActionButton"

const benefits:Array<BenefitType>=[
    {
        icon:<HomeModernIcon className="h-6 w-6"/>,
        title:"State of The Art Facilities",
        description:"State of The Art Facilities State of The Art Facilities State of The Art Facilities State of The Art Facilities State of The Art Facilities State of The Art Facilities"
    },
    {
        icon:<UserGroupIcon className="h-6 w-6"/>,
        title:"2 of The Art Facilities",
        description:"State of The Art Facilities State of The Art Facilities State of The Art Facilities State of The Art Facilities State of The Art Facilities State of The Art Facilities"
    },
    {
        icon:<AcademicCapIcon className="h-6 w-6"/>,
        title:"3 of The Art Facilities",
        description:"State of The Art Facilities State of The Art Facilities State of The Art Facilities State of The Art Facilities State of The Art Facilities State of The Art Facilities"
    },
    
];

const container={
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
}

HomeModernIcon
type Props = {
    setSelectedPage:(value: SelectedPage)=>void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
<section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
<motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>
    {/*HEADER */}
<motion.div className="md:my-5 md:w-3/5"
initial="hidden"
whileInView="visible"
viewport={{once:true, amount:0.5}}
transition={{delay:0.2, duration:0.5}}
variants={{
  hidden:{opacity:0,x:-50},
  visible:{opacity:1,x:0}
}}


>
    <HText>MORE THAN JUST GYM.</HText>
    <p className="my-5 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum doloremque illo unde accusamus obcaecati! Repellendus iusto, nam similique blanditiis, nesciunt, omnis illum labore natus velit iste quam voluptatem magnam illo!</p>
</motion.div>
{/*BENEFITS */}
<motion.div className="md-flex items-center justify-between gap-8 mt-5"
initial="hidden"
whileInView="visible"
viewport={{once:true,amount:0.5}}
variants={container}
>

{benefits.map((benefit:BenefitType)=>(
    <Benefit
    key={benefit.title}
    icon={benefit.icon}
    title={benefit.title}
    description={benefit.description}
    setSelectedPage={setSelectedPage}
    />
))}


</motion.div>

{/* GRAPHICS AND DESCRIPTION*/}
<div>
    {/* GRAPHIC */}
<img
className="mx-auto"
alt="benefits-page-graphic"
src={BenefitsPageGraphic}
/>
{/*DESCRIPTION */}
<div>
{/**TITLE */}
<div className="relative">
    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
    <div>
        <HText>
            MILLIONS OF HAPPY MEMBERS GETTING{" "}
            <span className="text-primary-500">FIT</span>
        </HText>
    </div>
    </div>

</div>
{/**DESCRIPT */}

<p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non voluptatem doloremque maxime nostrum. Placeat, hic veritatis. Dolorem tempora, consectetur dicta provident minima numquam nemo velit consequuntur! Animi, asperiores voluptatem!
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non voluptatem doloremque maxime nostrum. Placeat, hic veritatis. Dolorem tempora, consectetur dicta provident minima numquam nemo velit consequuntur! Animi, asperiores voluptatem!</p>
<p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt culpa quos rem? Quam accusamus aut, temporibus pariatur corporis recusandae quas hic doloremque quod expedita consequuntur sit, sint quasi alias aliquam?
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non voluptatem doloremque maxime nostrum. Placeat, hic veritatis. Dolorem tempora, consectetur dicta provident minima numquam nemo velit consequuntur! Animi, asperiores voluptatem!
</p>

{/**BUTTON */}
<div className="relative mt-16">
    <div className="before:absolute before:-bottom-20 before:right-40 before:content-sparkles">

    <ActionButton setSelectedPage={setSelectedPage}>
    Join Now
    </ActionButton>

    </div>

</div>
</div>
</div>

</motion.div>
</section>  )
}

export default Benefits