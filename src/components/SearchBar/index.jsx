import React from "react";
import { Col } from "react-bootstrap";

const SearchBar = ({ value, onChange }) => {
    return (
        <Col>
            <input 
                type='search'
                value={value}
                placeholder={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </Col>
    );
}

export default SearchBar;