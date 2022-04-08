import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import style from '../../styles/country.module.css';

export default function CountryTable({ countries }) {
    const [country, setCountry] = useState({});
    // console.log(countries)
    const route = useRouter();

    //single country
    const handleClick = (data) => {


    }
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
                            <Link href={`/country/${country.name.common}`} key={country.name}>
                                <tr className={style.country}>
                                    <th>{index + 1}</th>
                                    <th>{country.flag}</th>
                                    <td>{country.name.common}</td>
                                    <td>{country.capital}</td>
                                    <td>{country.population}</td>
                                    <td>{country.area || 0}</td>
                                </tr>
                            </Link>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
