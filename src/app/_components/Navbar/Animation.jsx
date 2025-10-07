import React from 'react'

const Animation = () => {
  return (
    <>
       <style jsx>{`
                @keyframes slideInBounce {
                    0% {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    70% {
                        transform: translateX(-10%);
                        opacity: 1;
                    }
                    90% {
                        transform: translateX(3%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
                .animate-slideInBounce {
                    animation: slideInBounce 0.6s
                        cubic-bezier(0.25, 1.25, 0.5, 1);
                }

                @keyframes menuFadeSlide {
                    0% {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-menuFadeSlide {
                    animation: menuFadeSlide 0.3s ease-out forwards;
                }
            `}</style>
    </>
  )
}

export default Animation
