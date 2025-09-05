interface ListDisplayProps {
  data: string[];
}

export default function ListDisplay({ data }: ListDisplayProps) {
  const listData1 = data.map((x) => {
    return x;
  });

  const listData2 = data.map((x) => x + " test");

  console.log(listData1);
  console.log(listData2);

  return (
    <>
      {data.map((x) => (
        <div>{x}</div>
      ))}
    </>
  );
}
