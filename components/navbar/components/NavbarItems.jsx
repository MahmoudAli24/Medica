import NavbarItem from "@/components/navbar/components/NavbarItem";

const NavbarItems = ({dict}) => {
    const linksNav = [{
        title: `${dict.certificates}`, link: "certificates"
    }, {
        title: `${dict.Learn}`, link: "learn"
    }, {
        title: `${dict.Resources}`, link: "resources"
    }, {
        title: `${dict.Pricing}`, link: "pricing"
    }];
    return (<>
        {linksNav.map((item, index) => (<NavbarItem key={index} title={item.title} link={item.link}/>))}
    </>)
}

export default NavbarItems;