import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"

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
<div className="md:my-5 md:w-3/5">
    <HText>MORE THAN JUST GYM.</HText>
    <p className="my-5 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum doloremque illo unde accusamus obcaecati! Repellendus iusto, nam similique blanditiis, nesciunt, omnis illum labore natus velit iste quam voluptatem magnam illo!</p>
</div>
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

</motion.div>
</section>  )
}

export default Benefits