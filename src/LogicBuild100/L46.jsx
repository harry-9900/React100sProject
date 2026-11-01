const L46 = () => {
    const twoNumbersum = (a, b) => {
        return a + b;
    }
    let num1 = 5;
    let num2 = 5;

    let result = twoNumbersum(num1, num2);
    let printResult = `The sum of two numbers is: ${result}`;
    return(
        <div>
            <h1>Function দিয়ে দুটি সংখ্যার যোগফল Return করা।</h1>
            <p>{num1} + {num2} = {result}</p>
            <p>{printResult}</p>
        </div>
    )
}
export default L46