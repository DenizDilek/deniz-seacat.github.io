import { Stack,Flex } from "@mantine/core";
// import { ProjectButtonSection } from "./ProjectButtonSection";
// import { projects } from "virtual:projects";
import SweptByTheStorm from "./cards/SweptByTheStorm.png"
import { PropsWithChildren, ReactNode } from "react";

export const ProjectCard = ({
    children,
    id,
    title,
    text,
    link,
    src,
}: PropsWithChildren<{
    id: string;
    title?: string;
    text?: string;
    link?: string;
    src?: string;
}>) => {
	return (
			<Flex
                    justify="center"
                    align="end"
                    style={{
                        width: 280,
                        height: 31,
                        gridRow: "span 3",
						backgroundColor: "var(--mantine-color-violet-light)",
                    }}
                >
                    <a
                        className="soulSelectable mantine-focus-auto"
                        href={link}
                        aria-label={title}
                        target="_blank"
                        style={{
                            width: 280,
                            height: 62,
                            display: "flex",       // Keeps the anchor sized correctly
                            position: "relative",  // 1. Creates a positioning context for children
                            alignItems: "end",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={src}
                            role="presentation"
                            width={280}
                            height={31}
                            loading="lazy"
                            style={{
                                position: "absolute", // 2. Places image in background layer
                                bottom: 0,            // Aligns image to bottom (optional, adjust as needed)
                                left: 0,
                            }}
                        />
                        <span
                            style={{
                                position: "absolute", // 3. Places text on top layer
                                bottom: 0,            // Adjusts vertical position (0 = very bottom)
                                zIndex: 1,            // Ensures text sits above image
                                // --- 8-BIT STYLING START ---
                                fontFamily: '"Press Start 2P", cursive',
                                fontSize: "10px",   
                                color: "white",
                                textTransform: "uppercase",
                                letterSpacing: "1px",   
                                textShadow: `
                                    -2px -2px 0 #000,  
                                     2px -2px 0 #000,
                                    -2px  2px 0 #000,
                                     2px  2px 0 #000
                                `
                            }}
                        >
                            {text}
                        </span>
                    </a>
                </Flex>

	)
};