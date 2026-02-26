import { Stack,Flex } from "@mantine/core";
// import { ProjectButtonSection } from "./ProjectButtonSection";
// import { projects } from "virtual:projects";
import SweptByTheStorm from "./cards/SweptByTheStorm.png";
import Meow from "./cards/Meow.png";
import MeowThrough from "./cards/MeowThroughIt.png";
import SevenWinters from "./cards/SevenWinters.png";
import YSMH from "./cards/YSMH.png";
import DemonsDeal from "./cards/DemonsDeal.png";
import KazliGures from "./cards/KazliGures.png";
import IllusionOfChoice from "./cards/IllusionOfChoice.png";
import Ouroboros from "./cards/OuroborosExpress.png"
import { ProjectCard } from "./ProjectCard";

export const ProjectListV2 = () => {
	return (
		<Stack gap={4} align="center" w="100%">
			<ProjectCard 
                id="1"
                title="Swept By The Storm"
                link="https://denniyopi.itch.io/swept-by-the-storm"
                src={SweptByTheStorm}
                text="Swept By The Storm"
            />
            <ProjectCard 
                id="2"
                title="Demon's Deal"
                link="https://denniyopi.itch.io/demons-deal"
                src={DemonsDeal}
                text="Demon's Deal"
            />
            <ProjectCard 
                id="3"
                title="Your Sword My Heart"
                link="https://denniyopi.itch.io/your-heart-my-sword"
                src={YSMH}
                text="Your Sword My Heart"
            />
            <ProjectCard 
                id="4"
                title="Kazlı Güreş"
                link="https://denniyopi.itch.io/kazl-gre"
                src={KazliGures}
                text="Kazlı Güreş"
            />
            <ProjectCard 
                id="5"
                title="Meow Through It"
                link="https://merrygold.itch.io/meow-through-it"
                src={MeowThrough}
                text="Meow Through It"
            />
            <ProjectCard 
                id="5"
                title="Trick and Treat in Meoween"
                link="https://denniyopi.itch.io/trick-or-treat-in-meoween"
                src={Meow}
                text="Trick and Treat in Meoween"
            />
            <ProjectCard 
                id="6"
                title="The Ouroboros Express"
                link="https://store.steampowered.com/app/3234430/The_Ouroboros_Express/"
                src={Ouroboros}
                text="The Ouroboros Express"
            />
            <ProjectCard 
                id="7"
                title="Illusion Of Choice"
                link="https://denniyopi.itch.io/illusionofchoice"
                src={IllusionOfChoice}
                text="Illusion Of Choice"
            />
            <ProjectCard 
                id="8"
                title="Seven Winters"
                link="https://denniyopi.itch.io/seven-winters"
                src={SevenWinters}
                text="Seven Winters"
            />
            
			
			{/* {projects.list.filter(x => !x.tags?.includes("archived") && !x.tags?.includes("status:wip")).map(project => (
				<ProjectButtonSection project={project} key={project.id} />
			))} */}
		</Stack>
	)
};
