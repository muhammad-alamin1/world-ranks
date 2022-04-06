import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Country from './country';

export default function CountryTable({ countries }) {
    const [country, setCountry] = useState({});
    // console.log(countries)
    const route = useRouter();

    //single country
    // const handleClick = (data) => {


    // }
    return (
        <>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Flag</th>
                        <th scope="col">Name</th>
                        <th scope="col">Capital</th>
                        <th scope="col">Population</th>
                        <th scope="col">Area (km<sup>2</sup>)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries.map((country, index) => (
                            <Country country={country} index={index} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
