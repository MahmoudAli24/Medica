import FooterColItem from "@/components/footer/FooterColItem";

const FooterCol = ({ title, items }) => {
    return (
        <div className={"flex flex-col ms-3 mt-3 sm:mt-0"}>
            <h4 className={"text-white text-[16px] font-bold mb-4"}>{title}</h4>
            <ul className={"flex flex-col gap-2"}>
                {items.map((item) => (
                    <FooterColItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default FooterCol;
