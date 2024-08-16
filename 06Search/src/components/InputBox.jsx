import React ,{useState} from 'react'


function InputBox() {

    const fruits = [
        'banana',
        'apple',
        'orange',
        'grapes',
        'kiwi'
      ];

      const handelSearch = (event)=>{
                    if(event.target.value === ""){
                        setList(fruits)
                        return;
                    }

                    const filteredValues = fruits.filter(
                        (item)=>
                        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
                    )

                    setList(filteredValues)
      }

      const [lists, setList] = useState(fruits);
  return (
    <>
        <div className='w-full h-screen flex flex-col items-center justify-center'>


                <input
                    className='
                        px-1 py-3 border-2 border-black
                    '
                    placeholder='Fruits'
                    onChange={handelSearch}


                />
                {lists.map((items, index) => (
                    <div key={index}>
                         {items}

                     </div>
      ))}


        </div>
    
    </>
  )
}

export default InputBox
