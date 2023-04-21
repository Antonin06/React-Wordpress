// import logoAx from './../assets/images/logo-axome-1.svg';
import {Link} from "react-router-dom";
import {MENU_ITEMS} from "../config/graphql/requests";
import {useQuery} from "@apollo/client";
import React from "react";

function Header() {
    const { loading, error, data } = useQuery(MENU_ITEMS, {
        variables: { slug: 'MENU_PRIMARY' }
    })

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error :(</p>;
    const flatListToHierarchical = (
        data = [],
        {idKey='key',parentKey='parentId',childrenKey='children'} = {}
    ) => {
        const tree = [];
        const childrenOf = {};
        data.forEach((item) => {
            const newItem = {...item};
            const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
            childrenOf[id] = childrenOf[id] || [];
            newItem[childrenKey] = childrenOf[id];
            parentId
                ? (
                    childrenOf[parentId] = childrenOf[parentId] || []
                ).push(newItem)
                : tree.push(newItem);
        });
        return tree;
    };
    const hierarchicalList = flatListToHierarchical( data?.menuItems.nodes );

    return (
        <header id="header">
            <div className="container">
                <div className="main-menu">
                    <a href="/" className="logo">
                        Antonin Avon
                    </a>
                    <div className="nav">
                        <ul>
                            {hierarchicalList.map((item) => (
                                <li key={item.databaseId}>
                                    <Link to={
                                        item.uri === '/home/' ? '/' : item.uri
                                    }>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );

}
export default Header;