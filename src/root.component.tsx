import './styles.css'

export default function Root(props) {
  return <section className='background-portal'>
    <h1>{props.name} is mounted!</h1>
    <h2>This application allows you to view the various applications available.</h2>
  </section>;
}
