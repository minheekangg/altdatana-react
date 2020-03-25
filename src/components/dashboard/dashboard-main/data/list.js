import React, {useState} from 'react';
import { List } from "semantic-ui-react";
import CurrencyFormat from "react-currency-format";

import { CATEGORIES_ICON, CATEGORIES } from "../variables";

function ListWrapper(props) {
    const [viewMore, setViewMore] = useState(true);

    if (!props || ! props.data) {
        return <div> nothing to show </div>
    }
    return (
        <List divided relaxed className="donut-list">
            <List.Item>
                <List.Content style={{ textAlign: "right" }}>
                <button className="btn-subtle" onClick={()=> setViewMore(!viewMore)}>{viewMore ? '- View Less' : '+ View More'}</button>
                </List.Content>
            </List.Item>
            { viewMore && propsArray(props.data).map(c => {
                const category = CATEGORIES[c];
                return (
                    <List.Item key={category}>
                        <List.Icon
                            name={CATEGORIES_ICON[category]}
                            size="large"
                            verticalAlign="middle"
                        />
                        <List.Content style={{ textAlign: "right" }}>
                            <List.Header as="a">{c}</List.Header>
                            <List.Description as="a">
                                <CurrencyFormat
                                    value={props.data[c]}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                            </List.Description>
                        </List.Content>
                    </List.Item>
                );
            })}
        </List>
    );
}

export default ListWrapper;

const propsArray = input => {
    return Object.keys(input);
}