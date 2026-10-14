import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {
  const users=[
    {
      img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Customers whose needs are met, showing loyalty and trust, so the focus is on retention and engagement.',
      color:'lightseaGreen',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1635766854982-fc151c6e9278?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Customers not fully satisfied; addressing gaps creates growth opportunities with tailored solutions.',
      color:'Orange',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Customers with limited banking access; inclusion and affordable solutions expand participation.',
      color:'Blue',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661559063958-968c8f1928e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Potential customers not yet engaged; identify their needs, attract with tailored strategies, and convert into loyal users.',
      color:'purple',
      tag:'prospective'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'New entrants showing early interest, requiring education, nurturing, and trust‑building to grow adoption.',
      color:'chocolate',
      tag:'Emerging'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
