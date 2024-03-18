import { SelectedPage } from "@/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props{
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replaceAll(" ","") as SelectedPage;
    return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : "text-black"}
        transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link