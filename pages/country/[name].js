import { useRouter } from 'next/router';
import React from 'react';

export default async function Country({ country }) {
    const router = useRouter();
    const countryName = router.query.name;

    return (
        <div> country details</div>
    )
}
