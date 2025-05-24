import React from 'react';
import option from '~/components/option';


const indexPage = () => {
  return (
    <header className="bg-[#05574a] text-white mt-[2rem] p-4">
      <div className="container flex justify-between items-center">
        <div className="cnt1">
          <p>EMP CODE: </p>
        </div>
        <div className="cnt2 flex mr-[10rem]">
          <div className="flex items-center gap-5 p-2 mr-[2rem]">
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-phone"></i>
          </div>
          <div>
              <p>STATUS:</p>
          </div>
        </div>
      </div>
    </header>

  )
}

export default indexPage
