import React from 'react'
import AppHeader from '../organisms/AppHeader'
import AddCard from '../atoms/AddCard'
import Greeting from '../organisms/Greeting'
import Card from '../atoms/Card'

export default function OrganizationHome() {
  return (
           <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

               
                <AppHeader />
                
                <div className="container">
                
                <div className="d-flex flex-column flex-lg-row justify-content-between mt-5 align-items-center ">
                   

                    <Greeting />
                 

                    
                    
                    <div id="cards" className="d-flex my-3 mx-5">
                    <a className="d-flex align-items-center px-3 py-2 mr-2 border rounded" href="#">
                        <div className="mr-2">
                            <img width="30" height="30" src="./img/svg-icons/chart-diagram-pie-svgrepo-com.svg" />
                        </div>
                        <div className="text-nowrap">
                            <p className="small font-weight-bold mb-0">Meu trabalho</p>
                            <p className="small text-gray-500 mb-0">Ver cards</p>
                        </div>
                    </a>
                    
                    <a className="d-flex align-items-center px-3 py-2 mr-2 border rounded" href="#">
                        <div className="mr-2">
                            <img width="30" height="30" src="./img/svg-icons/chart-growth-invest-svgrepo-com.svg" />
                        </div>
                        <div className="text-nowrap">
                            <p className="small font-weight-bold mb-0">Templates</p>
                            <p className="small text-gray-500 mb-0">Ideias pra você</p>
                        </div>
                    </a>
                 
                     <a className="d-flex align-items-center px-3 py-2 border rounded" href="#">
                        <div className="mr-2">
                            <img width="30" height="30" src="./img/svg-icons/communication-letter-memo-svgrepo-com.svg" />
                        </div>
                        <div className="text-nowrap">
                            <p className="small font-weight-bold mb-0">Ajuda</p>
                            <p className="small text-gray-500 mb-0">Tire suas dúvidas</p>
                        </div>
                    </a>
           
                    </div>
                    
                
                </div>



            <div className="mt-5 border-bottom">
                <h3 className="font-weight-bold">Pipes</h3>
            </div>

            <div id="Pipes" className="mt-4 d-flex">
                <AddCard />
                 
                <Card />

                <Card />

            </div>
            

            <div className="mt-5 border-bottom">
                <h3 className="font-weight-bold ">Databases</h3>
            </div>
            <div id="Databases" className="mt-4 mb-5">
            <AddCard />
        
             </div>


                </div>


            </div>



        </div>


    
    
  )
}
