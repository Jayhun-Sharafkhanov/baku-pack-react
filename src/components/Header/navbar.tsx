import { NavLink } from "react-router-dom";

interface Props {
    to: string;
    pageName: string;
    isEnd?: boolean;
}

const NavigationLink = ({ to, pageName, isEnd = false }: Props) => {
    return (
        <NavLink
            end={isEnd}
            style={({ isActive }) => ({})}
            to={to}
        >{pageName}</NavLink>
    )
}

export default NavigationLink;