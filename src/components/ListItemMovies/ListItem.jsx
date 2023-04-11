export default function ListItem({ responsePopular }) {
  return (
    <>
      {responsePopular.map((el, index) => {
        return <li key={index}>{el.title}</li>;
      })}
    </>
  );
}
