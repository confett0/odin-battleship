export const getRandomCoords = () => {
    const getRandomNumber = () => Math.floor(Math.random() * 10);
        const a = getRandomNumber();
        const b = getRandomNumber();
        return [a,b];
}