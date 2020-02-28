import React, { useState } from "react";
import "../index.css";
import { Button } from 'reactstrap';

export default function SearchForm({ query, handleInputChange }) {


  return (
    <section className="search-form">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="Search by Name"
          autoComplete="off"
        />{' '}
        <Button >Search</Button>
        {/*  onSubmit={onSubmit} */}
      </form>
    </section>
  );
}
