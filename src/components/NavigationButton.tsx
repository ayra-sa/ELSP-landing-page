import React from 'react'
import ArrowRight from '/assets/icons/arrow-right.svg'
import ArrowLeft from '/assets/icons/arrow-left.svg'

interface NavigationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    direction: 'next' | 'prev';
    onClick: () => void;
  }

const NavigationButton: React.FC<NavigationButtonProps> = ({direction,onClick, ...props}) => {
  return (
    <button className="border border-[#EDEDED] flex items-center justify-center rounded-[30px] w-[52px] p-3" onClick={onClick} {...props}>
      {direction === 'next' ? (
        <img src={ArrowRight} alt="icon arrow" />
      ) : (
        <img src={ArrowLeft} alt="icon arrow" />
      )}
    </button>
  )
}

export default NavigationButton