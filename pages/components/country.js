import React from 'react'

export default function Country({ country, index }) {
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <th>{country.flag}</th>
                <td>{country.name.common}</td>
                <td>{country.capital}</td>
                <td>{country.population}</td>
                <td>{country.area || 0}</td>
            </tr>
        </>
    )
}
