# animpure

## Simple Animation Library
It's complete functional JavaScript animation library without any dependencies. Simply animate anything with a progress callback. You can choose any easing you want.

## Installation

### NPM
```npm i @gozenc/animpure```

### Yarn
```yarn add @gozenc/animpure```

### Sample Usage
```javascript
import animate, { Eases } from "@gozenc/animpure";

const box = document.getElementById("box");

animate((progress: number) => {
	// Progress starts from 0 to 1
	// In this example; we want 0 to 100 so we multiply progress with 100
	// So it goes 0,1,2,3... instead of 0.000000001, 0.000000002...
	const animatedValue = (progress * 100).toFixed();
	box.style.width = animatedValue + "px"
}, 1000, Eases.inOutQuint) // If no ease is passed, it will be linear.
```
### Sample Usage with React as a Full Page Menu
You can use it a for full page menu, an example with React, Recoil and Tailwind classes. (If you willing to use this, you need to build a button to trigger the state):
```javascript

import React from "react";
import { menuOpenedState } from "../store";
import animate, { Eases } from "@gozenc/animpure";

export default function Menu() {

    const [menuOpened] = useRecoilState(menuOpenedState);
    const container = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!container.current) return;
        if (menuOpened) {
            animate((progress: number) => {
                const animatedValue = (progress * 100).toFixed();
                container.current.style.height = animatedValue + "vh";
            }, 1000, Eases.inOutQuint);
        } else {
            // If menu is not yet interacted - do nothing.
            if (container.current.style.height === "") return;
            animate((progress: number) => {
                const animatedValue = (100 - (progress * 100)).toFixed();
                container.current.style.height = animatedValue + "vh";
            }, 1000, Eases.inOutQuint);
        }
    }, [menuOpened]);

    const containerClasses = "bg-black fixed w-full z-20 border border-black";

    return (
        <div ref={container} className={containerClasses}/>
    );
}

```

### Thank you
For your interest. I am still developing it but you can download and use it. It's designed for thinking simple and lightweight code structures.