import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import PrimaryNavbar from "./Primary";

const Navbar = async () => {
	const session = await getServerSession(authOptions);

	return <PrimaryNavbar session={session} />;
};

export default Navbar;
