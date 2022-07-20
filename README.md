# 闭包陷阱

```ts
import React, { useCallback, useState, FC } from "react";
import { Button, message } from "antd";

const App: FC = () => {
	const [text, setText] = useState("");

	const sendMessage = (str: string) => {
		message.info(str);
	};

	const onClick = useCallback(() => {
		setText("changed");
		sendMessage(text);
	}, []);

	return (
		<div>
			<Button onClick={onClick}>demo</Button>
		</div>
	);
};

export default App;
```

以上代码的一种解决方式是为 useCallback 增加依赖项。

但是这么做了后，每当依赖项（text）变化，useCallback 会返回一个全新的 onClick 引用，这就失去了 useCallback 缓存函数引用的作用。
