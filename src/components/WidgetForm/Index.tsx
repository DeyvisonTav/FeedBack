import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";
  
export const feedbackTypes = {
     BUG: {
            title: 'Problema',
            image: { 
              source: bugImageUrl, 
              alt: 'Imagem de um inseto'
            }
     },
     IDEA: {
            title: 'Ideia',
            image: { 
              source: ideaImageUrl, 
              alt: 'Imagem de uma lampada amarela brilhando'
            }
     },
     OUTHER: {
             title: 'Outro',
             image: { 
              source: thoughtImageUrl, 
              alt: 'Imagem de um balão de pensamentos'
            },
     },
  };
   
    export type feedbackType = keyof typeof feedbackTypes;   

    export function WidgetForm()  {
    const [feedbackType, setFeedbackType] = useState <feedbackType|null>(null)
    const [ feedbackSent, setFeedbackSent ] = useState(false);

    function  handleRestartFeedback() {
      
      setFeedbackSent(false);
      setFeedbackType(null)
    }


    return (
           <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col flex  items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
                      
                             
                       { feedbackSent ? (
                         <FeedbackSucessStep  
                                             onFeedbackRestartRequested = {handleRestartFeedback}

                        />
                       ): (
                         <>

                             {! feedbackType ? (
                           <FeedbackTypeStep onFeedbacktypechange={setFeedbackType} /> 

                         ): (
                          <FeedbackContentStep

                          feedbackType={feedbackType} 
                           onFeedbackRestartRequested={handleRestartFeedback}
                           onFeedbackSent={()=> setFeedbackSent(true)}
                          />
                         )}
                         </>
                       )}
                           
                            

                       <footer className="text-xs  text-neutral-400">
                             Feito com ♥ pela BG Fome-Infinta
                       </footer>

           </div>
  );

}