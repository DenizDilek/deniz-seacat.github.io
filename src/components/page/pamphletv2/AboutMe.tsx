import { IconBrandBlender,IconBrandItch, IconBrandCloudflare, 
	IconBrandCSharp, IconBrandCss3, IconBrandDocker, IconBrandFirefox, IconBrandGit, 
	IconBrandGithub, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandNodejs, 
	IconBrandSteam, IconBrandReact, IconBrandUnity, IconBrandTypescript, IconBrandVite, IconBrandVscode, IconExternalLink, TablerIcon } from "@tabler/icons-react"
import { Anchor, Group, Image, Stack, Table, Text, Tooltip } from "@mantine/core";
import { CustomAccordion } from "./CustomAccordion";
import { MantineLogo } from "@mantinex/mantine-logo";
import { useDynamic } from "../../../hooks/useDynamic";
import { useEffect, useState } from "react";

export const IconsGroup = ({
	data,
}: {
	data: [TablerIcon, string][];
}) => {
	return (
		<Group justify="center" gap={0}>
			{data.map(([Icon, tooltip], i) => (
				<Tooltip label={tooltip} disabled={!tooltip} key={i}>
					<Icon />
				</Tooltip>
			))}
		</Group>
	);
};

export const TimezoneSection = () => {
	const [time, setTime] = useState("??:??");

	const timeZone = "Europe/Istanbul"; // UTC+3

	useEffect(() => {
		const upd = () => {
			const now = new Date();
			const timeString = new Intl.DateTimeFormat("en", {
				timeZone,
				hour: "2-digit",
				minute: "2-digit",
				hour12: false,
			}).format(now);
			setTime(timeString);
		};

		const interval = setInterval(upd, 5 * 1000);
		upd();
		return () => clearInterval(interval);
	}, []);

	const relativity = useDynamic(() => {
		const targetOffset = 180; // UTC+2 in minutes
		const diff = (-new Date().getTimezoneOffset()) - targetOffset;

		if (diff === 0) return "in the same timezone as me";

		const hours = Math.floor(Math.abs(diff) / 60);
		const mins = Math.abs(diff) % 60;

		const timeStr = [
			hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""}` : "",
			mins > 0 ? `${mins} minute${mins > 1 ? "s" : ""}` : ""
		].filter(Boolean).join(" and ");

		return diff > 0
			? `${timeStr} ahead of me`
			: `${timeStr} behind me`;
	});

	return (
		<Text span inherit>
			My timezone is <Text span inline inherit fw="bold" c="blue">UTC+3</Text> and it's currently <Text span inline inherit fw="bold" c="blue">
				{time}
			</Text> here. You are <Text inline inherit span fw="bold">
				{relativity || "<loading>"}
			</Text>!
		</Text>
	);
};

export const AboutMe = () => {
	return (
		<>
			<CustomAccordion
				id="x:about-who"
				title="Who are you?"
			>
				<Stack gap="xs">
					<Text span inherit>
						Hi, I'm 🌊 <Tooltip label="Turkish word for 'Sea'.">
							<Text span inline inherit c="blue" fw="bold">Deniz</Text>
						</Tooltip>! I'm a <Text span inline inherit fw="bold">
							🖥️🎮 game developer
						</Text> who likes coding, music production, drawing and writing <Text span inline inherit ff="Arial" fw="bold" className="rainbowText">:3</Text>
					</Text>

					<TimezoneSection />

					<Text span inherit>
						I can speak <Text span inline inherit fw="bold">
							🇬🇧 English
						</Text> and <Text span inline inherit fw="bold">
							🇹🇷 Turkish
						</Text>.
					</Text>

					<Text span inherit>
						I usually play story based video games. I love <Anchor
						inherit
						href="https://undertale.com/"
						target="_blank"
						c="unset"
						inline
						>
							Undertale  
						</Anchor>
						&nbsp; and &nbsp;
						<Anchor
						inherit
						href="https://07th-expansion.net/"
						target="_blank"
						c="unset"
						inline>
						When they cry series
						</Anchor>.
						
					</Text>
				</Stack>
			</CustomAccordion>
			<CustomAccordion
				id="x:about-skills"
				title="What do you use?"
			>
				<Stack align="center">
					<Stack gap={0}>
						<IconsGroup
							data={[
								[IconBrandTypescript, "TypeScript"],
								[IconBrandReact, "React"],
								[IconBrandBlender, "Blender"],
								[IconBrandCSharp, ".NET 5-8"],
								[IconBrandSteam, "Steam"],
								[IconBrandHtml5, "HTML"],
								[IconBrandCss3, "CSS"],
								[IconBrandJavascript, "JavaScript"],
							]}
						/>

						<IconsGroup
							data={[
								[IconBrandVite, "Vite"],
								[IconBrandUnity, "Unity"],
								[IconBrandItch, "Itch"],
								[IconBrandCloudflare, "Cloudflare"],
								[IconBrandNodejs, "NodeJS"],
								[IconBrandGit, "Git"],
								[IconBrandGithub, "Github"],
								[IconBrandDocker, "Docker"],
							]}
						/>
					</Stack>

					<Table
						ta="end"
						withRowBorders={false}
						fw="bold"
						cellSpacing={4}
						verticalSpacing={0}
						horizontalSpacing={4}
						data={{
							body: [
								["Editor", (
									<Group align="center" gap={4}>
										<IconBrandVscode />
										<Text span>
											VSCode
										</Text>
									</Group>
								)],
								["Browser", (
									<Group align="center" gap={4}>
										<IconBrandFirefox />
										<Text span>
											Firefox
										</Text>
									</Group>
								)],
								["UI Library", (
									<Group align="center" gap={4}>
										<MantineLogo type="mark" height={22} />
										<Anchor
											href="https://mantine.dev"
										>
											Mantine
											{" "}
											<IconExternalLink size={14} style={{ display: "inline", verticalAlign: "middle" }} />
										</Anchor>
									</Group>
								)],
							],
						}}
					/>
				</Stack>
			</CustomAccordion>
		</>
	);
};
