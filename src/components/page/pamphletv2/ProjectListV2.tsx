import { Stack,Flex } from "@mantine/core";
// import { ProjectButtonSection } from "./ProjectButtonSection";
// import { projects } from "virtual:projects";
import SweptByTheStorm from "./cards/SweptByTheStorm.png"

export const ProjectListV2 = () => {
	return (
		<Stack gap={4} align="center" w="100%">
			<Flex
                    justify="center"
                    align="end"
                    style={{
                        width: 264,
                        height: 31,
                        gridRow: "span 3",
						backgroundColor: "var(--mantine-color-violet-light)",
                    }}
                >
                    <a
                        className="soulSelectable mantine-focus-auto"
                        href={"https://denniyopi.itch.io/swept-by-the-storm"}
						aria-label="Swept By The Storm"
                        target="_blank"
                        style={{
                            width: 264,
                            height: 62,
                            display: "flex",
                            alignItems: "end",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={SweptByTheStorm}
							role="presentation"
                            width={264}
                            height={31}
                            loading="lazy"
                        />
                    </a>
                    
                </Flex>
			
			{/* {projects.list.filter(x => !x.tags?.includes("archived") && !x.tags?.includes("status:wip")).map(project => (
				<ProjectButtonSection project={project} key={project.id} />
			))} */}
		</Stack>
	)
};
