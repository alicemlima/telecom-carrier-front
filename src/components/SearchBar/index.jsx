import React from "react";
import { Col, FormControl } from "react-bootstrap";

const SearchBar = ({ value, onChange }) => {
    return (
        <Col>
            <FormControl 
                type='search'
                className="my-2 w-auto"
                value={value}
                placeholder="Type to search..."
                onChange={(e) => onChange(e.target.value)}
            />
        </Col>
    );
}

export default SearchBar;