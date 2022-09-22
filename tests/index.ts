import animate from "../build";

animate((progress: number) => {
    console.log(progress);
}, 1000);