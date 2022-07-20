import React, { FC } from "react";
import { Router, Route, useHistory } from "@/components/Route";

const Foo = () => <>foo</>;
const Bar = () => <>bar</>;

const Links = () => {
	const history = useHistory();

	const go = (path: string) => {
		const state = { name: path };
		history.push(path, state);
	};

	return (
		<div className="demo">
			<button onClick={() => go("foo")}>foo</button>
			<button onClick={() => go("bar")}>bar</button>
		</div>
	);
};

const App: FC = () => {
	return (
		<div>
			<Router>
				<Links />
				<Route path="foo">
					<Foo />
				</Route>
				<Route path="bar">
					<Bar />
				</Route>
			</Router>
		</div>
	);
};

export default App;
