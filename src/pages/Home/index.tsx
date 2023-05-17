import { Box } from "@/components/Box";
import Manoel from "@/assets/images/Manoel-Gomes.jpg";
import { Textarea } from "flowbite-react";

export function Home() {
	return (
		<div className="grid grid-cols-4 gap-6">
			<Box className="w-full bg-red-400 col-span-3 flex flex-col gap-2">
				<label
					className="font-poppins font-medium text-sm text-neutral-600"
					htmlFor="tweet-something"
				>
					Tweet something
				</label>
				<hr />
				<form className="flex">
					<img className="w-12 h-12 object-cover rounded-lg" src={Manoel} alt="" />
					<Textarea id="tweet-something" name="tweet" className="border-0" />
				</form>
			</Box>
			<Box className="w-full bg-blue-400">Teste</Box>
		</div>
	);
}
