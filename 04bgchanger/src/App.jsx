import { useState } from 'react'
import './index.css'
function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-2000"
        style={{backgroundColor:color}}
    >

      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perspiciatis deleniti iusto enim iste laborum, aliquam atque et, optio culpa, minima labore fuga cum velit aspernatur ullam ducimus deserunt nihil.</p>
      </div>
           <div className='fixed flex  m-20 flex-wrap mx-auto bottom-16 justify-center inset-x-0'>
                  <div className='bg-white px-10 py-2 rounded-3xl'>
                          <button onClick={()=>setColor("red")}
                          className=' mr-3 px-2 py-1 rounded-3xl text-white'
                          style={{backgroundColor:"red"}}
                          >
                                      Red
                          </button>
                          <button 
                                  onClick={()=>setColor("green")}
                                  className=' mr-3 px-2 py-1 rounded-3xl text-white'
                                  style={{backgroundColor:"green"}}
                          >
                                     Green
                          </button>
                          <button 
                                    onClick={()=>setColor("blue")}
                                    className=' mr-3 px-2 py-1 rounded-3xl text-white'
                                    style={{backgroundColor:"blue"}}
                                    >
                                     Blue
                          </button>
                        
                  </div>
                  
          </div>

    </div>
    </>
  )
}

export default App
