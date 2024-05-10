import NavbarItem from "@/components/navbar/components/NavbarItem";


const NavbarItems = () => {
    const linksNav = [{
        title: 'certificates', link: "certificates"
    }, {
        title: 'Learn', link: "learn"
    }, {
        title: 'Resources', link: "resources"
    }, {
        title: 'Pricing', link: "pricing"
    }];
    return (<>
        {linksNav.map((item, index) => (<NavbarItem key={index} title={item.title} link={item.link}/>))}
    </>)
}

export default NavbarItems;