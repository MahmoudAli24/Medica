const HeadingSection = ({first, second}) => {
    return (<h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-tight first:mt-0">
            <span className="">{first} </span><span>{second}</span>
        </h2>)
}

export default HeadingSection;