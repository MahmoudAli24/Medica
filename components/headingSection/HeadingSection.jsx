const HeadingSection = ({children}) => {
    const parts = children.split(' ');
    const text1 = parts.slice(0, Math.ceil(parts.length / 2)).join(' ');
    const text2 = parts.slice(Math.ceil(parts.length / 2)).join(' ');

    return (
        <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-tight text-center text-[--secondary-color] capitalize">
            <span className="first:text-[--main-color]">{text1}</span> {text2}
        </h2>
    );
}

export default HeadingSection;
