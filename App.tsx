export default function App(props: { length: number }) {
  const items = Array.from({ length: props.length }).map((_, i) => (
    <li key={i}>Item</li>
  ));
  return <ul>{items}</ul>;
}
