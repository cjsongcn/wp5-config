
type Add<T = number> = (num1: T, num2: T) => T;

const add: Add = (num1, num2) => {
    return num1 + num2;
}

export default add;