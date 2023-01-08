
import './App.css';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import info from './data'
import './components/style.css'

export default function App() {
  const cards= info.map(instance => {
    return (
      <Card
      key={instance.id}
      // instance={instance}
      {...instance}
        // key={instance.id}
        // img={instance.coverImg}
        // rating={instance.stats.rating}
        // reviewCount={instance.stats.reviewCount}
        // country={instance.location}
        // title={instance.title}
        // price={instance.price}
        // location={instance.location}
        // openSpots={instance.openSpots}
      />
    )
  })
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <section className='cards-list'>
          {cards}
      </section>
      
    </div>
  )
}
