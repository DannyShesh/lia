import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Random from "./Random"

export default function Example() {
  return (
    <div className="relative bg-white mx-auto max-h-screen">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute m-auto xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <Random></Random>
          
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Information</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ronnies El-service</h1>
           
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Elinstallationer.</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Felsökning.</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Service.</strong> 
                  </span>
                </li>
              </ul>
              
              <p>
              Med snart 30 års erfarenhet i branschen är jag din partner vid Elinstallationer. 
              Det är viktigt att Elinstallationer blir säkert och rätt utförda. Behöver du hjälp med Elinstallationer, felsökning eller reparation

              </p> <br />

              <strong className='font-semibold text-gray-900'>Ta Kontakt</strong>
               <br />
               <strong className='font-semibold text-blue-600'>Telefon:       050 560 3033 </strong>
               <br />
               <strong className='font-semibold text-blue-600'>Epost:  Ronnies.elservice@gmail.com</strong>
               <br /> 
               <strong className='font-semibold text-blue-600'>Adress:  Peldansvägen 12B 3</strong>
               <br />
               <strong className='font-semibold text-blue-600'>FO-nummer: 3196607-8</strong>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

