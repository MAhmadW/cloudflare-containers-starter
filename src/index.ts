import {Container, getRandom} from "@cloudflare/containers"

const NUM_INSTANCES = 3 
const KEEP_ALIVE_TIME = '1h'

export class MyContainer extends Container {
	defaultPort = 8080;
	requiredPorts = [8080];
	sleepAfter = KEEP_ALIVE_TIME;
	manualStart = true;

	override onStart() {
		console.log(`Container successfully started at ${(new Date()).toString()}`);
	}

	override onStop() {
		console.log(`Container successfully shut down at ${(new Date()).toString()}`);
	}

	override onError(error: unknown) {
		console.log(`Container error at ${(new Date()).toString()}: ${error}`);
	}
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log(`Worker received request at ${(new Date()).toString()}`)

		const container = await getRandom(env.MY_CONTAINER, NUM_INSTANCES)

		try {
			await container.startAndWaitForPorts()
		}catch (e){
			console.log(`Worker couldn't start container at ${(new Date()).toString()}, because: ${e}`)
		}

		return container.fetch(request)
	},
} satisfies ExportedHandler<Env>;
