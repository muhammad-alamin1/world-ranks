import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/country.module.css';

export default function Country() {
    const [data, setData] = useState(null);
    const [lang, setLang] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const countryName = router.query.name;
    let borders = [];
    let currencies = [];
    let languages = [];

    useEffect(() => {
        setLoading(true)
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data[0])
                setLoading(false)
            })
    }, [])

    console.log(data)

    if (loading) return <p className="text-center my-3">Loading...</p>
    if (!data) return <h4 className="text-center my-4">No profile data</h4>

    return (
        <div className="container">
            <h2 className="text-center my-5 text-muted">World Ranks</h2>
            <div className="row">
                <div className={`col-md-4 ${styles.leftCard}`}>
                    <div className="col">
                        <div className="card">
                            <img src={data.flags.png} className={`card-img-top ${styles.flags}`} alt="Flag" />
                            <div className="card-body">
                                <h4 className="card-title text-center"><strong><i>{data.name.official}</i></strong></h4>
                                <p className="text-center">{data.region}</p>
                                <div className="row text-center my-4">
                                    <div className="col-md-6">
                                        <span>{data.population}</span>
                                        <p className="text-muted">Population</p>
                                    </div>
                                    <div className="col-md-6">
                                        <span>{data.area}</span>
                                        <p className="text-muted">Area</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div class="card">
                        <div className={`d-flex p-1`}>
                            <h4 className="text-muted">Capital</h4>
                            <h4 className="ms-auto">{data.capital[0]}</h4>
                        </div><hr />
                        <div className={`d-flex p-1`}>
                            <h4 className="text-muted">Borders</h4>
                            {data.borders.map(name => {
                                borders.push(name + ', ');
                            })}<h6 className="ms-auto">{borders}</h6>
                        </div><hr />
                        <div className={`d-flex p-1`}>
                            <h4 className="text-muted">Currencies</h4>
                            {
                                Object.entries(data.currencies).map(([key, value]) => {
                                    Object.entries(value).map(([key1, value1]) => {
                                        currencies.push(value1)
                                    })
                                })
                            }<h6 className="ms-auto">{currencies}</h6>
                        </div><hr />
                        <div className={`d-flex p-1`}>
                            <h4 className="text-muted">Languages</h4>
                            {
                                Object.entries(data.languages).map(([key, value]) => {
                                    Object.entries(value).map(([key1, value1]) => {
                                        languages.push(value1)
                                    })
                                })
                            }<h6 className="ms-auto">{languages}</h6>
                        </div><hr />
                        <div className={`d-flex p-1`}>
                            <h4 className="text-muted">TimeZone</h4>
                            <h6 className="ms-auto">{data.timezones[0]}</h6>
                        </div><hr />
                        <div className={`d-flex p-1`}>
                            <h4 className="text-muted">Subregion</h4>
                            <h6 className="ms-auto">{data.subregion}</h6>
                        </div><hr />
                    </div>
                </div>
            </div>
        </div >
    )
}
