"use client";

import styles from "../styles/home.module.sass";
import { Text, Heading } from "@chakra-ui/react";
import { Providers } from "./providers";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

export default function Home() {
	return (
		<div className={styles.something}>
			<Providers>
				<Card bgColor="#d8cac0" borderRadius="12">
					<CardHeader
						bgColor="#602328"
						color="#f0f0f0"
						borderTopRadius="10"
					>
						<Heading size="md">In Progress...</Heading>
					</CardHeader>
					<CardBody>
						<Text color="#1A1E1E">
							This Card Is A Placeholder For What Will Eventually
							Be My Portfolio
						</Text>
					</CardBody>
				</Card>
			</Providers>
		</div>
	);
}
