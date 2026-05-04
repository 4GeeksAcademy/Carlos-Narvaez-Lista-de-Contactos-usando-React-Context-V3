import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/Contact">
						<button className="btn btn-warning">Contact</button>
					</Link>
					<Link to="/add_contact">
						<button className="btn btn-warning">Add Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};