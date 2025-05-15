const Button = ({className, id, text}) => {
  return (
    // <a className={`cta-wrapper ${className ?? ''}`} >
    //     <div className="cta-button group">
    //         <div className="bg-circle"></div>
    //         <p className="text">{text}</p>
    //         <div className="arrow-wrapper">
    //             <img src="/images/arrow-down.svg" alt="arrow" />
    //         </div>
    //     </div>
    // </a>

    <a className={`${className ?? ''} cta-wrapper`}>
        <div className="cta-button group relative">
            <p className="text">{text}</p>
            <div className="absolute right-10 top-1/2 group-hover:bg-white-50 size-10 rounded-full -translate-y-1/2 flex items-center justify-center overflow-hidden">
                <img className="animate-bounce size-5 " src="/images/arrow-down.svg" alt="arrow" />
            </div>
        </div>
    </a>
)
}

export default Button