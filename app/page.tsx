import './sass/app.scss'
import { GeneratedLists } from '@/winston/winston-logger';
import { Sidebar } from './components/sidebar';

import { Roboto, Cormorant_Garamond, Bad_Script } from 'next/font/google'

const sans_serif = Roboto({ weight: '300', subsets: ['latin'] })
const serif = Cormorant_Garamond({ weight: ['300', '400', '500'], subsets: ['latin'] })
const script = Bad_Script({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className={ sans_serif.className }>

        <Sidebar/>

        <div className="content-area">
            <section>
                <div className="u-container-width">
                    <div className="sec-title">
                        <h1 className={ script.className }>Rendered Results</h1>
                    </div>

                    <div className={ serif.className }>
                        <GeneratedLists/>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}