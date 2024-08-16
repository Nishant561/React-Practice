import React, { useEffect, useState } from "react";

const useCurrencyInfo = (from, to) => {
    const [rate, setRate] = useState({});

    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?amount=1&from=${from}&to=${to}`)
            .then((res) => res.json())
            .then((data) => setRate(data))
            .catch((error) => {
                console.error('Error fetching data:', error);
                setRate({}); // Set rate to an empty object in case of an error
            });
    }, [from, to]);

    return rate;
};

export default useCurrencyInfo;