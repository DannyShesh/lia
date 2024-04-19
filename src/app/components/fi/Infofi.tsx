import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Random from "../Random"

export default function Example() {
  return (
    <div className="relative bg-white mx-auto max-h-screen">
      <div className="m-auto flex items-center justify-center gap-20 max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <Random></Random>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Information</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ronnies El-service</h1>
           
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Sähköasennus.</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Vianetsintä.</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Huolto.</strong> 
                  </span>
                </li>
              </ul>
              
              <p>
              Yli 30 vuoden kokemuksella alalta olen kumppanisi sähköasennuksissa.
              On tärkeää, että sähköasennukset tehdään turvallisesti ja oikein. Tarvitsetko apua sähköasennuksissa, vianmäärityksessä tai korjauksessa

              </p> <br />

              <strong className='font-semibold text-gray-900'>Ota yhteyttä</strong>
               <br />
               <strong className='font-semibold text-blue-600'>Puhelin:       050 560 3033 </strong>
               <br />
               <strong className='font-semibold text-blue-600'>Sähköposti:  Ronnies.elservice@gmail.com</strong>
               <br /> 
               <strong className='font-semibold text-blue-600'>Osoitte:  Peldanintie 12B 3</strong>
               <br />
               <strong className='font-semibold text-blue-600'>Y-tunnus: 3196607-8</strong>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

