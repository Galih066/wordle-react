export const findRandomResult = (result: string[]) => {
    const index: number = Math.floor(Math.random() * result.length);
    const arrResult = Array.from(result[index]);
    return arrResult;
};