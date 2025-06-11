import { Dispatch, FC, SetStateAction } from 'react'
import { CloseIcon } from '../assets/icons'

const Modal: FC<{mode: boolean, setMode: Dispatch<SetStateAction<boolean>>}> = ({mode, setMode}) => {
  if (!mode) return null;
  
  return (
    <div 
      id='wrapper' 
      onClick={(e) => (e.target as HTMLDivElement).id === 'wrapper' && setMode(false)} 
      className="fixed top-0 left-0 bottom-0 right-0 z-50 bg-[#00000028] bg-opacity-25"
      style={{ backdropFilter: 'blur(5px)' }}
    >
        <div className="absolute right-0 top-0 bottom-0 w-3/4 bg-white shadow-lg transform transition-transform duration-300 translate-x-0">
            <button 
              onClick={() => setMode(false)} 
              className="absolute right-2.5 top-2.5 text-[var(--color-text)]"
            >
              <CloseIcon />
            </button>
        </div>
    </div>
  )
}

export default Modal