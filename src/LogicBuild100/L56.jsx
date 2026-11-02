

const L56 = () => {

    const numbers = [1, 2, 3, 4, 5];
    const Sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <h1>Array-এর সব সংখ্যার যোগফল বের করা।
</h1>
      <p>যোগফল: {Sum}</p>
    </div>
  )
}

export default L56
