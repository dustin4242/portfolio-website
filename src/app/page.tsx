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
						<Heading size="md">Example</Heading>
					</CardHeader>
					<CardBody>
						<Text color="#1A1E1E">
							This is some example text lmao
						</Text>
					</CardBody>
					<CardFooter>
						<Text>why is this called a footer</Text>
					</CardFooter>
				</Card>
			</Providers>
		</div>
	);
}
