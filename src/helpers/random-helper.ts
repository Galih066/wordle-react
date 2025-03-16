export const findRandomResult = (result: string[]) => {
    const index: number = Math.floor(Math.random() * result.length);
    return result[index];
};