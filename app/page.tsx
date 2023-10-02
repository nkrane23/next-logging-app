import './sass/app.scss'
import { GeneratedLists } from '@/winston/winston-logger';
import { Sidebar } from './components/sidebar';
import ButtonLoader from './components/button';

import { Roboto, Cormorant_Garamond, Bad_Script } from 'next/font/google'
import {inspect} from "util";
import colors = module

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
                        <ButtonLoader>
                        </ButtonLoader>

                        <GeneratedLists/>

                        <div className="about">
                            <h3>Clicking on the <span className="highlight">New List Please</span> button will generate a new list of words for each set of logs. This demonstrates a <span className="highlight-three">Server Side Component</span> in Next.js.</h3>
                            <br/>
                            <h3>Clicking on the <span className="highlight-two">Update Count</span> buttons within each of the entry boxes will update the count for each. This demonstrates a <span className="highlight-three">Client Side Component</span> because they are not updated together.</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}